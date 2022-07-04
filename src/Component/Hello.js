import React from "react";
const Hello = () => {
  //first parameter is a string which specifies html tag to be render
  //second parameter is optional property-object of key value pair
  //Thirst parameter is children for html element(div)
  // return React.createElement('div',null,'h1','Hello sheetal')
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Sheetal")
  );
};
export default Hello;
