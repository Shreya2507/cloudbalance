import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  //DIRECTLY FROM LOCALSTORAGE
  // const isAuthenticated = localStorage.getItem("authData");
  // return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />

  //CONTEXT API
  // const { currentUser } = useContext(AuthContext);

  const currentUser = useSelector(state => state.currentUser);
  useEffect(() => {
    console.log(currentUser)
  }, []);
  

  return currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
