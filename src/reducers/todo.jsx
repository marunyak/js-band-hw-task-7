import {
  ADD_TODO, DONE_TODO, DELETE_TODO, UPDATE_TODO
} from '../actions';

const todo = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return [...state, payload];
    }
    case DONE_TODO: {
      const list = state.map((item) => {
        if (item.id === payload) {
          item = { ...item, done: !item.done };
        }
        return item;
      });
      return list;
    }
    case DELETE_TODO: {
      return state.filter((item) => item.id !== payload);
    }
    case UPDATE_TODO: {
      const list = state.map((item) => {
        if (item.id === payload.id) {
          item = {
            ...item, title: payload.title, description: payload.description, priority: payload.priority
          };
        }
        return item;
      });
      return list;
    }
    default:
      return state;
  }
};

export default todo;
