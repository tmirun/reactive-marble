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

  private _range: number;
  private _draggable: boolean;

  constructor (timeLine: Timeline, range, draggable: boolean = true) {
    this.timeline = timeLine;
    this.draw = this.timeline.draw;
    this._draggable = draggable;

    this.line = this.draw.line(0, this.timeline.endPos.y - this.lineSize / 2, 0, this.timeline.endPos.y + this.lineSize / 2)
      .stroke({ width: 3 });


    if (this._draggable) {
      this.line.draggable((x, y) => {
        this.range = Math.round((x - this.timeline.initPos.x) / this.timeline._rangeMetric);
        this.change$.next(this.range);
        return {x: false, y: false};
      });
      this.line.style('cursor', 'ew-resize');
    }

    this.range = range;
  }

  set range (range: number) {
    if (range === this._range || range < 0 || range > 100) { return; }
    this._range = range;
    this.line.cx(this.timeline.initPos.x + this._range * this.timeline._rangeMetric);
  }

  get range (): number {
    return this._range;
  }
}
