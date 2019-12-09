import {
  EDIT, DELETE
} from '../actions';

const edit = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT: {
      return {
        editId: payload.id,
        editTitle: payload.title,
        editDescription: payload.description,
        editPriority: payload.priority
      };
    }
    case DELETE: {
      return {
        editTitle: '',
        editDescription: '',
        editPriority: ''
      };
    }
    default:
      return state;
  }
};

export default edit;
