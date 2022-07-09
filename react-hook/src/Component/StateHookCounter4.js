import React, { useState } from "react";

function StateHookCounter4() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add no</button>
      <ul>
        {items.map((a) => (
          <li key={a.id}>{a.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StateHookCounter4;
