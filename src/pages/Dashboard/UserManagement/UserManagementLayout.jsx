import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

const UserManagementLayout = () => {
  return (
    <div className="h-full w-full p-5">
      <Outlet />
    </div>
  );
};

export default UserManagementLayout;
