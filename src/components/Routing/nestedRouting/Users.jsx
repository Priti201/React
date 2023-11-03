import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CommonLayout from './CommonLayout'
import Greetings from './Greetings'
import Details from './Details'
import Name from './Name'
// import FareWell from './FareWell'

const Users = () => {
    const[user, setUser]= useState([
        {id:'1', name:'John'},
        {id:'2', name:'Peter'},
        {id:'3', name:'Mike'}
    ])
//   return (
//     <Routes>
//         <Route element={<CommonLayout/>}>
//             <Route index element={<Greetings/>}/>
//             {/* edge case where user types /home in the url */}
//             <Route path='home' element={<Greetings/>}/>
//             <Route path='/fareWell' element={<FareWell/>}/>
//         </Route>
//     </Routes>
//   )


return(
    <Routes>
        <Route element={<CommonLayout/>}>
        <Route path='/' element={<Greetings/>}/>
        <Route path='/home' element={<Greetings/>}/>
        <Route path='details' element={<Details user={user}/>}>
          <Route path=':userId' element={<Name/>}/>
          </Route>
        </Route>
    </Routes>
)
}

export default Users