import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookie from "universal-cookie";

const Reqried_Auth = () => {
  const cookie = new Cookie();
  const token = cookie.get("user");
  return <div>{token ? <Outlet /> : <Navigate to={"/signin"} />}</div>;
};

export default Reqried_Auth;
