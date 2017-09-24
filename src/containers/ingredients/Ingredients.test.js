import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store, { history } from '../../store';
import Ingredients from './Ingredients';

describe('Ingredients component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Ingredients />
      </Provider>      
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
