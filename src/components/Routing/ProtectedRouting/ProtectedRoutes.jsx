import React from 'react'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DashBoard from './DashBoard'
import Admin from './Admin'
import NoMatchFound from './NoMatchFound'
import AuthProvider from './AuthProvider'
import ProtectedRoute from './ProtectedRoute'

const ProtectedRoutes = () => {
  return (
    <div>
       <AuthProvider>
        <h1>React router authentication</h1>
        <Navigation/>

        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <DashBoard/>
              </ProtectedRoute>
            }/>
            <Route path='/admin' element={
            <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>}/>
            <Route path='*' element={<NoMatchFound/>}/>
        </Routes>
       </AuthProvider>
    </div>
  )
}

export default ProtectedRoutes;