import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/audit';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/sampleTime';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/throttleTime';

// "Creating Observables"
const list = {
  'audit': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 50, value: 4 },
        {time: 70, value: 5 },
        {time: 80, value: 6 },
        {time: 90, value: 7 },
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 10, isLimit: true }]
    },
    {
      type: 'label',
      payload: `
        input1.audit(() => input2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.audit(() => input2);
      }
    }
  ],

  'auditTime': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 50, value: 4 },
        {time: 70, value: 5 },
        {time: 80, value: 6 },
        {time: 90, value: 7 },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.auditTime(10);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, scheduler) {
        return input1.auditTime(10, scheduler);
      }
    }
  ],

  'debounce': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 50, value: 4 },
        {time: 70, value: 5 },
        {time: 80, value: 6 },
        {time: 90, value: 7 },
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [{time: 10, isLimit: true }]
    },
    {
      type: 'label',
      payload: `
        input1.debounce(() => input2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.debounce(() => input2);
      }
    }
  ],

  'debounceTime': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 50, value: 4 },
        {time: 70, value: 5 },
        {time: 80, value: 6 },
        {time: 90, value: 7 },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.debounceTime(10, scheduler)
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, scheduler) {
        return input1.debounceTime(10, scheduler);
      }
    }
  ],

  'distinct': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 1 },
        {time: 30, value: 1 },
        {time: 40, value: 2 },
        {time: 50, value: 3 },
        {time: 70, value: 3 },
        {time: 80, value: 4 },
        {time: 90, value: 5 },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.distinct((item) => item.value);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.distinct((item) => item.value);
      }
    }
  ],

  'distinctUntilChanged': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 1 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 30, value: 1 },
        {time: 40, value: 2 },
        {time: 50, value: 3 },
        {time: 70, value: 3 },
        {time: 80, value: 4 },
        {time: 90, value: 3 },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.distinctUntilChanged(
          (itemOld, item) => itemOld.value === item.value
        )
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.distinctUntilChanged((itemPrevious, item) => itemPrevious.value === item.value);
      }
    }
  ],

  ' elementAt': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 70, value: 'd' },
        {time: 90, value: 'e' },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.elementAt(2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.elementAt(2);
      }
    }
  ],

  'filter': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 30, value: 3 },
        {time: 40, value: 4 },
        {time: 50, value: 5 },
        {time: 60, value: 6 },
        {time: 70, value: 7 },
        {time: 80, value: 8 },
        {time: 90, value: 9 },
        {time: 10, value: 10 }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.filter(item => item.value % 2 === 1);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.filter(item => item.value % 2 === 1);
      }
    }
  ],

  'first': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 70, value: 'd' },
        {time: 90, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.first();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.first();
      }
    }
  ],

  'ignoreElements': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 70, value: 'd' },
        {time: 90, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.ignoreElements();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.ignoreElements();
      }
    }
  ],

  'last': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 70, value: 'd' },
        {time: 90, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.last();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.last();
      }
    }
  ],

  'sample': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 15, value: 'x' },
        {time: 30, value: 'x' },
        {time: 60, value: 'x' },
        {time: 70, value: 'x' },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.last();
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.sample(input2);
      }
    }
  ],

  'sampleTime': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.sampleTime(30);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, scheduler) {
        return input1.sampleTime(30, scheduler);
      }
    }
  ],

  'single': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        TODO ERROR HANDLER
      `
    },
    // {
    //   type: 'result',
    //   name: 'result1',
    //   payload (input1) {
    //     return input1;
    //   }
    // }
  ],

  'skip': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.skip(3);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.skip(3);
      }
    }
  ],

  'skipLast': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        // TODO ADD INSTANT OPERATIONS
      `
    }
  ],

  'skipUntil': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 45, value: 'x' },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.skipUntil(input2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.skipUntil(input2);
      }
    }
  ],

  'skipWhile': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 40, value: 4 },
        {time: 50, value: 2 },
        {time: 80, value: 5 }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.skipWhile(item => item.value < 3);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.skipWhile(item => item.value < 3);
      }
    }
  ],

  'take': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.take(2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.take(2);
      }
    }
  ],

  'takeLast': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'label',
      payload: `
        // TODO ADD INSTANT OPERATIONS
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.takeLast(4);
      }
    }
  ],

  'takeUntil': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 'a' },
        {time: 20, value: 'b' },
        {time: 40, value: 'c' },
        {time: 50, value: 'd' },
        {time: 80, value: 'e' }
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 45, value: 'x' },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.takeUntil(input2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.takeUntil(input2);
      }
    }
  ],

  'takeWhile': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 10, value: 1 },
        {time: 20, value: 2 },
        {time: 40, value: 3 },
        {time: 40, value: 4 },
        {time: 50, value: 2 },
        {time: 80, value: 5 }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.takeWhile(item => item.value < 3);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.takeWhile(item => item.value < 3);
      }
    }
  ],

  'throttle': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 15, value: 1 },
        {time: 20, value: 2 },
        {time: 35, value: 3 },
        {time: 40, value: 4 },
        {time: 50, value: 5 },
        {time: 60, value: 6 },
        {time: 75, value: 7 },
        {time: 80, value: 8 },
        {time: 95, value: 9 },
        {time: 100, value: 10 }
      ]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        {time: 20, isLimit: true },
      ]
    },
    {
      type: 'label',
      payload: `
        input1.throttle(input2);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1, input2) {
        return input1.throttle(() => input2);
      }
    }
  ],

  'throttleTime': [
    {
      type: 'input',
      name: 'input1',
      payload: [
        {time: 0, value: 0 },
        {time: 15, value: 1 },
        {time: 20, value: 2 },
        {time: 35, value: 3 },
        {time: 40, value: 4 },
        {time: 50, value: 5 },
        {time: 60, value: 6 },
        {time: 75, value: 7 },
        {time: 80, value: 8 },
        {time: 95, value: 9 },
        {time: 100, value: 10 }
      ]
    },
    {
      type: 'label',
      payload: `
        input1.throttleTime(20);
      `
    },
    {
      type: 'result',
      name: 'result1',
      payload (input1) {
        return input1.throttleTime(20);
      }
    }
  ],
};

export default list;
