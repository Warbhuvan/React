import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h2>
        Welcome {this.props.name} to {this.props.company}
      </h2>
    );
  }
}
export default Welcome;
