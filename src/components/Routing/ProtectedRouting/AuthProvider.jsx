import React, { createContext, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const AuthContext= createContext(null);

const fakeAuth=()=>{
    console.log('fakeUth called');
    return new Promise((resolve) => {
        setTimeout(()=> resolve('2442f2d1h2o8n4'), 100);
        console.log('setTimeOut');
    })
   
}
const AuthProvider = ({children}) => {
    const[token, setToken] = useState(null);
    // location-> to redirect the user to dashboard once the user has logged in

    const location = useLocation();


    // fakeAuth-> mimicing how the authentication third party libraries works

    const navigate = useNavigate();
  
    const handleLogin = async () =>
    {
        const receivedToken = await fakeAuth();
        console.log('setting token');
        setToken(receivedToken);
        console.log('location', location);

        const origin = location.state?.from?.pathname || '/dashboard';
        navigate(origin);

    }
    function handleLogout(){
        setToken(null);
        console.log('logout', token);
    }
    const value={
        token,
        onLogin:handleLogin,
        onLogout:handleLogout
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

// storing the useContext of authContext and exporting that inplace of exporting context as it will reduce the importing part of both useContext and authContext into importing a single custom function(like custom hook);

 const useAuth =()=> useContext(AuthContext);
 export {useAuth};
export default AuthProvider;