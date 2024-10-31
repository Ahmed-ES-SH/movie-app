import { useRef, useState } from "react";
import {
  getStorage,
  getDownloadURL,
  uploadBytes,
  ref,
  getMetadata,
} from "firebase/storage";
import { Auth_context } from "../../context/Auth_Context";
import Loading from "../Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Profile = () => {
  const { currentuser, update_profile } = Auth_context();
  const [image_url, setimage_url] = useState("");
  const [Error, setError] = useState(false);
  const [message, setmessage] = useState(false);
  const [loading, setloading] = useState(false);
  const [disapled, setdisapld] = useState(true);

  const [form, setform] = useState({
    name: currentuser.displayName,
    email: currentuser.email,
  });
  const open_file = useRef(null);

  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const image_handeler = async (e) => {
    const file = e.target.files[0];
    const storge = getStorage();
    const refstorge = ref(storge, `images/${file.name}`);

    try {
      const fileExists = await getMetadata(refstorge)
        .then(() => true)
        .catch(() => false);

      if (fileExists) {
        getDownloadURL(refstorge)
          .then((url) => {
            setimage_url(url);
          })
          .catch((error) => {
            console.log("Error getting download URL:", error);
          });
      } else {
        await uploadBytes(refstorge, file);
        const downloadUrl = await getDownloadURL(refstorge);
        setimage_url(downloadUrl);
      }
    } catch (err) {
      console.error("Error handling image:", err);
    }
  };

  const handel_update = async (e) => {
    e.preventDefault();
    try {
      if (image_url) {
        setError(false);
        setloading(true);
        setmessage(true);
        Swal.fire("Changes are saved");
        setTimeout(() => {
          window.location.reload();
        }, 500);
        update_profile(form.name, image_url);
      } else {
        setError(false);
        setloading(true);
        setmessage(true);
        update_profile(form.name);
        Swal.fire("Changes are saved");
        setTimeout(() => {
          window.location.reload();
        }, 500);
        console.log("done without photo");
      }
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
    <div className="w-full">
      {loading && <Loading />}
      {currentuser.displayName === "" && <Loading />}
      <form onSubmit={handel_update}>
        <div className="w-full p-2 text-white flex flex-col items-start text-[20px]">
          <label>Name:</label>
          <input
            style={{ backgroundColor: disapled && "gray" }}
            onChange={handelchange}
            name="name"
            required
            defaultValue={form.name}
            className="valid:outline-green-600  h-fit border-transparent border p-3 mt-1 duration-300 w-full  rounded-md  bg-main_blue"
            type="text"
            placeholder="Your Name..."
            disabled={disapled}
          />
        </div>
        <div className="w-full p-2 text-white flex flex-col items-start text-[20px]">
          <label>Email:</label>
          <input
            style={{ backgroundColor: disapled && "gray" }}
            onChange={handelchange}
            name="email"
            value={form.email}
            className="valid:outline-green-600  h-fit border-transparent border p-3 mt-1 duration-300 w-full  rounded-md  bg-main_blue"
            type="text"
            placeholder="Your Email..."
            disabled={disapled}
          />
        </div>
        <div className="w-full p-2 text-white flex flex-col items-start text-[20px]">
          <label htmlFor="photo">Photo:</label>
          <input
            onChange={image_handeler}
            ref={open_file}
            id="photo"
            type="file"
            className="hidden duration-300"
            disabled={disapled}
          />
        </div>
        <div
          style={{ borderColor: disapled && "gray" }}
          onClick={() => open_file.current.click()}
          className="w-full h-[200px] p-2 rounded-sm cursor-pointer border-dashed border-4 border-main_blue flex items-center justify-center"
        >
          <img
            style={{ filter: disapled && "grayscale(100%)" }}
            className="w-[150px]"
            src="/public/pngwing.com.png"
            alt=""
          />
        </div>
        <div className="buttons flex items-center justify-end pt-4 text-white  w-full">
          <button
            onClick={() => setdisapld((prev) => !prev)}
            style={{ backgroundColor: !disapled && "gray" }}
            className="p-4 bg-main_blue rounded-sm mr-2 "
            disabled={!disapled}
          >
            Edit
          </button>
          <input
            style={{ backgroundColor: disapled && "gray" }}
            className="p-4 bg-main_blue rounded-sm mr-2 duration-300 cursor-pointer   "
            type="submit"
            value="Save"
            disabled={disapled}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
