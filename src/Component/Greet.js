import React from "react";
// function Greet()
// {
//     return <h1>Hello Sheetal</h1>
// }

//Named export
// export const Greet = ({name,company}) => {
//   //console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {name} = {company}
//       </h1>
//       {/* {props.children} */}
//     </div>
//   );
// };
export const Greet = (props) => {
  //console.log(props);
  const { name, company } = props;
  return (
    <div>
      <h1>
        Hello {name} = {company}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
// export default Greet
