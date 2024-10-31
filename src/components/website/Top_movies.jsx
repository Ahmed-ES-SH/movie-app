import { Data_context } from "../../context/Moviescontext";
import "../../Css/Populat_movies.css";
import Cards from "./Cards";

const Top_movies = () => {
  const { top } = Data_context();
  top.length = 10;

  return (
    <div className="w-full z-20 absolute duration-300 left-0  bg-secendary flex items-center rounded-lg   ">
      <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-y-8 gap-x-8 p-4">
        {top.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Top_movies;
