import React, { Component } from "react";
import lightBlue from '@material-ui/core/colors/lightBlue';

import { withStyles } from "@material-ui/core/styles";
import SearchInput from "../../microComponents/SearchInput"

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
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
        <SearchInput className={classes.searchInput} />
      </header>
    );
  }
}

export default withStyles(styles)(HeaderComponent);