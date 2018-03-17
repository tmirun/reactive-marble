import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, ElementRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';
import { Timeline } from '../models/Timeline';
import { TimelineItemData } from '../models/TimelineEmiter';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MarbleItem} from '../models/Marble';
import {VirtualTimeScheduler} from 'rxjs/scheduler/VirtualTimeScheduler';
declare const SVG: any;

@Component({
  selector: 'rm-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit, OnChanges {

  @Input() marble: MarbleItem[] = [];
  @ViewChild('marbleDom') marbleDom: ElementRef;

  public observables$ = {};
  public timelines = {};

  private div_item_prefix = 'rm-marble-item-';

  constructor() {

  }

  // NEED REFACTOR
  ngOnInit() {
  }

  setObservables() {
    this.marble.forEach((marbleItem: MarbleItem) => {
      switch (marbleItem.type) {
        case 'input':
          this.observables$[marbleItem.name] = new BehaviorSubject(marbleItem.payload);
          break;

        case 'result':
          this.observables$[marbleItem.name] = new BehaviorSubject([]);
          const resultInputs$ = [];
          const inputsName = this.getFnParamNames(marbleItem.payload);

          inputsName.forEach(inputName => {
            if (!inputName || inputName === 'scheduler') { return; }
            resultInputs$.push(this.observables$[inputName]);
          });

          if (resultInputs$.length) {
            Observable.combineLatest(...resultInputs$)
              .map((itemsDatas: [TimelineItemData[]]) => {
                const resultItems = [];
                const inputsDelay$ = [];
                const scheduler = new VirtualTimeScheduler(undefined, 100);
                itemsDatas.forEach((items) => {
                  const maxRange = this.getItemLimitRangeFromItemsData(items);
                  const delay$ = new Observable(observer => {
                    items.forEach((item: TimelineItemData) => {
                      if (item.isLimit) {
                        return;
                      }
                      scheduler.schedule(() => observer.next(item), item.time);
                    });
                    scheduler.schedule(() => observer.complete(), maxRange);
                  });
                  inputsDelay$.push(delay$);
                });

                marbleItem.payload(...inputsDelay$, scheduler)
                  .subscribe(
                    (itemOrNum) => {
                      const newItemData = this.isInt(itemOrNum) ? new TimelineItemData(scheduler.now(), {value: itemOrNum}) :
                        new TimelineItemData(scheduler.now(), {value: itemOrNum.value, color: itemOrNum.color});
                      resultItems.push(newItemData);
                    }, null,
                    () => {
                      resultItems.push(new TimelineItemData(scheduler.now(), {isLimit: true}));
                    })
                scheduler.flush();
                return resultItems;
              })
              .subscribe((resultItems) => {
                this.observables$[marbleItem.name].next(resultItems);
              });
          } else {
            const scheduler = new VirtualTimeScheduler(undefined, 100);
            const resultItems = [];
            marbleItem.payload(scheduler)
              .subscribe(
                (itemOrNum) => {
                  const newItemData = this.isInt(itemOrNum) ? new TimelineItemData(scheduler.now(), {value: itemOrNum}) :
                    new TimelineItemData(scheduler.now(), {value: itemOrNum.value, color: itemOrNum.color});
                  resultItems.push(newItemData);
                }, null,
                () => {
                  resultItems.push(new TimelineItemData(scheduler.now(), {isLimit: true}));
                });
            scheduler.flush();
            this.observables$[marbleItem.name].next(resultItems);
          }
          break;
      }
    });
  }

  draw () {
    // generate Timelines SVG
    Object.keys( this.observables$ ).forEach( name => {
      let draggable = true;
      if (this.findMarbleItemByName(name)) {
        if (this.findMarbleItemByName(name).type === 'result') {
          draggable = false;
        }
      }
      const _observable = this.observables$[name];
      this.timelines[name] = new Timeline(`${this.div_item_prefix}${name}`, _observable, draggable);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.marble.currentValue) {
      this.observables$ = {};
      this.timelines = {};
      this.clearDom();
      this.createDivs();
      this.setObservables();
      this.draw();
    }
  }

  clearDom() {
    const el = this.marbleDom.nativeElement;
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

  createDivs () {
    this.marble.forEach((marbleItem) => {
      const newDiv = document.createElement('div');
      newDiv.id = this.div_item_prefix + marbleItem.name;
      if (marbleItem.type === 'label') {
        newDiv.className = 'rm-marble-label'
        newDiv.innerHTML = marbleItem.payload;
      }
      this.marbleDom.nativeElement.appendChild(newDiv);
    });
  }

  private findMarbleItemByName(name) {
    for (const key in this.marble) {
      if (this.marble.hasOwnProperty(key)) {
        const currentMarbleItem = this.marble[key];
        if ( currentMarbleItem.name === name) {
          return currentMarbleItem;
        }
      }
    }
    return null;
  }

  private getFnParamNames(fn) {
    const functionString = fn.toString();
    return functionString.match(/\(.*?\)/)[0].replace(/[()]/gi,'').replace(/\s/gi,'').split(',');
  }

  private isInt(value: any) {
    return !isNaN(value) &&
      parseInt(Number(value) as any, 10) === value &&
      !isNaN(parseInt(value, 10));
  }

  private getItemLimitRangeFromItemsData(itemsData: TimelineItemData[]) {
    let time = 100;
    itemsData.forEach((itemData: TimelineItemData) => {
      if (itemData.isLimit) {
        time = itemData.time;
      }
    });
    return time;
  }
}


