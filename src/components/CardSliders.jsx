// import React, { useRef, useState, useContext} from 'react';
// import { GlobalDataApi } from "../context/GlobalData";
// import { FaRegHeart } from "react-icons/fa";
// import { IoArrowRedoSharp } from "react-icons/io5";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // import required modules
// import { EffectCards } from 'swiper/modules';



// const CardSliders = ({ users }) => {
//   let { inputVal, setInputVal } = useContext(GlobalDataApi);

//   return (
//     <>
//     <section className="w-[100%] bg-[#cccccc1d] p-10 flex flex-wrap justify-center items-center gap-10 transition-all duration-300">
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
       
//       {users
//         .filter((val) => {
//           if (inputVal === "") {
//             console.log("if", val);
//             return val;
//           } else if (val.title.toLowerCase().includes(inputVal.toLowerCase())) {
//             console.log("else", val);
//             return val;
//           }
//         })
//         .map((e) => {
//           return (
//             <div
//               className="h-[25rem] w-[16rem] border-b-2 border-green-700 overflow-hidden"
//               key={e.id}
//             >
//               <div className="h-[18rem] w-[16rem] overflow-hidden">
//                 <FaRegHeart className="absolute pl-2 pt-2 text-[33px] text-[#2e2a2a67] hover:text-red-500 z-10 hover:text-[36px] transition-all duration-300" />
//                 <img
//                   src={e.images[0]}
//                   alt={e.category.name}
//                   className="h-[18rem] w-[16rem] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300"
//                 />
//               </div>
//               <div className="w-[100%]  h-[7rem] transition-all duration-300 hover:cursor-pointer">
//                 <p className="pl-3 uppercase font-bold pt-2">{e.title}</p>
//                 <hr />

//                 <aside className="flex justify-between">
//                 <p className="pl-3">
//                   Price :{" "}
//                   <span className="font-bold hover:text-[17px] transition-all duration-300">
//                     Rs.{e.price * 80 - e.price * 0.2 * 80}
//                   </span><br />
//                   <strike className="text-gray-400 pl-3 text-[12px] relative right-[11.5px]">
//                     Rs.{e.price * 80}{" "}
//                   </strike>{" "}
//                   <span className="text-red-500 relative right-[5.5px]"> (20% OFF) </span>
//                 </p>
//                 <button className="bg-lime-200 hover:bg-lime-400 transition-all duration-300 hover:text-[20px] rounded-md px-6"> <IoArrowRedoSharp /> </button>
//                 </aside>
                
//               </div>
//             </div>
//           );
//         })}

//       </Swiper>
      
//     </section>
//     </>
//   );
// };

// export default CardSliders;
