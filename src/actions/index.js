// Action Types
export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export const FILTER_TODO_LIST = 'FILTER_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

//Action Creators
export const addTodoList = title => {
  return {type: ADD_TODO_LIST, payload: title}
}

export const filterTodoList = title => {
  return {type: FILTER_TODO_LIST, payload: title}
}

export const addTodo = (list,todo) => {
  return {
    type: ADD_TODO,
    list,
    todo
  }
}

export const filterTodo = category => {
  return {type: FILTER_TODO, payload: category}
}

export const completeTodo = id => {
  return {type: COMPLETE_TODO, payload: id}
}
