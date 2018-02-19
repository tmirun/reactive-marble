import {Timeline} from './Timeline';

export class TimelineItem {
  public group: any;
  public cx: number;
  public cy: number;
  public timeline: Timeline;
  public draw;
  public circle;
  public text;
  public circleSize: number = 30;

  private _range: number;

  constructor (timeLine: Timeline, params) {
    const defaultParams = {
      range: 10,
      value: null,
      fillColor: 'blue'
    };
    params = Object.assign(defaultParams, params);

    this.timeline = timeLine;
    this.cy = this.timeline.center.y;
    this.cx = this.timeline.init.x;
    this.draw = this.timeline.draw;
    this.group = this.draw.group();

    this.circle = this.draw.circle(this.circleSize);
    this.circle.fill(params.fillColor);
    this.circle.stroke({ width: 1 });

    this.text = this.draw.text(`${params.value}`);
    this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);

    this.group.add(this.circle);
    this.group.add(this.text);

    this.group.cx(this.timeline.init.x);
    this.group.cy(this.timeline.center.y);
    this.group.draggable((x, y) => {
      return {  x: x > this.timeline.init.x - this.circleSize / 2 && x < this.timeline.end.x - this.circleSize / 2,
                y: y === this.timeline.center.y - this.circleSize / 2 };
    });
  }

  move (range) {

  }

  set range (range: number) {
    this._range = range;
  }

}
