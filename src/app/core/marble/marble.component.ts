import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
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
import { TimelineItemData } from '../models/TimelineItem';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MarbleItem} from '../models/Marble';
import {VirtualTimeScheduler} from 'rxjs/scheduler/VirtualTimeScheduler';
declare const SVG: any;

@Component({
  selector: 'rm-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit, AfterViewInit {

  @Input() marble: MarbleItem[] = [];

  public observables$ = {};
  public timelines = {};

  constructor() {
    // parser marble
    this.marble.forEach((marbleItem: MarbleItem) => {
      switch (marbleItem.type) {
        case 'input':
          this.observables$[marbleItem.name] = new BehaviorSubject(marbleItem.payload)
            .map((value) => {
              return value;
            });
          break;

        case 'result':
          this.observables$[marbleItem.name] = new BehaviorSubject([]);
          const resultInputs$ = [];
          const inputsName = this.getFnParamNames(marbleItem.payload);

          inputsName.forEach(inputName => {
            resultInputs$.push(this.observables$[inputName]);
          });

          Observable.combineLatest(...resultInputs$)
            .map((itemsDatas: [TimelineItemData[]]) => {
              const resultItems = [];
              const inputsDelay$ = []
              const scheduler = new VirtualTimeScheduler(undefined, 100);
              itemsDatas.forEach((items) => {
                const delay$ = new Observable(observer => {
                  items.forEach((item: TimelineItemData) => {
                      scheduler.schedule(() => observer.next(item), item.range);
                    });
                    scheduler.schedule(() => observer.complete(), 100);
                  });
                inputsDelay$.push(delay$);
              });

              marbleItem.payload(...inputsDelay$)
                .subscribe(
                  (item) => {
                    resultItems.push(new TimelineItemData(scheduler.now(), item.value, item.color));
                    },
                  null,
                  () => {});
              scheduler.flush();
              return resultItems;
            })
            .subscribe((resultItems) => {
              this.observables$[marbleItem.name].next(resultItems);
            });
          break;
      }
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit () {
    // generate Timelines SVG
    Object.keys( this.observables$ ).forEach( name => {
      let draggable = true;
      if (this.findMarbleItemByName(name)) {
        if (this.findMarbleItemByName(name).type === 'result'){
          draggable = false;
        }
      }
      const _observable = this.observables$[name];
      this.timelines[name] = new Timeline(`rm-marble-timeline-${name}`, _observable, draggable);
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

}


