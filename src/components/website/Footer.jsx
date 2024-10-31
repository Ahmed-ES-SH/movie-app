import React, { useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  opation_about,
  opation_press,
  opation_shop,
} from "../../Constants/constants";

const Footer = () => {
  const [logo_url, setlogo_url] = useState("");
  const storge = getStorage();
  const refstorge = ref(storge, `logo.svg`);
  getDownloadURL(refstorge).then((url) => setlogo_url(url));
  return (
    <div className=" bg-secendary p-3  ">
      <div className="m-auto w-[90%] grid grid-cols-4 max-md:grid-cols-2 border-b border-gray-400">
        <div className="  h-fit w-3/4 ">
          <img className="border-b border-gray-400" src={logo_url} />
          <p className="text-white text-[14spx]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis
            corporis optio natus.
          </p>
        </div>
        <div className="shop text-gray-400">
          <h1 className="text-white text-[20px] py-2">shop</h1>
          <ul>
            {opation_shop.map((title) => (
              <li className="p-1 hover:ml-2 " key={title}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="press">
          <div className="shop text-gray-400">
            <h1 className="text-white text-[20px] py-2">Press</h1>
            <ul>
              {opation_press.map((title) => (
                <li className="p-1 hover:ml-2" key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="About">
          <div className="shop text-gray-400">
            <h1 className="text-white text-[20px] py-2">About</h1>
            <ul>
              {opation_about.map((title) => (
                <li className="p-1 hover:ml-2" key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" text-white text-[20px] pt-4 w-[90%] m-auto flex items-center justify-between max-sm:flex-col max-sm:items-start gap-4">
        <div className="flex items-center gap-3 w-1/2">
          <p className="border-r border-gray-400 p-2">Privacy Policy</p>
          <p className="border-r border-gray-400 p-2"> Terms & Conditions </p>
          <p>Code of Conduct</p>
        </div>
        <div className="flex gap-4">
          <i className="fa-brands fa-instagram "></i>
          <i className="fa-brands fa-facebook "></i>
          <i className="fa-brands fa-twitter "></i>
          <i className="fa-brands fa-pinterest-p "></i>
        </div>
      </div>
      <div className="w-[90%] m-auto text-white pt-4">
        <p className="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
          fuga. Ex at maxime eum odio quibusdam pariatur expedita explicabo
          harum! Consectetur ducimus delectus nemo, totam odit!
        </p>
      </div>
    </div>
  );
};

export default Footer;
