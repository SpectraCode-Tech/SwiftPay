import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Join from './Pages/Join'
import Dashboard from './Pages/Dashboard'
import Admin from './Pages/Admin'
import Utilities from './Components/Utilities'
import Profile from './Components/Profile'

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("user")); 
  return (
    <div>
      <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Join />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/admin" element={currentUser?.role === "admin" ? (<Admin />) : (<Navigate to="/Dashboard" />)} />
      <Route path='/utilities' element={<Utilities />} />
      <Route path='/account' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
