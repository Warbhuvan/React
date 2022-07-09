import React, { useState } from "react";

function StateHookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <div>
          <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
          <h2>Your first name is {name.firstName}</h2>
        </div>
        <div>
          <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
          <h2>Your last name is {name.lastName}</h2>
        </div>
      </form>
    </div>
  );
}

export default StateHookCounter3;
