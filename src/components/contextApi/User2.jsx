import React, { useContext } from 'react'
import { UserContext, consumeContext } from './ContextApi';


const User2 = () => {
//     const contextValue = useContext(UserContext)
// console.log(contextValue);
const {theme, handleTheme}= consumeContext();

  return (
    // <UserContext.Consumer>
    //     {(value)=> <h1>{value} is my name</h1>}
    // </UserContext.Consumer>
    <div className= {theme ? "light": 'dark'}>
      <h1>John is the name.</h1>
      <button onClick={handleTheme}>Change theme</button>
    </div>
    

  )
}

export default User2;