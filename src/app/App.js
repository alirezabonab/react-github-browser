import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

import { getRepositoriesByUsername } from '../actions/repository';
import RepositoriesContent from '../components/RepositoriesContent';
import HeaderComponent  from '../components/Header';
import EmptyStateContent from '../components/EmptyStateContent';


class App extends Component {

  componentWillMount() {
    //this.props.getRepositoriesByUsername("Facebook");
  }

  render() {

    
    return (
      <div className="App">
        <HeaderComponent/>

        {
          this.props.repositories.length > 0 ?
          <RepositoriesContent repositories={this.props.repositories}/>  :
          <EmptyStateContent isExecuting={this.props.isExecuting}/>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      repositories: state.repository.repositories,
      isExecuting: state.repository.isExecuting,
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
