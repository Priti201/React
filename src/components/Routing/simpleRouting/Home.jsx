import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
const Home = () => {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Home;