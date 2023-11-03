import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UseSearchParamsHook from '../UseSearchParamsHook/UseSearchParamsHook';

const Details = ({user}) => {
    console.log(user);
  return (
    <div>
    <h2>User Details</h2>
    {/* <input type='text'/> */}
    <UseSearchParamsHook/>

    <ul>
        {user?.map((item)=>(
            <li key={item.id}>
                <Link to={item.id}>{item.name}</Link>
            </li>
        ))}
    </ul>
    <Outlet/>
    </div>
  )
}

export default Details