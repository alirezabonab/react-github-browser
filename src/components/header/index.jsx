import React, { Component } from "react";
import lightBlue from '@material-ui/core/colors/lightBlue';
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import SearchInput from "../../microComponents/SearchInput"
import { getRepositoriesByUsername } from '../../actions/repository';

const styles = theme => ({
  root: {
    backgroundColor: lightBlue[600],
    height: "150px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  },
  searchInput:{
    backgroundColor : lightBlue[200],
    
  }
});

class HeaderComponent extends Component {

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
        <SearchInput onChange={this.searchInputValueChanged} onEnter={this.searchInputOnEnter} className={classes.searchInput} />
      </header>
    );
  }
}

const component =  withStyles(styles)(HeaderComponent);

function mapDispatchToProp(dispatch) {
  return {
    getRepositoriesByUsername : (username) => {
          dispatch(getRepositoriesByUsername(username));
      }
  };
}

export default connect(null, mapDispatchToProp)(component);
