import creators from './creators';
import combiners from './combiners';
import transformationOperators from './transformation-operators';
import filteringOperators from './filtering-operators';

/*
* index: http://reactivex.io/documentation/operators.html
* https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md
* */

const operators = {
  'creators': {...creators},
  'transformation': {...transformationOperators},
  'filtering': {...filteringOperators},
  'combiners': {...combiners},
};

export { operators };
