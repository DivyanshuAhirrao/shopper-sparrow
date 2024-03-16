import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//Images :
import img11 from "../media/swiper/l1.jpg";
import img12 from "../media/swiper/l2.jpg";
import img13 from "../media/swiper/l3.jpg";
import img14 from "../media/swiper/l4.jpg";
import img15 from "../media/swiper/l5.jpg";
import img16 from "../media/swiper/l6.jpg";


// import img11 from "../media/new-media/corousel/img1.jpg";
// import img12 from "../media/new-media/corousel/img2.png";
// import img16 from "../media/new-media/corousel/img4.jpg";
// import img13 from "../media/new-media/corousel/img5.jpg";
// import img14 from "../media/new-media/corousel/img8.jpg";
// import img15 from "../media/new-media/corousel/img9.jpg";

const PosterSwipper = () => {
  const celebsimgs = [img11, img12, img13, img14, img15, img16];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt-1 scale-[99%]"
      >
        {celebsimgs.map((i, el) => {
          return (
            <SwiperSlide key={el} style={{width:'700px'}}>
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

export default PosterSwipper;
