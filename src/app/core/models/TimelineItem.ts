import {Timeline} from './Timeline';
import {Payload} from './Payload';
import {Subject} from 'rxjs/Subject';

export class TimelineItem {
  public group: any;
  public cx: number;
  public cy: number;
  public circleSize: number = 30;
  public timeline: Timeline;
  public draw;
  public circle;
  public text;
  public change$: Subject<Number> = new Subject<number>();

  private _range: number;

  constructor (timeLine: Timeline, params?: Payload) {
    const defaultParams: Payload = {
      range: 10,
      value: null,
      color: 'blue'
    };
    params = Object.assign(defaultParams, params);

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
    this.group.draggable((x, y) => {
      this.range = Math.round(x / this.timeline._rangeMetric);
      return {x: false, y: false};
    });
    this.group.style('cursor', 'ew-resize');
    this.group.mousedown(() => {
      this.group.front();
    });

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
  get range ():number {
    return this._range;
  }

  refreshRangePosition() {
    if (this.range > this.timeline.range.max) { this.range = this.timeline.range.max; }
    if (this.range < this.timeline.range.min) { this.range = this.timeline.range.min; }
  }
}
