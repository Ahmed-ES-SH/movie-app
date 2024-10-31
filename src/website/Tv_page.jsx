/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../components/website/Navbar";
import { Axios } from "../Constants/Axios";
import Loading from "../components/Loading";
import { Dash_context } from "../context/Dash_context";
import Popular_tv from "../components/website/Popular_tv";
import Footer from "../components/website/Footer";

const Movie_page = () => {
  const { add_movie_wathced, add_movie_watchlist } = Dash_context();
  const [currentitem, setcurrentitem] = useState([]);
  const [loading, setloading] = useState(true);

  const id = window.location.pathname.slice(4);
  const api = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  setTimeout(() => {
    setloading(false);
  }, 2000);

  useEffect(() => {
    Axios.get(api).then((data) => setcurrentitem(data.data));
  }, []);
  console.log(currentitem);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar DATA={() => {}} />
          <div
            style={{}}
            className="flex  h-[80vh] overflow-y-auto max-sm:items-center max-sm:flex-col gap-6  rounded-lg shadow-2xl shadow-main_blue "
          >
            <div className="left-half  w-[500px] max-lg:w-full p-4 flex justify-center ">
              <img
                className="rounded-md md:h-full   shadow-lg shadow-red-600 border-main_blue"
                src={`https://image.tmdb.org/t/p/w500${currentitem.poster_path}`}
                alt={currentitem.name}
              />
            </div>
            <div className="right-half w-[70%] relative flex flex-col items-start max-md:p-2 gap-6 ">
              <h1 className="text-[30px] font-bold text-white tracking-[5px]">
                {currentitem.name}
              </h1>
              <div className="flex items-center gap-4">
                {currentitem &&
                  currentitem.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="text-white text-[20px] block w-fit p-1 rounded-md bg-main_blue"
                    >
                      {genre.name}
                    </p>
                  ))}
              </div>
              <div className="pt-2 flex items-center gap-6 max-md:grid max-md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-main_blue"></i>
                  <p className="text-white  flex ">
                    {}
                    <p className="px-2">h</p>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-language text-main_blue"></i>
                  <p className="text-white">{currentitem.original_language}</p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-globe text-main_blue"></i>
                  <p className="text-white">
                    {currentitem.production_countries.map((movie) =>
                      movie.name.length > 10
                        ? movie.name.slice(0, 10) + "..."
                        : movie.name
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-star text-main_blue"></i>
                  <p className="text-white">
                    {currentitem.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
              <p className="text-white  tracking-wide text-[18px] w-3/4">
                {currentitem.overview}
              </p>
              <p className="text-white p-1 text-[19px] tracking-[3px] w-full py-4">
                {currentitem.first_air_date}
              </p>
              <div className="buttons text-white  p-2 bottom-2 right-2  flex items-center  gap-4 self-end max-sm:text-[24px]  ">
                <button
                  onClick={() => add_movie_watchlist(currentitem)}
                  className="watch-list max-sm:py-4 whitespace-nowrap duration-300 hover:bg-white hover:text-black p-4 max-lg:p-1 rounded-md bg-main_blue first-letter:text-black first-letter:font-bold  first-letter:text-2xl"
                >
                  Watch list
                </button>
                <button
                  onClick={() => add_movie_wathced(currentitem)}
                  className="watched max-sm:py-4 whitespace-nowrap duration-300 hover:bg-white hover:text-black p-4 max-lg:p-1 rounded-md bg-green-500 first-letter:text-black first-letter:font-bold  first-letter:text-2xl"
                >
                  Watched
                </button>
              </div>
            </div>
          </div>
          <Popular_tv />
          <Footer />
        </>
      )}
    </>
  );
};

export default Movie_page;
