import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
import {fetchIngredients} from './modules/ingredients';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// This doesn't seem like the right place...
store.dispatch(fetchIngredients());

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();