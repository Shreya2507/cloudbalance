import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './pages/Dashboard/DashboardLayout'
import UserManagement from './pages/Dashboard/UserManagement/UserManagement'
import Onboarding from './pages/Dashboard/Onboarding'
import CostExplorer from './pages/Dashboard/CostExplorer'
import AwsServices from './pages/Dashboard/AwsServices'
import CreateUser from './pages/Dashboard/UserManagement/CreateUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='user-management' element={<UserManagement />}>
              <Route path='create' element={<CreateUser />} />
            </Route>
            <Route path='onboarding' element={<Onboarding />}/>
            <Route path='cost-explorer' element={<CostExplorer />}/>
            <Route path='aws-services' element={<AwsServices />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
