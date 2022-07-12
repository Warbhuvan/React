import React, { useState } from "react";
import useCounter from "../Hooks/useCounter";

function Counter1() {
    const[count,increaseCount,decreaseCount,resetCount]=useCounter(0,1)
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter1;
