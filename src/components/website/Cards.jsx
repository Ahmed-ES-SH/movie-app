/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { Dash_context } from "../../context/Dash_context";
import { Data_context } from "../../context/Moviescontext";
import { Variable_context } from "../../context/Variablecontext";

const Cards = (props) => {
  const { heart, setheart } = Variable_context();
  const { genres_movies } = Data_context();
  const { add_movie_wathced, add_movie_watchlist, add_movie_fav } =
    Dash_context();
  const {
    id,
    name,
    poster_path,
    title,
    vote_average,
    genre_ids,
    first_air_date,
    release_date,
  } = props.movie;

  return (
    <div className="">
      <div key={id} className="card z-[222]  relative p-2 overflow-hidden ">
        <img
          style={{ width: "250px" }}
          className="rounded-xl object-contain   duration-300  "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <p
          onClick={() =>
            (window.location.pathname = `${
              props.type ? `/tv/${id}` : `/movie/${id}`
            }`)
          }
          className="title cursor-pointer hover:text-main_blue w-full pt-4 text-center duration-300 font-bold text-[#eee]"
        >
          {title
            ? title.length > 20
              ? title.slice(0, 20) + "..."
              : title
            : name.length > 20
            ? name.slice(0, 20) + "..."
            : name}
        </p>
        <div className="rate flex items-center gap-3 bg-secendary rounded-md duration-300 p-1">
          <i className="fa-regular fa-star text-main_blue"></i>
          <p className="text-white">{vote_average.toFixed(1)}</p>
        </div>
        <div className="flex  flex-col item-center  gap-1 w-[80%] genre ">
          {genre_ids.map((id) =>
            genres_movies.map(
              (genre) =>
                genre.id === id && (
                  <p
                    key={genre.id}
                    className=" whitespace-nowrap py-1 px-3 bg-main_blue rounded-r-md w-fit"
                  >
                    {genre.name}
                  </p>
                )
            )
          )}
        </div>
        <div
          onClick={() => {
            add_movie_fav(props.movie);
            setheart(!heart);
          }}
          className={`bookmark px-2 absolute z-[333] hover:text-red-500 
            bg-secendary rounded-md duration-300 p-1 cursor-pointer`}
        >
          <i className="fa-solid fa-heart"></i>
        </div>
        <p className="data text-orange-600 font-bold ">
          {first_air_date
            ? first_air_date.slice(0, 4)
            : release_date.slice(0, 4)}
        </p>
        <div className="add-buttons flex items-center justify-between w-[90%] absolute bottom-1">
          <button
            onClick={() => add_movie_wathced(props.movie)}
            className="bg-orange-400 text-white z-[333] px-2 rounded-md py-1 first-letter:text-2xl first-letter:text-red-700 hover:bg-white hover:text-black duration-300"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            onClick={() => add_movie_watchlist(props.movie)}
            className="bg-green-400 text-white z-[333] px-2 rounded-md py-1 first-letter:text-2xl first-letter:text-red-700 hover:bg-white hover:text-black duration-300"
          >
            <i className="fa-regular fa-eye-slash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
