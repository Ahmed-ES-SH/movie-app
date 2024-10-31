/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Data_context } from "../../context/Moviescontext";
import { Link, NavLink } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Dropdown from "./Dropdown";
import { opation_nav } from "../../Constants/constants";
import { Variable_context } from "../../context/Variablecontext";
import { Axios } from "../../Constants/Axios";
import { Auth_context } from "../../context/Auth_Context";
import Cookie from "universal-cookie";

const Navbar = ({ DATA }) => {
  const { popular, setpopular } = Data_context();
  const { drop_nav, setdrop_nav, deop_prof, setdeop_prof } = Variable_context();
  const { currentuser, logout } = Auth_context();
  const [search, setsearch] = useState("");
  const [logo_url, setlogo_url] = useState("");
  const [data_search, setdata_search] = useState([]);
  DATA(data_search);
  const storge = getStorage();
  const refstorge = ref(storge, `logo.svg`);
  getDownloadURL(refstorge).then((url) => setlogo_url(url));
  const api = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US`;
  const cookie = new Cookie();
  const token = cookie.get("user");
  const hanellogout = () => {
    logout(), cookie.remove("user"), window.location.reload();
  };
  useEffect(() => {
    const data_search = async () => {
      try {
        const response = await Axios.get(api);
        setdata_search(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    data_search(api);
  }, [api]);

  return (
    <div className="parent  ">
      <div className=" container h-[90px] px-16 flex items-center justify-between text-light">
        <div className="first_part flex items-center gap-4">
          <NavLink to="/" className="logo">
            <img src={logo_url} alt="logo" />
          </NavLink>
          <div className="links max-lg:hidden">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                style={{ color: popular ? "#2f80ed" : "#fff" }}
                onClick={() => setpopular(!popular)}
                className="flex items-baseline gap-2"
              >
                <p>Top Movies </p>
                <i className="fa-solid fa-circle text-[8px]"></i>
              </li>

              <li>
                <NavLink to={"/movies"}>Movies</NavLink>
              </li>

              <li onClick={() => setdrop_nav(!drop_nav)} className="relative">
                <i className="fa-solid fa-ellipsis"></i>
                <div
                  style={{
                    visibility: drop_nav ? "visible" : "hidden",
                    transition: ".3s",
                    top: drop_nav ? "100%" : "0",
                  }}
                  className="absolute top-[100%] left-0 z-[333]"
                >
                  {drop_nav && <Dropdown opation={opation_nav} />}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="secend_part flex items-center gap-4">
          {window.location.pathname == "/movies" && (
            <div className="search flex items-center gap-2 relative">
              <input
                onChange={(e) => setsearch(e.target.value)}
                className=" px-4 py-2 rounded-full bg-secendary text-light outline-none focus:outline-main_blue"
                type="text"
                placeholder="Looking for ..."
              />
              <i className="fa-solid fa-magnifying-glass absolute right-4 "></i>
            </div>
          )}
          {token ? (
            <div
              onClick={() => setdeop_prof(!deop_prof)}
              className="w-[150px]  h-[35px] max-sm:w-fit p-2  rounded-lg bg-red-700 cursor-pointer flex items-center justify-between"
            >
              <div className="p-2 max-sm:hidden">
                {currentuser && currentuser.displayName}
              </div>
              <div className="mr-2 flex items-center justify-between w-[50px]">
                <img
                  className="w-[30px] rounded-full"
                  src={currentuser && currentuser.photoURL}
                  alt=""
                />
                <i className="fa-solid fa-caret-down" />
              </div>
              {deop_prof && (
                <div className=" w-[150px] h-fit  absolute top-[11%] max-sm:right-2  z-[22]   p-2 rounded-lg bg-main_blue text-white">
                  <ul className="flex flex-col items-start">
                    <NavLink
                      className="py-2 hover:ml-2 duration-300 flex items-center justify-between w-full"
                      to={"/dashbord"}
                    >
                      <h1 className="">Profile </h1>
                      <i className="fa-solid fa-user p-2 text-black"></i>
                    </NavLink>
                    <NavLink
                      className="py-2 hover:ml-2 duration-300 flex items-center justify-between w-full"
                      to={"/movies"}
                    >
                      <h1 className="">movies </h1>
                      <i className="fa-solid fa-film p-2 text-black"></i>
                    </NavLink>

                    <NavLink
                      onClick={() => hanellogout()}
                      to="/"
                      className="    text-white flex items-center hover:ml-2 duration-300 justify-between w-full"
                    >
                      <h1 className="">Log out </h1>
                      <i className="fa-solid fa-right-from-bracket p-2 text-black"></i>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="sign_in flex items-center gap-2">
              <Link to={"/signin"}>Sign in</Link>
              <i className="fa-solid fa-right-to-bracket rotate-180 text-main_blue"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
