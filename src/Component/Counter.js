import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  onIncrementFive()
  {
      this.onIncrement()
      this.onIncrement()
      this.onIncrement()
      this.onIncrement()
      this.onIncrement()
  }
  onIncrement() {
    //UI is not rerendering the state this way
    //   this.state.count=this.state.count+1
    //   console.log(this.state.count)
    //SetState is asynchronous so the console.log will not reflect updated value.to acheive this use callback function
    this.setState((prevState,props)=>(
      {
        // count: prevState.count + props.addValue,
        count: prevState.count + 1
      }),
      () => {
        console.log("callback value "+this.state.count);
      }
    );

    console.log(this.state.count);
  }

  
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.onIncrementFive()}>Increment</button>
      </div>
    );
  }
}
export default Counter;
