import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/signin'
import { BrowserRouter } from 'react-router-dom/dist'

const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
   
  )
}

export default Router
