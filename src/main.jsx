import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Booking from './Booking.jsx'
import Admin from './Admin.jsx'
import Login from './Login.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<App/>} />
      <Route path='/book/:no' element={<Booking/>} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
  </BrowserRouter>
)
