import React, { useContext,useState } from "react";
import img from "../media/img.png";
import coupon from "../media/coupon.png";
import { GlobalDataApi } from "../context/GlobalData";
import GlobalBrands from "../sliders/GlobalBrands";
import CelebsSlider from "../sliders/CelebsSlider";
import TrendingSlider from "../sliders/TrendingSlider";
import Cards from "./Cards";
import Swipper from "../sliders/Swipper";
import PosterSwipper from "../sliders/PosterSwipper";
import Payments from "./Payments";
import FilterWrapper from "./filters/FilterWrapper";
import PRODUCTS from '../jsonfiles/products.json'


const UI = () => {
  let { inputVal, users } = useContext(GlobalDataApi);
  return (
    <>
      {inputVal == "" ? (
        <main>
          <figure className="w-[100%] flex gap-[0.2%] justify-arround">
            <img src={img} alt="sample" className="w-[79.8%]"/>
            <img
              src={coupon}
              // id="discount-coupon"
              alt="sample"
              className="w-[20%] "
            />
          </figure>

          <section className="flex w-[100%] h-[320px]">
            <div className="h-[100%] w-[30%]">
              <Swipper />
            </div>
            <div className="h-[100%] w-[70%] flex justify-center items-center">
              <PosterSwipper />
            </div>
          </section>


          <main id="carousel-container">
            <section
              id="payment-box"
              className="pt-5 relative top-20 h-[100px] "
            >
              <marquee behavior="alternate" direction="" scrollamount="10">
                <Payments />
              </marquee>
            </section>

            <section id="carousel-box">
              <GlobalBrands />
              <CelebsSlider />
              <TrendingSlider />
            </section>
          </main>

          <article className="flex">
            <aside className="sticky top-0  lg:w-[18%] sm:w-[33%] bg-[#cccccc4e] border-r-2 border-green-500 flex flex-col h-[100vh] overflow-y-scroll">
              <FilterWrapper />
            </aside>
            <aside className=" lg:w-[82%] sm:w-[67%]">
              <Cards users={PRODUCTS.products} />
            </aside>
          </article>
        </main>
      ) : (
        <article className="flex">
          <aside className="sticky top-0  lg:w-[18%] sm:w-[33%] bg-[#cccccc4e] border-r-2 border-green-500 flex flex-col h-[100vh] overflow-y-scroll">
            <FilterWrapper />
          </aside>
          <aside className=" lg:w-[82%] sm:w-[67%]">
            <Cards users={PRODUCTS.products} />
          </aside>
        </article>
      )}
    </>
  );
};

export default UI;
