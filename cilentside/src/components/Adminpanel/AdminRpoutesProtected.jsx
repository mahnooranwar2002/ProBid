
import React from "react";
import { ReactSession } from "react-client-session";
import { Navigate, Outlet } from "react-router-dom";
const AdminRpoutesProtected = () => {
 const adminLogined = ReactSession.get("AdminLogined");
  return adminLogined ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={"/loginRegister"}></Navigate>
  );
}

export default AdminRpoutesProtected
