import React, { useState, useEffect } from "react";
import UseEffectHookMousePosition from "./UseEffectHookMousePosition";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {
          display &&
          <UseEffectHookMousePosition></UseEffectHookMousePosition>
      }
    </div>
  );
}

export default MouseContainer;
