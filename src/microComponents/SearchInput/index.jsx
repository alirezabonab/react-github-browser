import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from '../Icon'
import Sizes from '../../design/sizes'
import Input from '../Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    borderRadius: Sizes[2],
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    
  },
  inputRoot : {
    color: lightBlue[900]
  }
});

class SearchInputComponent extends Component {
  

  render() {
    const { classes, className } = this.props;
    const classNames = [classes.root, className]
      .filter(item => item.length)
      .join(" ");

    const { value } = this.props;
    const { onChange, onClick, onEnter ,color = lightBlue[500] } = this.props;

    

    return (
      <Input
        label={this.props.label}
        type={this.props.type}
        className={classNames}
        onEnter={ onEnter }
        onChange={onChange}
        onClick={onClick}
        value={value}
        InputProps={{
          classes:{
            input:classes.inputRoot
          },
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon="search" color="#fff" width="24" height="24" viewBox="0 0 24 24"/>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}

export default withStyles(styles)(SearchInputComponent);
