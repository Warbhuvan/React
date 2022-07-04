import React from "react";

export default function (props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parents</button>
    </div>
  );
}
