/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { Axios } from "../Constants/Axios";
import { Api } from "../Constants/Api";

export const Data = createContext([]);

const Data_providr = ({ children }) => {
  const {
    TV_show,
    trend_movie,
    Top_rated,
    popular_movie,
    genre,
    trend_tv,
    page_1,
    page_2,
    page_3,
    page_4,
    pop_tv,
    genre_tv,
  } = Api;

  let all = [];

  const [TV, setTV] = useState([]);
  const [top, setTop] = useState([]);
  const [page1, setpage1] = useState([]);
  const [page2, setpage2] = useState([]);
  const [page3, setpage3] = useState([]);
  const [page4, setpage4] = useState([]);
  const [latest, setlatest] = useState([]);
  const [genres_movies, setgenres_movies] = useState([]);
  const [genres_Tv, setgenres_Tv] = useState([]);
  const [Trend_tv, settrend_tv] = useState([]);
  const [trendeing, settrending] = useState([]);
  const [popular_tv, setpopular_tv] = useState([]);
  const [popular, setpopular] = useState(false);

  useEffect(() => {
    const data_show = async (url, set, want) => {
      try {
        const response = await Axios.get(url);
        set(response.data[want]);
      } catch (error) {
        console.error(error);
      }
    };
    data_show(trend_movie, settrending, "results");
    data_show(popular_movie, setlatest, "results");
    data_show(Top_rated, setTop, "results");
    data_show(genre, setgenres_movies, "genres");
    data_show(genre_tv, setgenres_Tv, "genres");
    data_show(TV_show, setTV, "results");
    data_show(trend_tv, settrend_tv, "results");
    data_show(pop_tv, setpopular_tv, "results");
    data_show(page_1, setpage1, "results");
    data_show(page_2, setpage2, "results");
    data_show(page_3, setpage3, "results");
    data_show(page_4, setpage4, "results");
  }, []);

  all = [...page1, ...page2, ...page3, ...page4];

  return (
    <Data.Provider
      value={{
        top,
        TV,
        popular,
        setpopular,
        latest,
        genres_movies,
        genres_Tv,
        trendeing,
        Trend_tv,
        all,
        popular_tv,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Data_providr;

export const Data_context = () => {
  return useContext(Data);
};
