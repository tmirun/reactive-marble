import creators from './creators';
import combiners from './combiners';
import transformationOperators from './transformation-operators';

/*
* index: http://reactivex.io/documentation/operators.html
* https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md
* */

const operators = {
  'creators': {...creators},
  'transformation': {...transformationOperators},
  'combiners': {...combiners},
};

export { operators };
