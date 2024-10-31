import React, { useState } from "react";
import Slider_vertical from "../components/website/Slider";
import { Styles } from "../Constants/constants";
import { Data_context } from "../context/Moviescontext";
import Current_movie from "./Current_movie";
import Current_Tv from "./Current_Tv";
import { Variable_context } from "../context/Variablecontext";

const Trending = () => {
  const { h1 } = Styles;
  const { width } = Variable_context();
  const { Trend_tv, trendeing } = Data_context();
  const [index, setindex] = useState(0);
  const [current_state, setcurrent_state] = useState(true);

  return (
    <>
      <div className="py-8">
        <div className="heades flex items-center justify-between p-2 w-[90%] m-auto mb-2">
          <h1
            onClick={() => setcurrent_state(false)}
            style={{ background: !current_state && "#2f80ed" }}
            className={`${h1}`}
          >
            Trending Movies
          </h1>
          <h1
            onClick={() => setcurrent_state(true)}
            style={{ background: current_state && "#2f80ed" }}
            className={`${h1}`}
          >
            Trending Shows
          </h1>
        </div>
        <div
          style={{
            flexDirection:
              width > 992
                ? current_state
                  ? "row"
                  : "row-reverse"
                : current_state
                ? "column-reverse"
                : "column-reverse",
          }}
          className="trend_parent max-lg:h-fit relative  overflow-hidden max-lg:overflow-y-auto max-lg:flex-col-reverse flex items-center  justify-between p-2 w-[90%] m-auto h-[70vh] shadow-2xl shadow-main_blue"
        >
          {current_state ? (
            <div
              style={{ rotate: current_state && "360deg", transition: ".5s" }}
              className="current_movie  bg-[#365486] h-full w-[75%] max-lg:w-full rounded-lg shadow-xl shadow-main_blue "
            >
              <Current_Tv index={index} />
            </div>
          ) : (
            <div
              style={{ rotate: !current_state && "-360deg", transition: ".5s" }}
              className="current_movie  bg-[#332941] h-full w-[75%] max-lg:w-full rounded-lg shadow-xl shadow-main_blue "
            >
              <Current_movie index={index} />
            </div>
          )}
          <div className="slider_movie w-[20%] h-fit max-lg:w-full self-center rounded-md  ">
            <Slider_vertical
              state={current_state}
              send_index={setindex}
              data={current_state ? Trend_tv : trendeing}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
