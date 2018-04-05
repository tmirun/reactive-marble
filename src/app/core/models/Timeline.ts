import { Point } from './Point';
import { TimelineEmiter, TimelineItemData } from './TimelineEmiter';
import { TimelineLimitLine } from './TimelineLimitLine';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare const SVG: any;

export class Timeline {
  public svgSize = { width: 600, height: 80 };
  public margin = 20;
  public padding = 20;
  public center:      Point = new Point(this.svgSize.width / 2, this.svgSize.height / 2);
  public initPos:     Point = new Point(this.margin, this.center.y);
  public endPos:      Point = new Point(this.svgSize.width - this.margin - this.padding, this.center.y);
  public endLinePos:  Point = new Point(this.svgSize.width - this.margin, this.center.y);
  public _timeMetric = (this.endPos.x - this.initPos.x) / 100;
  public time = { min: 0, max: 100 };

  public draw;
  public input$: Subject<TimelineItemData[]> | BehaviorSubject<TimelineItemData[]>;
  public emiters: TimelineEmiter[] = [] as TimelineEmiter[];
  public endLine: TimelineLimitLine;
  private _emitersData: TimelineItemData[] = [];
  private _endLineData: TimelineItemData;
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

    // // Draw Timeline endPos
    // // -------|->
    this.endLine = new TimelineLimitLine(this, 100, this._draggable);
    this.endLine.change$.subscribe((time) => {
      this._endLineData.time = time;
      this.input$.next(this.mergedItemsData());
    });

    this.input$ = input;
    this.input$.subscribe((itemsData: TimelineItemData[] = []) => {
      this.time.max = this.getItemlimitRangeFromItemsData(itemsData);
      itemsData = this.limitItemsDataRange(itemsData);
      const splitData = this.splitItemsData(itemsData);

      this._endLineData = splitData.endLineData;
      this._emitersData = splitData.emitersData;
      this.refreshEmiters(this._emitersData);

      this.endLine.time = this.time.max;
    });
  }

  refreshEmiters (emitersData: TimelineItemData[]) {
    // remove items
    if (emitersData.length < this.emiters.length) {
      for (let i = emitersData.length; i < this.emiters.length; i++) {
        this.emiters[i].remove();
      }
      this.emiters.splice(emitersData.length, this.emiters.length - emitersData.length);
    }
    emitersData.forEach((emiterData: TimelineItemData, key: number) => {
      const currentItem = this.emiters[key];
      if (currentItem) {
        // modify item;
        currentItem.time = emiterData.time;
        currentItem.color = emiterData.color;
        currentItem.text.text(emiterData.value + '');
        currentItem.refreshTextCenter();
      } else {
        // create new items
        const newTimelineEmiter = new TimelineEmiter(this, emiterData, this._draggable);
        this.emiters.push(newTimelineEmiter);

        // add event on item time change
        newTimelineEmiter.change$.subscribe((time: number) => {
          this._emitersData[key].time = time;
          this.input$.next(this.mergedItemsData());
        });
      }
    });
  }

  getItemlimitRangeFromItemsData(itemsData: TimelineItemData[]) {
    let time = 100;
    itemsData.forEach((itemData: TimelineItemData) => {
      if (itemData.isLimit) {
        time = itemData.time;
      }
    });
    return time;
  }

  limitItemsDataRange (itemsData: TimelineItemData[]) {
    return itemsData.map((itemData: TimelineItemData) => {
      if (itemData.time > this.time.max) {
        itemData.time = this.time.max;
      }
      return itemData;
    });
  }

  splitItemsData(itemsData: TimelineItemData[]) {
    const result = {
      emitersData: [],
      endLineData: new TimelineItemData(100, {isLimit: true})
    };
    itemsData.forEach((itemData: TimelineItemData) => {
      if (itemData.isLimit) {
        result.endLineData = itemData;
      } else {
        result.emitersData.push(itemData);
      }
    });
    return result;
  }

  mergedItemsData() {
    return [...this._emitersData, this._endLineData ];
  }
}
