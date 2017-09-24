import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Ingredients from '../ingredients';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/ingredients" component={Ingredients} />
  </div>  
);