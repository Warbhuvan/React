import React, { Component,useRef } from 'react'

 class ClassTimer extends Component {
     interval
     constructor(props) {
       super(props)
     
       this.state = {
          timer:0
       }
     }
     componentDidMount()
     {
         this.interval=setInterval(()=>{
             this.setState(prevValue=>({
                 timer:prevValue.timer+1
             }))
         },1000)
     }
     componentWillUnmount()
     {
         clearInterval(this.interval)
     }
     onClickHandler=()=>{
        clearInterval(this.interval)
     }
  render() {
    return (
      <div>ClassTimer - {this.state.timer}
      
      <button onClick={this.onClickHandler}> Clear Timer</button></div>
    )
  }
}

export default ClassTimer