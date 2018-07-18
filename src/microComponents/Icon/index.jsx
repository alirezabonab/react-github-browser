import React, { Component } from "react";

export default class Icon extends Component {
  constructor() {
    super();
    this.state = {
      paths: null
    };
    this.getPaths();
  }

  async getPaths() {
    const { default: paths } = await import("./IconAssets");
    if (!this._isUnmounted) {
      this.setState({ paths });
    }
  }

  componentWillUnmount() {
    this._isUnmounted = true;
  }

  render() {
    const { icon = "", color, className = "" } = this.props;
    const { height = 24, width = 24 } = this.props;
    const { viewBox = `0 0 ${width} ${height}` } = this.props;
    return (
      <svg
        className={className}
        height={height}
        width={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.state.paths && this.state.paths[icon](color)}
      </svg>
    );
  }
}
