import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWYxZDc3NmExNWZkYmRiNDZiMjYxMDhmOTllNWIxOSIsInN1YiI6IjY1OTM5ODk2NjUxZmNmNWYxMzhmM2I1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYRVjGQmBwraD03I3ngQZzMHgvbVsT6_vNRNu2nit1k`,
    Accept: "application/json",
  },
});
