/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { Variable_context } from "../../context/Variablecontext";
import { Data_context } from "../../context/Moviescontext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Css/Populat_movies.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Cards from "./Cards";

const Popular_tv = () => {
  const { popular_tv } = Data_context();
  const { width } = Variable_context();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-next-arrow absolute right-2 -top-12 rounded-md bg-main_blue text-white "
        onClick={onClick}
      >
        <i className="fa-solid fa-caret-right px-2 py-1 "></i>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-prev-arrow absolute right-10 -top-12 rounded-md bg-main_blue text-white "
        onClick={onClick}
      >
        <i className="fa-solid fa-caret-left px-2 py-1 "></i>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width < 992 ? (width < 769 ? 2 : 3) : 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" p-2  w-full pt-12 ">
      <h1 className="px-12 py-2 ml-4 text-left bg-main_blue text-white rounded-md w-fit">
        Popular Tv
      </h1>
      <div className="w-full p-4  ">
        <Slider focusOnSelect {...settings}>
          {popular_tv.map((movie) => (
            <Cards type={true} key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular_tv;
