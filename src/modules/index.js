import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import ingredients from './ingredients';

export default combineReducers({
  routing: routerReducer,
  counter,
  ingredients
});