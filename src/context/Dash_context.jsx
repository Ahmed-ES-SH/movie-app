import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Dash = createContext([]);
const state_watched = window.localStorage.getItem("watched")
  ? JSON.parse(window.localStorage.getItem("watched"))
  : [];
const state_watchlist = window.localStorage.getItem("watchlist")
  ? JSON.parse(window.localStorage.getItem("watchlist"))
  : [];
const state_favourit = window.localStorage.getItem("favourit")
  ? JSON.parse(window.localStorage.getItem("favourit"))
  : [];

const Dash_providr = ({ children }) => {
  const [watched, setwatched] = useState(state_watched);
  const [watchlist, setwatchlist] = useState(state_watchlist);
  const [favourit, setfavourit] = useState(state_favourit);

  useEffect(() => {
    window.localStorage.setItem("watched", JSON.stringify(watched));
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
    window.localStorage.setItem("favourit", JSON.stringify(favourit));
  }, [watched, watchlist, favourit]);

  const add_movie_wathced = (movie) => {
    setwatched((movies) => {
      if (!movies.find((item) => item.id === movie.id)) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Movie saved in watched list",
          showConfirmButton: false,
          timer: 1500,
        });
        return [...movies, { ...movie, list_type: "watched" }];
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Movie already exists in watched list",
          showConfirmButton: false,
          timer: 1500,
        });
        return movies;
      }
    });
  };

  const add_movie_watchlist = (movie) => {
    setwatchlist((movies) => {
      if (!movies.find((item) => item.id === movie.id)) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Movie saved in watchlist",
          showConfirmButton: false,
          timer: 1500,
        });
        return [...movies, { ...movie, list_type: "watchlist" }];
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Movie already exists in watchlist",
          showConfirmButton: false,
          timer: 1500,
        });
        return movies;
      }
    });
  };
  const add_movie_fav = (movie) => {
    setfavourit((movies) => {
      if (!movies.find((item) => item.id === movie.id)) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Movie saved in favourit list",
          showConfirmButton: false,
          timer: 1500,
        });
        return [...movies, { ...movie, list_type: "favourit" }];
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Movie already exists in favourit list",
          showConfirmButton: false,
          timer: 1500,
        });
        return movies;
      }
    });
  };

  const delet_movie = (id, listType) => {
    switch (listType) {
      case "watchlist":
        setwatchlist((movies) => movies.filter((movie) => movie.id !== id));
        break;
      case "watched":
        setwatched((movies) => movies.filter((movie) => movie.id !== id));
        break;
      case "favourit":
        setfavourit((movies) => movies.filter((movie) => movie.id !== id));
        break;
      default:
        break;
    }
  };

  return (
    <Dash.Provider
      value={{
        delet_movie,
        add_movie_wathced,
        add_movie_watchlist,
        add_movie_fav,
        watched,
        watchlist,
        favourit,
      }}
    >
      {children}
    </Dash.Provider>
  );
};

export default Dash_providr;

export const Dash_context = () => {
  return useContext(Dash);
};
