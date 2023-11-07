import React from 'react'
import { useAuth } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {token} = useAuth();
    const loaction = useLocation();
    if(!token)
    {
        // if no token navigate the user to public /home page
        return <Navigate to='/home' replace state={{from:loaction}}/>
    }

    return children
}

export default ProtectedRoute