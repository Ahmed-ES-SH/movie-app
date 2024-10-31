import React from "react";
import { NavLink } from "react-router-dom";
import { dash_navs } from "../../Constants/constants";
import { Auth_context } from "../../context/Auth_Context";
import Loading from "../Loading";

const Side_bar = () => {
  const { logout, currentuser } = Auth_context();

  return (
    <>
      {currentuser.photoURL === "" && <Loading />}
      <div className="max-sm:w-fit w-[200px] h-screen p-2 rounded-lg bg-secendary relative max-sm:flex max-sm:items-center">
        <div className="page">
          <div className="max-sm:hidden user pt-20 flex items-center  flex-col gap-2 text-white  ">
            <img
              src={currentuser.photoURL}
              className="rounded-full w-[180px] object-contain border-2 border-main_blue shadow-md"
            />
            <h2>{currentuser.displayName}</h2>
          </div>
          {/* start <NavLink>*/}
          <div className="linkes pt-10">
            {dash_navs.map((nav, index) => (
              <NavLink className="" key={index} to={nav.title}>
                <div className="flex items-center   justify-between w-full max-sm:py-4 hover:bg-main_blue hover:text-white duration-300 ">
                  <h1 className="p-2 text-white max-sm:hidden">{nav.title}</h1>
                  <i
                    className={`${nav.icon} p-2 text-red-500 hover:text-white `}
                  />
                </div>
              </NavLink>
            ))}
          </div>
          {/* end <NavLink>*/}
          <NavLink
            className="absolute bottom-12 md:px-2 py-2 w-full flex items-cener justify-between"
            to={"/"}
          >
            <h1 className="p-2 text-red-700 max-sm:hidden">Home</h1>
            <i className="fa-solid fa-house p-2 text-orange-500" />
          </NavLink>
          <NavLink
            onClick={() => logout()}
            to="/"
            className=" absolute bottom-2 py-2 md:px-2 text-white flex items-center  justify-between w-full"
          >
            <h1 className="p-2 text-red-700 max-sm:hidden">Log out </h1>
            <i className="fa-solid fa-right-from-bracket p-2 text-orange-500"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Side_bar;
