import React, { Component } from 'react'

 class RegularComp extends Component {
  render() {
      console.log("Regular component renders")
    return (
      <div>RegularComp {this.props.name}</div>
    )
  }
}

export default RegularComp