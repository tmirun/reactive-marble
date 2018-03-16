import { TimelineItemData } from '../core/models/TimelineEmiter';
import { Observable } from 'rxjs/Observable';

const list = {
  zip: [
    {
      type: 'input',
      name: 'input1',
      payload: [
        new TimelineItemData(10, {value: 1,  color: '#2196F3'}),
        new TimelineItemData(40, {value: 2,  color: '#3F51B5'}),
        new TimelineItemData(70, {value: 3,  color: '#00BCD4'})]
    },
    {
      type: 'input',
      name: 'input2',
      payload: [
        new TimelineItemData(60, {value: 'A',  color: '#4CAF50'}),
        new TimelineItemData(90, {value: 'B',  color: '#8BC34A'})]
    },
    {
      type: 'label',
      payload: 'Zip',
    },
    {
      type: 'result',
      name: 'result1',
      payload: function(input1, input2) {
        return Observable.zip( input1, input2).map(function ([item1, item2]) {
          return new TimelineItemData(null, {value: item1.value + item2.value, color: item1.color});
        });
      }
    }
  ]
};

export default list;
