import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// images
import img1 from "./posters/login-p1.png";
import img2 from "./posters/login-p2.png";
import img3 from "./posters/login-p3.png";
import img4 from "./posters/login-p4.png";
import img5 from "./posters/login-p5.png";
import img6 from "./posters/login-p6.png";
import img7 from "./posters/login-p7.png";
import img8 from "./posters/login-p8.png";
import img9 from "./posters/login-p9.png";

const PosterSwipper = () => {
  return (
    <>
    <article id="login-poster-box" className="h-[100vh] w-[100%]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src={img1} alt="pic1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="pic2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="pic3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="pic4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="pic1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="pic2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="pic3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="pic4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="pic4" />
        </SwiperSlide>
      </Swiper>
      </article>
    </>
  );
};

export default PosterSwipper;
