import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Onboarding from "./pages/Dashboard/Onboarding";
import CostExplorer from "./pages/Dashboard/CostExplorer";
import AwsServices from "./pages/Dashboard/AwsServices";
import CreateUser from "./pages/Dashboard/UserManagement/CreateUser";
import UsersTable from "./pages/Dashboard/UserManagement/UsersTable";
import UserManagementLayout from "./pages/Dashboard/UserManagement/UserManagementLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout replace />}>
            <Route index element={<Navigate to="user-management" />}/>
            <Route path="user-management" element={<UserManagementLayout />}>
              <Route index element={<UsersTable />} />
              <Route path="create" element={<CreateUser />} />
            </Route>
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route path="aws-services" element={<AwsServices />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
