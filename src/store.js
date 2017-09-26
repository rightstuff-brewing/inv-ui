import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const firebaseConfig = {
  apiKey: "AIzaSyBzQefr9YyRjj0CpoL9qk7RHPu1plv_Vkg",
  authDomain: "rightstuff-176212.firebaseapp.com",
  databaseURL: "https://rightstuff-176212.firebaseio.com",
  projectId: "rightstuff-176212",
  storageBucket: "rightstuff-176212.appspot.com",
  messagingSenderId: "183311933229"
};
const rrfConfig = { userProfile: 'users' };

const initialState = {};
const enhancers = [];
const middleWare = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if(typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleWare),
  reactReduxFirebase(firebaseConfig, rrfConfig),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;