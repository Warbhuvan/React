import React, { useState } from "react";
import useCounter from "../Hooks/useCounter";

function Counter2() {
 const[count,increaseCount,decreaseCount,resetCount]=useCounter(5,5)
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter2;
