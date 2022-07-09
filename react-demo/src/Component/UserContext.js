import React from "react";
//Default value is DDE
const UserContext = React.createContext("DDE");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
