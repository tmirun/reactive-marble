import { TimelineItemData } from '../core/models/TimelineEmiter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';

// "Creating Observables"
const list = {
  'create': [
    {
      type: 'label',
      payload: `
        Observable.create(function (observer) {
          observer.next(1);
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
          observer.complete();
        });
      }
    }
  ],
  'defer': [
    {
      type: 'label',
      payload: `
        Observable.defer(function () {
            return Rx.Observable.return(42);
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function() {
        return Observable.defer(function () {
          return Observable.of(42);
        });
      }
    }
  ],
  'empty': [
    {
      type: 'label',
      payload: `
        Observable.empty();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function() {
        return Observable.empty();
      }
    }
  ],
  'from': [
    {
      type: 'label',
      payload: `
        Observable.from([0, 1, 2])
          .delayWhen(i => Observable.timer(i * 10));
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(scheduler) {
        return Observable.from([0, 1, 2, 3]).delayWhen(i => Observable.timer(i * 10));
      }
    }
  ],
  'interval': [
    {
      type: 'label',
      payload: 'Observable.interval(20)'
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(scheduler) {
        return Observable.interval(20, scheduler);
      }
    }
  ],
  'range': [
    {
      type: 'label',
      payload: `
        Observable.range(1, 10)
          .delayWhen(i => Observable.timer(i * 10, scheduler))
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(scheduler) {
        return Observable.range(1, 10).delayWhen(i => Observable.timer(i * 10, scheduler));
      }
    }
  ],

  'timer': [
    {
      type: 'label',
      payload: `Observable.timer(40, 10)`
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(scheduler) {
        return Observable.timer(40, 10, scheduler);
      }
    }
  ]
};

export default list;
