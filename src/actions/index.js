// Action type
const ADD_TODO_LIST = 'ADD_TODO_LIST';

// Action Creator (a function that creates an action)

// Action Creator w/ Action type

const addTodoList = title => {
  return {type: ADD_TODO_LIST, payload: title}
}
