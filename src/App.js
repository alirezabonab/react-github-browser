import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent  from './components/Header';
import RepositoryListItem from './components/RepositoryListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <RepositoryListItem/>
      </div>
    );
  }
}

export default App;
