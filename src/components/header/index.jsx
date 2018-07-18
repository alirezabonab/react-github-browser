import React, { Component } from "react";
import lightBlue from '@material-ui/core/colors/lightBlue';

import { withStyles } from "@material-ui/core/styles";
import SearchInput from "../../microComponents/SearchInput"

const styles = theme => ({
  custom: {
    backgroundColor: lightBlue[600],
    height: "150px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  searchInput:{
    backgroundColor : lightBlue[200],
    
  }
});

class HeaderComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.custom}>
        <SearchInput className={classes.searchInput} />
      </header>
    );
  }
}

export default withStyles(styles)(HeaderComponent);