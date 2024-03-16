import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

// celebs-images
import img11 from "../media/swiper/s1.jpg";
import img12 from "../media/swiper/s2.jpg";
import img13 from "../media/swiper/s3.jpg";
import img14 from "../media/swiper/s4.jpg";
import img15 from "../media/swiper/s5.jpg";
import img16 from "../media/swiper/s6.jpg";
import img17 from "../media/swiper/s7.jpg";
import img18 from "../media/swiper/s8.jpg";
import img19 from "../media/swiper/s9.jpg";
import img10 from "../media/swiper/s10.jpg";

const Swipper = () => {
  const celebsimgs = [
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img10,
  ];
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper h-[400px] w-[400px]"
      >
        {celebsimgs.map((i, el) => {
          return (
            <SwiperSlide className="pt-2" key={el}>
              <img
                src={i}
                alt="poster"
                //   className="h-[300px] rounded-[5px] pl-4 hover:scale-[1.1] transition-all duration-500"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Swipper;
