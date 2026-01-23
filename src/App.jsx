import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Join from './Pages/Join'

const App = () => {
  return (
    <div>
      <BrowserRouter basename='/SwiftPay'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Join />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
