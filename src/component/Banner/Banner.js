// Banner.js
import React from 'react';
import Slider from 'react-slick';
import './Banner.css'; // Custom CSS for styling the banner
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,  // Enable dots navigation
    infinite: true,  // Infinite loop
    speed: 400,  // Transition speed
    slidesToShow: 1,  // One slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,  // Automatically transition between slides
    autoplaySpeed: 3000,  // Transition speed between slides
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div>
          <img
            src="images/shoesbanner.jpg"
            alt="Banner 1"
            className="banner-img"
          />
        </div>
        <div>
          <img
            src="images/grocerybanner.jpg"
            alt="Banner 2"
            className="banner-img"
          />
        </div>
        <div>
          <img
            src="images/makeupbanner.jpg"
            alt="Banner 3"
            className="banner-img"
          />
        </div>
        <div>
          <img
            src="images/vegetablebanner.jpg"
            alt="Banner 4"
            className="banner-img"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
