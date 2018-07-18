import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent  from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
