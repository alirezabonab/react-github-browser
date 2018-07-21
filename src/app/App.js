import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

import { getRepositoriesByUsername } from '../actions/repository';
import Content from '../components/Content';
import HeaderComponent  from '../components/Header';


class App extends Component {

  componentWillMount() {
    this.props.getRepositoriesByUsername("Facebook");
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent/>

        {
          this.props.repositories.length > 0 ?
          <Content repositories={this.props.repositories}/>  :
          <div> no content </div>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      repositories: state.repository.repositories
  };
}

function mapDispatchToProp(dispatch) {
  return {
    getRepositoriesByUsername : (username) => {
          dispatch(getRepositoriesByUsername(username));
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
