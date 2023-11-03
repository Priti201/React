import React, { createContext, useContext, useState } from "react";
import Users from "./Users";

export const UserContext = createContext();



const ContextApi = () => {

  // console.log(UserContext);
const[theme, setTheme] = useState(false);
function handleTheme(){
  setTheme(!theme);
}
  return (
    <div>
      <UserContext.Provider value={{theme, handleTheme}}>
        <Users />
      </UserContext.Provider>
    </div>
  );
};

 export const consumeContext =()=> useContext(UserContext)
// console.log(consumeContext);
export default ContextApi;
