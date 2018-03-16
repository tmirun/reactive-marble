import { TimelineItemData } from '../core/models/TimelineEmiter';
import { Observable } from 'rxjs/Observable';


// "Creating Observables"
const list = {
  'create': [
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
        Observable.create((observer) => {
          observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.complete();
        });
      }
    }
  ],
};

export default list;
