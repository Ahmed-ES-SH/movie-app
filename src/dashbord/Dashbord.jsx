import React from "react";
import { Outlet } from "react-router-dom";
import Side_bar from "../components/dashbord/side_bar";

const Dashbord = () => {
  return (
    <div className="flex gap-2 items-start">
      <Side_bar />
      <Outlet />
    </div>
  );
};

export default Dashbord;
