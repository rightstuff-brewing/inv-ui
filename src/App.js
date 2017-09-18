import React, { Component } from 'react';
import Ingredients from './ingredients/Ingredients';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Right Stuff Brewing Inventory</h2>
        </div>
        <p></p>
        <Ingredients />
      </div>
    );
  }
}

export default App;
