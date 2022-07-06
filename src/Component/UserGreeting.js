import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    ////////////Conditional rendering using if else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome sheetal</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }

    ///////////////////////Conditional rendering using element varibles
    // let message
    // if(this.state.isLoggedIn)
    // {
    //     message="Welcome Sheetal"
    // }
    // else
    // {
    //     message="welcome Guest"
    // }
    // return (
    //     <div>
    //          <div>{message}</div>
    //       {/* <div>Welcome Guest</div> */}
    //     </div>
    //   );

    /////////////////////Conditional rendering using ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sheetal</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //

    ////////////////////Conditional rendering using short circuit operator
    return this.state.isLoggedIn && <div>Welcome Sheetal </div>;
  }
}

export default UserGreeting;
