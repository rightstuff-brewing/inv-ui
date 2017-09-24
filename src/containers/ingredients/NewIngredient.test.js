import React from 'react';
import renderer from 'react-test-renderer';
import NewIngredient from './NewIngredient';

// Resolves issue: https://github.com/react-bootstrap/react-bootstrap/issues/2600
jest.mock('react-bootstrap');

describe('NewIngredient component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <NewIngredient show={false} close={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});