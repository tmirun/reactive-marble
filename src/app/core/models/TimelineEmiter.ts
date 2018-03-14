import {Timeline} from './Timeline';
import {Subject} from 'rxjs/Subject';

export class TimelineItemDataArgument {
  public value?: any;
  public color?: string;
  public isLimit?: boolean;
}

export class TimelineItemData {
  public range?: number;
  public value?: any;
  public color?: string;
  public isLimit?: boolean;

  constructor (range, param: TimelineItemDataArgument = {}) {
    this.range = range;
    this.value = param.value;
    this.color = param.color;
    this.isLimit = param.isLimit;
  }
}

export class TimelineEmiter {
  public group: any;
  public cx: number;
  public cy: number;
  public circleSize = 30;
  public timeline: Timeline;
  public draw;
  public circle;
  public text;
  public change$: Subject<Number> = new Subject<number>();
  private _draggable: boolean;
  private _color: string;

  private _range: number;

  constructor (timeLine: Timeline, params?: TimelineItemData, draggable: boolean = true) {
    const defaultParams: TimelineItemData = {
      range: 10,
      value: null,
      color: 'blue'
    };
    params = Object.assign(defaultParams, params);
    this._draggable = draggable;
    this._color = params.color;

    this.timeline = timeLine;
    this.cy = this.timeline.center.y;
    this.cx = this.timeline.initPos.x;
    this.draw = this.timeline.draw;
    this.group = this.draw.group();

    this.circle = this.draw.circle(this.circleSize);
    this.circle.fill(params.color);
    this.circle.stroke({ width: 1 });

    this.text = this.draw.text(`${params.value}`);
    this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);

    this.group.add(this.circle);
    this.group.add(this.text);

    this.group.cy(this.timeline.center.y);

    if (this._draggable) {
      this.group.draggable((x, y) => {
        this.range = Math.round(x / this.timeline._rangeMetric);
        return {x: false, y: false};
      });
      this.group.style('cursor', 'ew-resize');
      this.group.mousedown(() => {
        this.group.front();
      });
    }

    this.range = params.range;
  }

  set range (range: number) {
    range = range < this.timeline.range.min ? this.timeline.range.min : range;
    range = range > this.timeline.range.max ? this.timeline.range.max : range;
    if (range === this._range) { return; }

    this._range = range;
    this.group.cx(this.timeline.initPos.x + this._range * this.timeline._rangeMetric);
    this.change$.next(this._range);
  }
  get range (): number {
    return this._range;
  }

  set color (color: string) {
    this._color = color;
    this.circle.fill(this._color);
  }

  remove(): void {
    this.group.remove();
    this.change$.complete();
  }
}
