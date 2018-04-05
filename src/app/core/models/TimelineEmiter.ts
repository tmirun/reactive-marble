import {Timeline} from './Timeline';
import {Subject} from 'rxjs/Subject';

export class TimelineItemDataArgument {
  public value?: any;
  public color?: string;
  public isLimit?: boolean;
}

export class TimelineItemData {
  public time?: number;
  public value?: any;
  public color?: string;
  public isLimit?: boolean;

  constructor (time, param: TimelineItemDataArgument = {}) {
    this.time = time;
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

  private _time: number;

  constructor (timeLine: Timeline, params?: TimelineItemData, draggable: boolean = true) {
    const defaultParams: TimelineItemData = {
      time: 10,
      value: null,
      color: 'white'
    };
    params = Object.assign(defaultParams, params);
    this._draggable = draggable;
    this._color = params.color || 'white';

    this.timeline = timeLine;
    this.cy = this.timeline.center.y;
    this.cx = this.timeline.initPos.x;
    this.draw = this.timeline.draw;
    this.group = this.draw.group();

    this.circle = this.draw.circle(this.circleSize);
    this.circle.fill(this._color);
    this.circle.stroke({ width: 1 });

    this.text = this.draw.text(`${params.value}`);
    this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);

    this.group.add(this.circle);
    this.group.add(this.text);

    this.group.cy(this.timeline.center.y);

    if (this._draggable) {
      this.group.draggable((x, y) => {
        this.time = Math.round(x / this.timeline._timeMetric);
        return {x: false, y: false};
      });
      this.group.style('cursor', 'ew-resize');
      this.group.mousedown(() => {
        this.group.front();
      });
    }

    this.time = params.time;
  }

  set time (time: number) {
    time = time < this.timeline.time.min ? this.timeline.time.min : time;
    time = time > this.timeline.time.max ? this.timeline.time.max : time;
    if (time === this._time) { return; }

    this._time = time;
    this.group.cx(this.timeline.initPos.x + this._time * this.timeline._timeMetric);
    this.change$.next(this._time);
  }
  get time (): number {
    return this._time;
  }

  set color (color: string) {
    this._color = color || 'white';
    this.circle.fill(this._color);
  }

  refreshTextCenter () {
    this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);
  }

  remove(): void {
    this.group.remove();
    this.change$.complete();
  }
}
