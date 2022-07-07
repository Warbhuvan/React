import React, { Component } from 'react'

 class Input extends Component {
     constructor(props) {
       super(props)
     
       this.cRef=React.createRef()
     }
     focusInput()
     {
         this.cRef.current.focus()
     }
  render() {
    return (
      <div>
          <input type='text' ref={this.cRef}/>
      </div>
    )
  }
}

export default Input