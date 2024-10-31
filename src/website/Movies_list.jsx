import React, { useState } from "react";
import Movies from "../components/website/Movies";
import Navbar from "../components/website/Navbar";

const Movies_list = () => {
  const [data, setdata] = useState([]);
  return (
    <div>
      <Navbar DATA={(data) => setdata(data)} />

      <Movies data={data} />
    </div>
  );
};

export default Movies_list;
