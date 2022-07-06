import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sheetal",
    };
    console.log("LifecycleA constructor")
  }
  static getDerivedStateFromProp(props,state)
  {
    console.log("LifecycleA getDerivedStateFromProp")
    return null;
  }
  componentDidMount()
  {
    console.log("LifecycleA componentDidMount")
  }
  shouldComponentUpdate()
  {
    console.log("LifecycleA shouldComponentUpdate")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate()
  {
    console.log("LifecycleA componentDidUpdate")
  }
  onBtnClick=()=>{
    this.setState({
        name:"Suraj"
    })
  }
  render() {
    console.log("LifecycleA render")
    return <div>LifeCycleA
        <button onClick={this.onBtnClick}>Change State</button>
       <LifecycleB></LifecycleB>
    </div>;
  }
}

export default LifeCycleA;
