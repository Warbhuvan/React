import React from "react";
// function Greet()
// {
//     return <h1>Hello Sheetal</h1>
// }

//Named export
export const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} = {props.company}
      </h1>
      {props.children}
    </div>
  );
};
// export default Greet
