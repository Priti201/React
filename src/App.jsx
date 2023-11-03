import React, { useState } from "react";
import './App.css'
import Home from "./components/Routing/Home";
import Users from "./components/Routing/nestedRouting/Users";
function App(){


  return(
    <div>
      <Users/>
    </div>
  )
}
export default App;
