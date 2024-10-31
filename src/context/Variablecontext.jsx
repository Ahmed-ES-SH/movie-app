import { useContext, createContext, useState } from "react";

const Variables = createContext([]);

const Variable_providr = ({ children }) => {
  const [width, setwidth] = useState(window.innerWidth);
  const [drop_nav, setdrop_nav] = useState(false);
  const [deop_prof, setdeop_prof] = useState(false);
  const [heart, setheart] = useState(false);
  const [loading, setloading] = useState(false);
  const [type_media, setype_media] = useState(true);

  window.addEventListener("resize", () => {
    setwidth(window.innerWidth);
  });

  return (
    <Variables.Provider
      value={{
        width,
        type_media,
        setype_media,
        drop_nav,
        setdrop_nav,
        heart,
        setheart,
        deop_prof,
        setdeop_prof,
        loading,
        setloading,
      }}
    >
      {children}
    </Variables.Provider>
  );
};

export default Variable_providr;

export const Variable_context = () => {
  return useContext(Variables);
};
