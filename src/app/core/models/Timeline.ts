import { Point } from './Point';
import { Observable } from 'rxjs/Observable';
import { TimelineItem, TimelineItemData } from './TimelineItem';
import { TimelineLimitLine } from './TimelineLimitLine';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
  public range = { min: 0, max: 100 };

  public draw;
  public items: TimelineItem[] = [] as TimelineItem[];
  public endLine: TimelineLimitLine;
  public input$: Subject<TimelineItemData[]> | BehaviorSubject<TimelineItemData[]>;
  private _itemsData: TimelineItemData[];
  private _draggable: boolean;

  constructor (id: string,
               input: Subject<TimelineItemData[]> | BehaviorSubject<TimelineItemData[]>,
               draggable: boolean = true,
  ) {
    this.draw = SVG(id).size(this.svgSize.width, this.svgSize.height);
    this._draggable = draggable;

    // Draw timeline
    // ---------->
    this.draw.line(this.initPos.x, this.initPos.y, this.endLinePos.x, this.endLinePos.y).stroke({ width: 1 });
    this.draw.polygon('0,0 0,12 12,6')
      .fill('black')
      .cx(this.endLinePos.x + 6)
      .cy(this.center.y);

    // Draw Timeline endPos
    // -------|->
    this.endLine = new TimelineLimitLine(this, 100, this._draggable);
    this.endLine.change$.subscribe((range) => {
      this.range.max = range;
      this.items.forEach((timelineItem: TimelineItem) => {
        timelineItem.refreshRangePosition();
      });
    });

    this.input$ = input;
    this.input$.subscribe((itemsData: TimelineItemData[] = []) => {
      this._itemsData = itemsData;
      this.refreshItems(itemsData);
    });
  }

  refreshItems (itemsData: TimelineItemData[]) {
    if (itemsData.length < this.items.length) {
      for (let i = itemsData.length; i < this.items.length; i++) {
        this.items[i].remove();
      }
      this.items.splice(itemsData.length, this.items.length - itemsData.length);
    }
    itemsData.forEach((itemData: TimelineItemData, key: number) => {
      const currentItem = this.items[key];
      if (currentItem) {
        currentItem.range = itemData.range;
        currentItem.color = itemData.color;
        currentItem.text.text(itemData.value + '');
      } else {
        const newTimelineItem = new TimelineItem(this, itemData, this._draggable);
        this.items.push(newTimelineItem);

        // on item range change
        newTimelineItem.change$.subscribe((range: number) => {
          this._itemsData[key].range = range;
          this.input$.next(this._itemsData);
        });
      }
    });
  }
}
