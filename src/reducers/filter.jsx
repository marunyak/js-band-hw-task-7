import { CHANGE_SEARCH, CHANGE_STATUS, CHANGE_PRIORITY } from '../actions';

const initialState = {
  search: '',
  open: 'all',
  priority: 'all'
};

const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCH: {
      return { ...state, search: payload };
    }
    case CHANGE_STATUS: {
      return { ...state, open: payload };
    }
    case CHANGE_PRIORITY: {
      return { ...state, priority: payload };
    }
    default:
      return state;
  }
};

export default filter;
