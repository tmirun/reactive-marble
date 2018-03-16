import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/observable/timer';
import {TimelineItemData} from './core/models/TimelineEmiter';

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rm';

  public marble = [
    {
      type: 'label',
      payload: `
        Rx.Observable.create(function (observer) {
          observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.complete();
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function() {
        return Observable.create((observer) => {
          observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.complete();
        });
      }
    }
  ];
}
