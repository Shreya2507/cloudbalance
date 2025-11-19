import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './pages/Dashboard/DashboardLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
