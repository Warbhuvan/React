import React, { Component } from "react";

export class FunctionClickForClass extends Component {
    onFunctionClick()
    {
        console.log("Clicked the button")
    }
  render() {
    return (
      <div>
        <button onClick={this.onFunctionClick}>Click Me</button>
      </div>
    );
  }
}

export default FunctionClickForClass;
