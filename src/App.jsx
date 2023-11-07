import React, { useState } from "react";
import './App.css'
// import { useAuth0 } from "@auth0/auth0-react";
import Navigation from "./components/Routing/ProtectedRouting/Navigation";
import ProtectedRoutes from "./components/Routing/ProtectedRouting/ProtectedRoutes";
function App(){
  // const{loginWithRedirect, isAuthenticated, user, logout}=useAuth0();
  return(
    // -------authentication using Auth0 parctice--------
    // <div>
    //   {isAuthenticated ? 
    //   <button onClick={()=>logout()}
    //   >
    //     Logout
    //     </button> :
    //   <button
    //   onClick={()=>loginWithRedirect()}
    //   >Login</button>
    // }
    //   {
    //     isAuthenticated &&   <Users/>
    //   }
    
    // </div>
    <div>
      <ProtectedRoutes/>
    </div>
  )
}
export default App;
