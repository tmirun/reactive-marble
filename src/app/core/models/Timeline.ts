import { Point } from './Point';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { TimelineItem } from './TimelineItem';

declare const SVG: any;

export class Timeline {
  public svgSize = { width: 400, height: 200 };
  public padding = 20;
  public center: Point = new Point(this.svgSize.width / 2, this.svgSize.height / 2);
  public init:   Point = new Point(this.padding, this.center.y);
  public end:    Point = new Point(this.svgSize.width - this.padding, this.center.y);
  public completeRange = { min: this.init.x, max: this.end.y};
  public draw;
  public items: TimelineItem[] = [] as TimelineItem[];
  public _rangeMetric = (this.end.x - this.init.x) / 100;

  public observable: Observable<any> = Observable.from(
    [ {t: 10, v: 1},
      {t: 20, v: 2},
      {t: 30, v: 3},
      {t: 40, v: 4},
      {t: 50, v: 5},
      {t: 60, v: 6},
      {t: 0, v: 7}]);

  constructor (id: string, observable?: Observable<any>) {
    this.draw = SVG(id).size(this.svgSize.width, this.svgSize.height);
    this.draw.line(this.init.x, this.init.y, this.end.x, this.end.y).stroke({ width: 1 });

    [ {t: 10, v: 1}].forEach( (item) => {
      this.items.push(new TimelineItem(this, {range: item.t, value: item.v}));
    });

  }
}
