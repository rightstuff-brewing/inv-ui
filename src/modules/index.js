import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import counter from './counter';
import ingredients from './ingredients';

export default combineReducers({
  firebase: firebaseStateReducer,
  routing: routerReducer,
  counter,
  ingredients
});