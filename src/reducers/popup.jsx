import {
  TOGGLE_OPEN
} from '../actions';

const popup = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_OPEN: {
      return {
        isOpen: payload
      };
    }
    default:
      return state;
  }
};

export default popup;
