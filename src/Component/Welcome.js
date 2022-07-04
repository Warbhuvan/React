import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, company } = this.props;
    return (
      <h2>
        Welcome {name} to {company}
      </h2>
    );
  }
}
export default Welcome;
