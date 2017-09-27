// Action type
export const ADD_TODO_LIST = 'ADD_TODO_LIST';

// Action Creator (a function that creates an action)

// Action Creator w/ Action type

export const addTodoList = title => {
  return {type: ADD_TODO_LIST, payload: title}
}
