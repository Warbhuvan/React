import React, { useState } from "react";

function StateHookCounter2() {
  const initialCOunt = 0;
  const [count, setCount] = useState(initialCOunt);
  const incrementByFive = () => {
    for (var i = 0; i < 5; i++) {
      //   setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCOunt)}>Reset</button>
      {/* Not safe. Need to use prev state instead */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Even after clicking on increment 5. the count will increase by one only */}
      <button onClick={incrementByFive}>Increment 5</button>
    </div>
  );
}

export default StateHookCounter2;
