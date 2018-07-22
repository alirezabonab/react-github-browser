import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';
import Header  from '../components/Header';
import Content from '../components/Content';


class App extends Component {

  componentWillMount() {
    //this.props.getRepositoriesByUsername("Facebook");
  }

  render() {

    
    return (
      <div className="App">
        <Header/>

        <Content/>
        
      </div>
    );
  }
}



export default App