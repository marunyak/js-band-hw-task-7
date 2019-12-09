export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

export const edit = (todo) => ({
  type: EDIT,
  payload: todo
});

export const deletee = () => ({
  type: DELETE
});
