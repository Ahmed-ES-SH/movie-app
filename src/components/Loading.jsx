import React from "react";
import "../Css/loading.css";

const Loading = () => {
  return (
    <div className="parent-loading ">
      <div className="load-wrapp ">
        <div className="load-3">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
