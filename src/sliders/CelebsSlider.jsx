import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// celebs-images
import img11 from "../media/celebrity/arjun-us.jpg";
import img12 from "../media/celebrity/deepika-levis.jpg";
import img13 from "../media/celebrity/faizal-dg.jpg";
import img14 from "../media/celebrity/kartik-superdry.jpg";
import img15 from "../media/celebrity/kohli-puma.jpg";
import img16 from "../media/celebrity/ranveer-jj.jpg";
import img17 from "../media/celebrity/rohit-adidas.jpg";
import img18 from "../media/celebrity/surya-ig.jpg";

import label from "../media/tags/top-pick.jpg";

const CelebsSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          opacity: "0.4",
          borderRadius: "10%",
          paddingTop: "1.5px",
          display: "block",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          opacity: "0.4",
          borderRadius: "10%",
          paddingTop: "1.5px",
          display: "block",
          background: "green",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const celebsimgs = [img11, img12, img13, img14, img15, img16, img17, img18];

  return (
    <div id="celeb-box" className=" h-[80vh] w-[100%] border-b-2 border-white">
      {/* <h2 className="uppercase tracking-widest py-8 pt-16 text-center text-[30px] font-bold  hover:text-fuchsia-300 transition-all duration-300 cursor-pointer  text-slate-500">
       <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span> Celebs Choice <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span>
      </h2> */}
      <div className="w-[100%] flex justify-center items-center">
        <img id="labeled" src={label} alt="label" className="w-[90%]" />
      </div>
      <article className="px-1 w-[98%] m-auto pl-8 pr-8">
        <Slider {...settings}>
          {celebsimgs.map((pic, index) => {
            return (
              <div key={index}>
                <img
                  src={pic}
                  alt="poster"
                  className="h-[350px] rounded-[5px] pl-4 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
            );
          })}
        </Slider>
      </article>
    </div>
  );
};

export default CelebsSlider;
