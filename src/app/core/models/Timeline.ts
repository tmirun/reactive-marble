import { Point } from './Point';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/from';
import { TimelineItem, TimelineItemData } from './TimelineItem';
import { TimelineLimitLine } from './TimelineLimitLine';

declare const SVG: any;

export class Timeline {
  public svgSize = { width: 400, height: 80 };
  public margin = 20;
  public padding = 20;
  public center:  Point = new Point(this.svgSize.width / 2, this.svgSize.height / 2);
  public initPos:    Point = new Point(this.margin, this.center.y);
  public endPos:     Point = new Point(this.svgSize.width - this.margin - this.padding, this.center.y);
  public endLinePos: Point = new Point(this.svgSize.width - this.margin, this.center.y);
  public _rangeMetric = (this.endPos.x - this.initPos.x) / 100;
  public range = {min: 0, max: 100};

  public draw;
  public items: TimelineItem[] = [] as TimelineItem[];
  public endLine: TimelineLimitLine;
  public input$: Observable<any>;
  public inputSubscription: Subscription;

  constructor (id: string, input: Observable<any>) {
    this.draw = SVG(id).size(this.svgSize.width, this.svgSize.height);

    // Draw timeline
    // ---------->
    this.draw.line(this.initPos.x, this.initPos.y, this.endLinePos.x, this.endLinePos.y).stroke({ width: 1 });
    this.draw.polygon('0,0 0,12 12,6')
      .fill('black')
      .cx(this.endLinePos.x + 6)
      .cy(this.center.y);

    // Draw Timeline endPos
    // -------|->
    this.endLine = new TimelineLimitLine(this, 100);
    this.endLine.change$.subscribe((range) => {
      this.range.max = range;
      this.items.forEach((timelineItem: TimelineItem) => {
        timelineItem.refreshRangePosition();
      });
    });

    this.input$ = input;

    this.inputSubscription = input.subscribe((item: TimelineItemData) => {
      this.items.push(new TimelineItem(this, {range: item.range, value: item.value}));
    });
  }


}
