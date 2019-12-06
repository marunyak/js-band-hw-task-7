export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DONE_TODO = 'DONE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const doneTodo = (todo) => ({
  type: DONE_TODO,
  payload: todo
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: todo
});
