import { TimelineItemData } from '../core/models/TimelineEmiter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/mergeScan';
import 'rxjs/add/operator/pairwise';

const list = {

  'buffer': [
    {
      type: 'input',
      name: 'input',
      payload: [
        {time: 10, value: 1 }, {time: 20, value: 2 },
        {time: 30, value: 3 }, {time: 60, value: 6 },
        {time: 70, value: 5 }, {time: 90, value: 9 }]
    },
    {
      type: 'label',
      payload: `
        const interval = Observable.interval(30);
        observable.buffer(interval)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(input, scheduler) {
        const interval = Observable.interval(30, scheduler);
        return input.buffer(interval)
          .map((items) => {
            return items.map((item) => item.value).join(',');
          });
      }
    }
  ],

  'bufferCount': [
    {
      type: 'input',
      name: 'input',
      payload: [
        {time: 10, value: 1 }, {time: 20, value: 2 },
        {time: 30, value: 3 }, {time: 60, value: 6 },
        {time: 70, value: 5 }, {time: 90, value: 9 }]
    },
    {
      type: 'label',
      payload: `
        observable.bufferCount(2)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(input) {
        return input.bufferCount(2)
          .map((items) => {
            return items.map((item) => item.value).join(',');
          });
      }
    }
  ],

  'bufferTime': [
    {
      type: 'input',
      name: 'input',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 30, value: 3 }, {time: 60, value: 6 },
        {time: 70, value: 5 }, {time: 90, value: 9 }]
    },
    {
      type: 'label',
      payload: `
        observable.bufferTime(10)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(input, scheduler) {
        return input.bufferTime(10, scheduler)
          .map((items) => {
            return items.map((item) => item.value).join(',');
          });
      }
    }
  ],

  'bufferToggle': [
    {
      type: 'input',
      name: 'input',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 30, value: 3 }, {time: 60, value: 6 },
        {time: 70, value: 5 }, {time: 90, value: 9 }]
    },
    {
      type: 'label',
      payload: `
        TODO!!!
      `
    }
  ],

  'bufferWhen': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 40, value: 3 }, {time: 50, value: 4 },
        {time: 70, value: 5 }, {time: 90, value: 6 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 50, isLimit: true}]
    },
    {
      type: 'label',
      payload: `
        observable.bufferWhen(() => {
          return Observable.empty().delay(10)
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2, scheduler) {
        return input1.bufferWhen(() => input2)
          .take(10) // limit to 10
          .map((items) => items.map((item) => item.value).join(','));
      }
    }
  ],

  'concatMap': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 50, value: 4 }, {time: 90, value: 6 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 0,  value: 'a' }, {time: 10, value: 'b' },
                {time: 20, value: 'c' }, {time: 30, isLimit: true}]
    },
    {
      type: 'label',
      payload: `
        input1.concatMap((item) => {
          return input2.map((item2) => item.value + item2.value);
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.concatMap((item) => {
          return input2.map((item2) => {
            return item.value + item2.value;
          });
        });
      }
    }
  ],

  'concatMapTo': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 50, value: 4 }, {time: 90, value: 6 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 0,  value: 'a' }, {time: 20, value: 'b' }, {time: 30, isLimit: true}]
    },
    {
      type: 'label',
      payload: `
        input1.concatMapTo(input2)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.concatMapTo(input2);
      }
    }
  ],
  'exhaustMap': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 1 }, {time: 20, value: 2 },
        {time: 50, value: 4 }, {time: 90, value: 6 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 0,  value: 'a' }, {time: 20, value: 'b' }, {time: 30, isLimit: true}]
    },
    {
      type: 'label',
      payload: `
        input1.exhaustMap((item1) =>
          input2.map((item2) => item1.value + item2.value))
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.exhaustMap((item1) => input2.map((item2) => item1.value + item2.value));
      }
    }
  ],

  'groupBy': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 }, {time: 10, value: 1 },
        {time: 20, value: 2 }, {time: 30, value: 3 },
        {time: 40, value: 4 }, {time: 50, value: 5 },
        {time: 60, value: 6 }, {time: 70, value: 7 },
        {time: 80, value: 8 }, {time: 90, value: 9 },
        {time: 100, value: 10 }]
    },
    {
      type: 'label',
      payload: `
        TODO: NEES SUPORT MULTIPLE OUTPUT
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1;
      }
    }
  ],

  'map': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 }, {time: 20, value: 1 },
        {time: 40, value: 2 }, {time: 60, value: 3 },
        {time: 80, value: 4 }, {time: 100, value: 5 }]
    },
    {
      type: 'label',
      payload: `
        input1.map( item =>  item.value * 10);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.map( item =>  item.value * 10);
      }
    }
  ],

  'mapTo': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 }, {time: 20, value: 1 },
        {time: 40, value: 2 }, {time: 60, value: 3 },
        {time: 80, value: 4 }, {time: 100, value: 5 }]
    },
    {
      type: 'label',
      payload: `
        input1.mapTo('a');
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.mapTo('a');
      }
    }
  ],

  'mergeMap': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 }, {time: 20, value: 1 },
        {time: 40, value: 3 }, {time: 60, value: 4 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 0, value: 'a' }, {time: 10, value: 'b' },
        {time: 20, isLimit: true }]
    },
    {
      type: 'label',
      payload: `
        input1.mergeMap((item1) => {
          return input2.map(item2 => item1.value * item2.value);
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.mergeMap((item1) => {
          return input2.map(item2 => item1.value + item2.value);
        });
      }
    }
  ],

  'mergeMapTo': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 }, {time: 20, value: 1 },
        {time: 60, value: 3 }, {time: 80, value: 4 }]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 0, value: 'a' }, {time: 10, value: 'b' },
        {time: 20, isLimit: true }]
    },
    {
      type: 'label',
      payload: `
        input1.mergeMapTo(input2)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.mergeMapTo(input2);
      }
    }
  ],

  'mergeScan': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 20, value: 2 },
        {time: 40, value: 4 },
        {time: 60, value: 6 },
        {time: 80, value: 8 },
        {time: 100, value: 10 }]
    },
    {
      type: 'label',
      payload: `
        const seed = 1;
        input1.map((item) => item.value)
          .mergeScan((accumulatedValue, value) => {
            return Observable.of(accumulatedValue + value);
          }, seed);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        const seed = 1;
        return input1.map((item) => item.value).mergeScan((accumulatedValue, value) => {
          return Observable.of(accumulatedValue + value);
        }, seed);
      }
    }
  ],

  'pairwise': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 60, value: 'd' },
        {time: 80, value: 'e' },
        {time: 100, value: 'f' }]
    },
    {
      type: 'label',
      payload: `
        input1.pairwise().map(items => {
          return items[0].value + ',' + items[1].value;
        });
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.pairwise().map(items => {
          return items[0].value + ',' + items[1].value;
        });
      }
    }
  ],

  'partition': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 20, value: 1 },
        {time: 40, value: 2 },
        {time: 60, value: 3 },
        {time: 80, value: 4 },
        {time: 100, value: 5 }]
    },
    {
      type: 'label',
      payload: `
        TODO: NEES SUPORT MULTIPLE OUTPUT
      `
    }
  ]
};

export default list;
