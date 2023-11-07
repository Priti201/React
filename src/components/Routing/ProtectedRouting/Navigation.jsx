import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const Navigation = () => {
    const{token, onLogout}= useAuth();
  return (
    <nav>
        <NavLink to='/home'>Home</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/dashboard'>Dashboard</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/admin'>Admin</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {
            token && (
                <button onClick={onLogout}>Sign out</button>
            )
        }
    </nav>
  )
}

export default Navigation