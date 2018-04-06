import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/audit';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';

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
};

export default list;
