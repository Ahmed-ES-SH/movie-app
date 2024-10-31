/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Variable_context } from "../../context/Variablecontext";

const Slider_vertical = (props) => {
  const { width } = Variable_context();

  const send_index = (index) => {
    props.send_index(index);
  };

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: width < 992 ? (width < 769 ? (width < 530 ? 2 : 3) : 5) : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: width < 992 ? false : true,
    verticalSwiping: width < 992 ? false : true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.data.map((movie, index) => (
          <div
            onClick={() => {
              send_index(index);
            }}
            key={movie.id}
            className=" duration-300  self-center p-2 overflow-hidden  cursor-pointer outline-none "
          >
            <img
              style={{
                width: width < 992 ? (width < 769 ? "100%" : "200px") : "100%",
                height: width < 992 ? "250px" : "68vh",
              }}
              className=" duration-300 p-1    rounded-md shadow-md shadow-main_blue"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="movie"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider_vertical;
