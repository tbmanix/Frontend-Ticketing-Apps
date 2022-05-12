import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);
  console.log(dataUser);

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && dataUser[0].role !== "admin") {
    //   true | true
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
