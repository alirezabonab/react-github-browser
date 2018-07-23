import React, { Component } from "react";
import lightBlue from '@material-ui/core/colors/lightBlue';
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import SearchInput from "../../microComponents/SearchInput"

import { getRepositoriesByUsername } from '../../actions/repository';

const styles = theme => ({
  root: {
    backgroundColor: lightBlue[600],
    height: "50px",
    
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-end",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  },
  searchInput:{
    backgroundColor : lightBlue[200],
    width : "300px"
  }
});

class Header extends Component {

  constructor(props){
    super(props)
    this.setState({username : ''})
  }

  searchInputValueChanged = (value)=>(this.setState({username : value}))

  searchInputOnEnter = ()=>{
    if(this.state.username !== '')
      this.props.getRepositoriesByUsername(this.state.username);
  }
  
  render() {
    const { classes } = this.props;
   

    return (
      <header className={classes.root}>
        
          
          <SearchInput 
            disableUnderline={true}
            placeholder="github username"
            onChange={this.searchInputValueChanged} 
            onEnter={this.searchInputOnEnter} 
            className={classes.searchInput} />

        
      </header>
    );
  }
}

const component =  withStyles(styles)(Header);


function mapDispatchToProp(dispatch) {
  return {
    getRepositoriesByUsername : (username) => {
          dispatch(getRepositoriesByUsername(username));
      }
  };
}

export default connect(null, mapDispatchToProp)(component);
