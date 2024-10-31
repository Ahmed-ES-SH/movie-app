/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Data_context } from "../context/Moviescontext";
import { Dash_context } from "../context/Dash_context";
import { NavLink } from "react-router-dom";

const Current_Tv = (props) => {
  const { genres_Tv, Trend_tv } = Data_context();
  const { add_movie_wathced, add_movie_watchlist } = Dash_context();
  const [loading, setloading] = useState(true);
  const [movie, setmovie] = useState({});
  useEffect(() => {
    setmovie(movie === "" ? {} : Trend_tv[props.index]);
  });
  setTimeout(() => {
    setloading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative max-lg:flex-col flex h-full duration-500 overflow-y-auto justify-between gap-2 overflow-x-hidden">
          <div className="poster max-md:flex p-2  max-lg:w-[200px] sm:m-auto shadow-xl shadow-red-500  w-[30%] ">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                movie && movie.poster_path
              }`}
              alt="poster"
              className="z-[22]    self-center rounded-md shadow-lg "
            />
            <div className="max-md:flex max-md:flex-col -translate-x-3 z-1  hidden p-2 gap-y-2  items-start">
              {movie &&
                movie.genre_ids.map((id) =>
                  genres_Tv.map(
                    (genre) =>
                      genre.id === id && (
                        <p
                          className="p-2 whitespace-nowrap bg-main_blue rounded-r-md text-white text-center ml-1"
                          key={genre.id}
                        >
                          {genre.name}
                        </p>
                      )
                  )
                )}
            </div>
          </div>
          <div className="CONTENT relative flex-1 p-2 ">
            <div className="flex flex-row-reverse items-center justify-between w-full p-2">
              <h1 className=" text-white bg-main_blue rounded-md  whitespace-nowrap  p-2  font-bold text-[28px] max-sm:text-[18px]  tracking-[3px]">
                {movie
                  ? movie.name.length > 15
                    ? movie.name.slice(0, 15) + "..."
                    : movie.name
                  : movie.name}
              </h1>
              <div className="votee w-[80px] flex items-center justify-between bg-main rounded-md p-2 text-white   ">
                <p>{movie ? movie.vote_average.toFixed(1) : "no vote"}</p>
                <i className="fa-solid fa-star ml-1"></i>
              </div>
            </div>
            <p className=" p-2 text-[18px] h-[90px] lg:h-[150px] overflow-ellipsis overflow-hidden    text-white font-semibold tracking-[3px]">
              {movie ? movie.overview : "...."}
            </p>
            <p className="p-2 text-white text-[22px]">
              {movie ? movie.first_air_date.slice(0, 4) : "data"}
            </p>
            <div className="flex flex-wrap max-md:hidden p-2 gap-y-2  items-start">
              {movie.genre_ids.map((id) =>
                genres_Tv.map(
                  (genre) =>
                    genre.id === id && (
                      <p
                        className="p-2 bg-main_blue rounded-r-md text-white text-center ml-1"
                        key={genre.id}
                      >
                        {genre.name}
                      </p>
                    )
                )
              )}
            </div>
            <div className="buttons  lg:absolute  bottom-2 right-3 max-md:block max-md:ml-auto max-md:w-fit">
              <button
                onClick={() => add_movie_watchlist(movie)}
                className="p-2 bg-main_blue first-letter:text-[32px] first-letter:text-black first-letter:font-bold first-letter:ml-1 hover:bg-white duration-300 hover:text-black text-white text-center rounded-md ml-1"
              >
                Watchlist
              </button>
              <button
                onClick={() => add_movie_wathced(movie)}
                className="p-2 bg-green-400 first-letter:text-[32px] first-letter:text-black first-letter:font-bold first-letter:ml-1 hover:bg-white duration-300 hover:text-black text-white text-center rounded-md ml-1"
              >
                Watched
              </button>
              <NavLink to={`/tv/${movie.id}`}>
                <button className="p-2 max-sm:mt-2 bg-red-400 first-letter:text-[32px] first-letter:text-black first-letter:font-bold first-letter:ml-1 hover:bg-white duration-300 hover:text-black text-white text-center rounded-md ml-1">
                  go to movie
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Current_Tv;
