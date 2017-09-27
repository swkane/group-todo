import ADD_TODO_LIST from '../actions';
import FILTER_TODO_LIST from '../actions';
import ADD_TODO from '../actions';
import FILTER_TODO from '../actions';
import COMPLETE_TODO from '../actions';

export default const reducer =(state={},action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {...state, [action.payload]: []}
    case ADD_TODO:
      return
    default:
      return state;
  }
}
