import Navbar from "../components/website/Navbar";
import { Data_context } from "../context/Moviescontext";
import Top_movies from "../components/website/Top_movies";
import Popular_movies from "../components/website/Popular_movies";
import Popular_tv from "../components/website/Popular_tv";
import Footer from "../components/website/Footer";
import Trending from "./Trending";

const Home = () => {
  const { popular } = Data_context();

  return (
    <>
      <Navbar DATA={() => {}} />
      {popular && <Top_movies />}
      <Trending />
      <Popular_movies />
      <Popular_tv />
      <Footer />
    </>
  );
};

export default Home;
