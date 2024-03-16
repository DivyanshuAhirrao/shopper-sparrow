import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// global-images
import img1 from "../media/global/puma-adi.jpg";
import img2 from "../media/global/avasa.jpg";
import img3 from "../media/global/ax.jpg";
import img4 from "../media/global/dnmx.jpg";
import img5 from "../media/global/gap.jpg";
import img6 from "../media/global/performx.jpg";
import img7 from "../media/global/puma-adi.jpg";

import label from "../media/tags/top-fashion.jpg";


const GlobalBrands = () => {

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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>
  };

  const globalimgs = [img1, img2, img3, img4, img5, img6, img7];
  
  return (
    <section className="flex flex-col gap-1">
    <div id="global-box" className="h-[100vh] w-[100%]">
      <h2 className="uppercase tracking-widest py-12 text-[30px] font-bold text-center hover:text-fuchsia-300 transition-all duration-300 cursor-pointer  text-slate-500">
      <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span> Global Brands  <span className="text-slate-300 text-[20px] relative bottom-1"> --------- </span>
      </h2>
      <div className="w-[100%] flex justify-center items-center">
         <img id="labeled" src={label} alt="label" className="w-[90%]"/>
      </div>

      <article className=" px-5 w-[98%] m-auto pl-8 pr-8">
        <Slider {...settings}>
          {globalimgs.map((pic, index) => {
            return (
              <div key={index}  >
                <img
                  src={pic}
                  alt="poster"
                  className="h-[400px]  pl-12 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
            );
          })}
        </Slider>
      </article>
    </div>

 


    </section>
  );
};

export default GlobalBrands;
