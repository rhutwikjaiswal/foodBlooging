import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticlesData from "./ArticlesData";

const Articles = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  };
  return (
    <div className="container3">
      <div className="latestArticles">Latest Articles</div>
      <Slider {...settings}>
        {ArticlesData.map((item) => (
          <div className="card"> 
            <div className="cardTop">
              <img src={item.image} alt="imgg" />
              <h2>{item.name}</h2>
              <h3>{item.discription}</h3>
            </div>
            <div className="cardBottom">
              <button>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Articles;
