import React, { Component } from "react";
import './styleForm.css'
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }
  onUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  onCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  onSubmit=(event)=>
  {
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="formElement">
          <label className="label">username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onUserNameChange}
          ></input>
        </div>
        <div className="formElement">
          <label className="label">comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.onCommentsChange}
          ></textarea>
        </div>
        <button> submit</button>
      </form>
    );
  }
}

export default Form;
