import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class Parent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        name:"Sheetal"
       }
     }
     componentDidMount()
     {
         setInterval(()=>{

            this.setState({
                name:"Sheetal"
            })
         },2000)
     }
  render() {
      console.log("**************************Parent component renders********************")
    return (
      <div>Parent
          <RegularComp name={this.state.name}></RegularComp>
          <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default Parent