import React, { useState, useEffect } from "react";

function UseEffectHookMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition=e=>{
      console.log("Mouse position")
        setX(e.clientX)
        setY(e.clientY)
  }
  useEffect(()=>{
      console.log("Use Effect called")
      window.addEventListener('mousemove',logMousePosition)

      return ()=>{
          console.log("Component unmounting code")
          window.removeEventListener('mousemove',logMousePosition)
      }
  })
  return <div>
      Hooks X - {x} Y - {y}
  </div>;
}

export default UseEffectHookMousePosition;
