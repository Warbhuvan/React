import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messgae: "Hello",
    };
    //  this.onBtnClick=this.onBtnClick.bind(this)
  }
  //   onBtnClick()
  //  {
  //     console.log(this)
  //     this.setState({
  //         messgae:"GoodBye"
  //     })
  //  }
  //4th approach
  onBtnClick = () => {
    console.log(this);
    this.setState({
      messgae: "GoodBye",
    });
  };
  //1. binding by using bind function
  //2. binding using arrow function
  //3. binding the event handler in the constructor
  //4. use arrow function as a class property
  render() {
    return (
      <div>
        <div>{this.state.messgae}</div>
        {/* <button onClick={this.onBtnClick.bind(this)}>
              Click
          </button> */}
        {/* <button onClick={()=>this.onBtnClick()}>
              Click
          </button> */}
        <button onClick={this.onBtnClick}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
