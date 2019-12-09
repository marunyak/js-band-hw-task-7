import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';
import edit from './modal';
import popup from './popup';

const reducers = combineReducers({
  todo,
  filter,
  edit,
  popup
});
export default reducers;
