import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  // const authed = isauth();
  // isauth() returns true or false based on localStorage
  const token = window.localStorage.getItem("userInfo");

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
