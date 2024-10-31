import React from "react";
import Cards_dash from "../../components/dashbord/Cards_dash";
import { Dash_context } from "../../context/Dash_context";

const Favourit = () => {
  const { favourit } = Dash_context();
  return (
    <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-y-8 gap-x-8 p-4">
      {favourit.map((movie) => (
        <Cards_dash movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Favourit;
