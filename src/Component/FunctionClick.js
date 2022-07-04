import React from "react";

function FunctionClick() {
  function onFunctionClick() {
    console.log("Button Clicked");
  }
  //Event handler is a function and not functiuon call
  return (
    <div>
      <button onClick={onFunctionClick}>Click</button>
    </div>
  );
}

export default FunctionClick;
