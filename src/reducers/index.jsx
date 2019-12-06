import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';

const reducers = combineReducers({
  todo,
  filter
});
export default reducers;
