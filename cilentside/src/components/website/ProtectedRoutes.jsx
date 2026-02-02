import React from "react";
import { ReactSession } from "react-client-session";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const username = ReactSession.get("username");
  return username ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={"/loginRegister"}></Navigate>
  );
};

export default ProtectedRoutes;
