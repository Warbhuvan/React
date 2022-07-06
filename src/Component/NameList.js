import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Sheetal", "Suraj"];
  const nameList = names.map((x,index) => <h2 key={index}>{x}</h2>);
  const person = [
    {
      id: 1,
      name: "Sheetal",
      age: 27,
    },
    {
      id: 2,
      name: "suraj",
      age: 24,
    },
    {
      id: 3,
      name: "karidhma",
      age: 27,
    },
  ];
  const personList = person.map((x) => <Person key={x.id} person={x}></Person>);

  return <div>{nameList}</div>;
  //   const names = ["Sheetal", "Suraj", "Karishma", "Shivani"];
  //   return (
  //     <div>
  //       <div>
  //         <h5>Welcome {names.map((x) => x + ", ")}</h5>
  //       </div>
  //     </div>
  //   );
}

export default NameList;
