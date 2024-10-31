import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sign_in from "./auth/Sign_in";
import Sign_up from "./auth/Sign_up";
import Home from "./website/Home";
import Movies_list from "./website/Movies_list";
import Dashbord from "./dashbord/Dashbord";
import Watched from "./dashbord/user/Watched";
import Watch_list from "./dashbord/user/Watch_list";
import Favourit from "./dashbord/user/Favourit";
import Reqried_Auth from "./components/Reqried_Auth";
import Profile from "./components/dashbord/Profile";
import Tv_page from "./website/Tv_page";
import Movie_page from "./website/Movie_page";
import Email from "./auth/Email";

function App() {
  return (
    <>
      {/* start Auth pages  */}
      <Routes>
        <Route path="/signin" element={<Sign_in />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/email" element={<Email />} />

        {/* End Auth pages  */}
        {/* start dashbord pages */}

        <Route element={<Reqried_Auth />}>
          <Route path="/dashbord" element={<Dashbord />}>
            <Route path="watched" element={<Watched />} />
            <Route path="watchlist" element={<Watch_list />} />
            <Route path="Favorite" element={<Favourit />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* end dashbord pages */}
        {/* start website pages  */}

        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies_list />} />
        <Route path="movie/:id" element={<Movie_page />} />
        <Route path="tv/:id" element={<Tv_page />} />
      </Routes>
      {/* End website pages  */}
    </>
  );
}

export default App;
