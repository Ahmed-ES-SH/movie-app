/* eslint-disable react/prop-types */

import { Data_context } from "../../context/Moviescontext";
import { Dash_context } from "../../context/Dash_context";

const Cards_dash = (props) => {
  const { genres_movies } = Data_context();
  const { delet_movie } = Dash_context();
  const {
    id,
    name,
    poster_path,
    title,
    vote_average,
    genre_ids,
    first_air_date,
    release_date,
    list_type,
  } = props.movie;
  return (
    <div>
      <div key={id} className="card  p-2 relative overflow-hidden ">
        <img
          style={{ width: "250px" }}
          className="rounded-xl object-contain relative  duration-300  "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <p className="title w-full   pt-20 text-center duration-300 font-bold text-[#eee]">
          {title
            ? title.length > 20
              ? title.slice(0, 20) + "..."
              : title
            : name && name.length > 20
            ? name.slice(0, 20) + "..."
            : name}
        </p>
        <div className="rate flex items-center gap-3 bg-secendary rounded-md duration-300 p-1">
          <i className="fa-regular fa-star text-main_blue"></i>
          <p className="text-white">
            {vote_average && vote_average.toFixed(1)}
          </p>
        </div>
        <div className="flex  flex-col item-center  gap-1 w-[80%] genre ">
          {genre_ids &&
            genre_ids.map((id) =>
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

        <p className="data text-orange-600 font-bold pt-16 ">
          {first_air_date
            ? first_air_date.slice(0, 4)
            : release_date.slice(0, 4)}
        </p>
        <div
          onClick={() => delet_movie(id, list_type)}
          className="rate text-orange-500 font-bold cursor-pointer bg-secendary px-3 text-[14px]  rounded-md py-1 absolute top-4 left-4 w-fit "
        >
          x
        </div>
      </div>
    </div>
  );
};

export default Cards_dash;
