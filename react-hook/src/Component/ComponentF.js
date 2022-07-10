import React, { useContext } from "react";
import { UserContext, UserNameContext } from "../App";
function ComponentF() {
  const fname = useContext(UserContext);
  const lname = useContext(UserNameContext);
  return <div>{fname} {lname}</div>;
}

export default ComponentF;
