import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Sizes from '../../design/sizes'
const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderRadius: Sizes[2]
  }
});

class InputComponent extends Component {
  constructor(props) {
    super(props);
  }

  onChange = callback => event => {
    if (!callback) return;

    const value = event.target.value;
    callback(value);
  };

  onClick = callback => event => {
    if (!callback) return;

    const value = event.target.value;
    callback(value);
  };

  onKeyDown = ({ onEnter }) => event => {
    if (!onEnter) return;
    
    const value = event.target.value;
    if (event.keyCode === 13) return onEnter(value);
  };

  render() {
    const { classes, className } = this.props;
    const classNames = [classes.root, className]
      .filter(item => item.length)
      .join(" ");

    const { value } = this.props;
    const { onChange, onClick, onEnter } = this.props;
    const { InputProps,autoFocus,multiline } = this.props;

    return (
      <TextField
        label={this.props.label}
        type={this.props.type}
        className={classNames}
        onKeyDown={this.onKeyDown({ onEnter })}
        onChange={this.onChange(onChange)}
        onClick={this.onClick(onClick)}
        value={value}
        InputProps={InputProps}
        autoFocus={autoFocus}
        multiline={multiline}
        fullWidth={true}
      />
    );
  }
}

export default withStyles(styles)(InputComponent);
