import {Timeline} from './Timeline';
import {Subject} from 'rxjs/Subject';

export class TimelineLimitLine {
  public cx: number;
  public cy: number;
  public lineSize = 50;
  public timeline: Timeline;
  public draw;
  public line;
  public change$: Subject<number> = new Subject<number>();

  private _time: number;
  private _draggable: boolean;

  constructor (timeLine: Timeline, time, draggable: boolean = true) {
    this.timeline = timeLine;
    this.draw = this.timeline.draw;
    this._draggable = draggable;

    this.line = this.draw.line(0, this.timeline.endPos.y - this.lineSize / 2, 0, this.timeline.endPos.y + this.lineSize / 2)
      .stroke({ width: 3 });


    if (this._draggable) {
      this.line.draggable((x, y) => {
        this.time = Math.round((x - this.timeline.initPos.x) / this.timeline._timeMetric);
        return {x: false, y: false};
      });
      this.line.style('cursor', 'ew-resize');
    }

    this.time = time;
  }

  set time (time: number) {
    if (time === this._time || time < 0 || time > 100) { return; }
    this._time = time;
    this.line.cx(this.timeline.initPos.x + this._time * this.timeline._timeMetric);
    this.change$.next(this._time);
  }

  get time (): number {
    return this._time;
  }
}
