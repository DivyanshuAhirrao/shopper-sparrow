import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// trending-images
import img111 from "../media/trending/trending-1.jpg";
import img112 from "../media/trending/trending-2.jpg";
import img113 from "../media/trending/trending-3.jpg";
import img114 from "../media/trending/trending-4.jpg";
import img115 from "../media/trending/trending-5.jpg";
import img116 from "../media/trending/trending-6.jpg";
import img117 from "../media/trending/trending-7.jpg";
import img118 from "../media/trending/trending-8.jpg";

import label from '../media/tags/new-yr.jpg'


const TrendingSlider = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, opacity:"0.4", borderRadius:"10%", paddingTop:"1.5px", display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, opacity:"0.4", borderRadius:"10%", paddingTop:"1.5px", display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>
  };

  const trendingimgs = [
    img111,
    img112,
    img113,
    img114,
    img115,
    img116,
    img117,
    img118,
  ];

  return (
    <div id="trending-box" className=" h-[70vh] w-[100%]">
      {/* <h2 className=" uppercase tracking-widest py-8 pt-16 text-center text-[30px] font-bold pl-5  hover:text-fuchsia-300 transition-all duration-300 cursor-pointer  text-slate-500 ">
      <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span> Trending Fashion   <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span>
      </h2> */}
      <div className="w-[100%] flex justify-center items-center">
         <img id="labeled" src={label} alt="label" className="w-[90%]"/>
      </div>
      <article className="px-5 w-[98%] m-auto pl-8">
        <Slider {...settings}>
          {trendingimgs.map((pic, index) => {
            return (
              <div key={index}>
                <img
                  src={pic}
                  alt="poster"
                  className="h-[350px] w-[490px]  rounded-[5px] pl-12 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
            );
          })}
        </Slider>
        
      </article>
    </div>
  );
};

export default TrendingSlider;
