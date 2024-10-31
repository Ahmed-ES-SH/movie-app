import { useState } from "react";
import { Auth_context } from "../context/Auth_Context";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Loading from "../components/Loading";

const Email = () => {
  const { rest_password } = Auth_context();
  const input_style =
    "  w-[90%] p-2 bg-secendary  rounded-2xl focus:bg-secendary outline-transparent     foucs:outline  invalid:outline-red-400 valid:outline-main_blue text-white text-[19px] duration-300   ";
  const [email, setemail] = useState("");
  const [Error, setError] = useState(false);
  const [message, setmessage] = useState(false);
  const [loading, setloading] = useState(false);

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      setloading(true);
      await rest_password(email);
      setmessage(true);
      Swal.fire("Check your inbox for further instructions");
    } catch (err) {
      setmessage(false);
      console.log(err);
      setloading(false);
      setError(true);
      Swal.fire("Failed to reset password");
    }
    setloading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <div className='parent my-5 bg-[url("https://flixtv.volkovdesign.com/main/img/bg.jpg")] flex items-center justify-center h-screen  w-full bg-cover bg-no-repeat bg-center  '>
        <div
          style={{
            boxShadow:
              "0px 1px 6px 0px #2f80ed , 0px 1px 6px 0px #2f80ed , 0px 1px 6px 0px #2f80ed,0px 1px 6px 0px #2f80ed",
          }}
          className="container shadow-main_blue pb-3 shadow-sm  px-15 m-auto w-[32%] max-lg:w-[98%] rounded-md h-fit bg-main "
        >
          <div className="logo  w-full">
            <img
              className="p-2 pt-4 m-auto"
              src="/public/logo.svg"
              alt="logo"
            />
          </div>
          <div className="input-faild w-full   flex items-center justify-center  flex-col gap-5  pt-6 ">
            <form
              onSubmit={handelsubmit}
              className="input-faild w-full   flex items-center justify-center  flex-col gap-5  "
            >
              <input
                required
                className={`${input_style}`}
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                className={`w-[90%] p-2 rounded-2xl hover:bg-white hover:text-black duration-300 text-[20px] cursor-pointer  bg-main_blue text-white`}
                type="submit"
                value={"sign in"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
