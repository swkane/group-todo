import * as ActionTypes from '../actions';


export default (state={},action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_LIST:
      return {...state, [action.payload]: []}
    case ActionTypes.ADD_TODO:
      return {...state, [action.list]: [...[action.list],{todo:[action.todo], isComplete: false}]}
    default:
      return state;
  }
}
