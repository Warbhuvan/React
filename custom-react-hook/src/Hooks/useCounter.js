import { useState } from "react";


function useCounter(initialCount=0,value) {
    const [count, setCount] = useState(initialCount);
    const increaseCount = () => {
      setCount((prevCount) => prevCount + value);
    };
    const decreaseCount = () => {
      setCount((prevCount) => prevCount - value);
    };
    const resetCount = () => {
      setCount(initialCount);
    };
    return [count,increaseCount,decreaseCount,resetCount]
}

export default useCounter