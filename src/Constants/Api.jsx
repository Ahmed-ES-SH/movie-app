export const Api = {
  popular_movie: "movie/popular?language=en-US&page=1",
  Top_rated:
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  TV_show:
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  genre: "genre/movie/list",
  genre_tv: "genre/tv/list",
  trend_movie: "trending/movie/week?language=en-US",
  trend_tv: "trending/tv/week?language=en-US'",
  pop_tv: "tv/popular?language=en-US&page=1",
  page_1:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  page_2:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
  page_3:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3",
  page_4:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4",
  vidos: "https://api.themoviedb.org/3/movie/278/videos?language=en-US'",
};
