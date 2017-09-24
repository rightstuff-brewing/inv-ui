import React from 'react';
import renderer from 'react-test-renderer';
import Ingredients from './Ingredients';

describe('Ingredients component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <Ingredients />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
