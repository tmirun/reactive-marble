import { TimelineItemData } from '../core/models/TimelineEmiter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/buffer';

const list = {

  'buffer': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 1 }, {time: 20, value: 2 },
        {time: 40, value: 3 }, {time: 60, value: 6 },
        {time: 70, value: 5 }, {time: 60, value: 9 }]
    },
    {
      type: 'label',
      payload: `
        Observable.empty();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(input1, scheduler) {
        const interval = Observable.interval(30, scheduler);
        return input1.buffer(interval)
          .map((items) => {
            console.log(items.map((item) => item.value).join(','));
            return items.map((item) => item.value).join(',');
          });
      }
    }
  ]
};

export default list;
