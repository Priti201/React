import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const CommonLayout = () => {
//   return (
//     <div>
//         <h2>React Router Example</h2>
//         <nav style={{display: 'flex', padding:'2px'}}>
//             <NavLink to='/' style={{margin:'5px', textDecoration: 'none'}}
//             className={(isActive)=>{ isActive?"red" : "gray"}}
//             >Home</NavLink>
//             <NavLink to='/fareWell' style={{margin:'5px', textDecoration:'none'}}>About</NavLink>
//         </nav>
//         <Outlet/>
//     </div>
//   )

return(
    <div>
        <h2>Welcome User!!</h2>
        <nav>
            <NavLink to='/'>Home</NavLink>
            {/* for space */}
            &nbsp; &nbsp; &nbsp; 

            <NavLink to='/details'>Details</NavLink>
        </nav>
        <Outlet/>
    </div>
)
}

export default CommonLayout