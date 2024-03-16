import React from "react";
import { IoCart } from "react-icons/io5";

const RightProductDetailsBox = ({ props }) => {
  let {
    brand,
    title,
    description,
    price,
    discountPercentage,
    category,
    stock,
    rating,
  } = props;
  return (
    <article className="w-[50%] h-[100%] ">
      <aside className="p-4 w-[80%] h-[100%] flex flex-col gap-2">
        <h2 className="font-bold text-[21px] text-red-700">
          {" "}
          <span className="text-gray-400 font-semibold text-[16px]">
            Brand :
          </span>{" "}
          {brand}{" "}
        </h2>
        <h1 className="font-bold text-[27px] text-gray-600">
          {" "}
          <span className="text-gray-400 font-semibold text-[16px]">
            Name :
          </span>{" "}
          {title}{" "}
        </h1>
        <h2 className="font-bold text-[21px] text-red-700">
          {" "}
          <span className="text-gray-400 font-semibold text-[16px]">
            Category :
          </span>
          {category}{" "}
        </h2>
        <h1 className="font-bold text-[27px] text-gray-600 flex"> {} </h1>
        <p className="font-semibold text-[14px] text-gray-600 text-justify">
          <span className="text-gray-400 font-semibold text-[16px]">
            Description :
          </span>
          {description}
        </p>

        <h4 className="font-bold text-[21px] text-gray-600">
        <span className="p-1 bg-red-200 text-[12px] relative bottom-[3px] rounded-md ">
            -{Math.round(discountPercentage)}% OFF
          </span>
          Rs.{Math.round(price * 82 - price * 82 * (discountPercentage / 100))}
          
        </h4>
        <p className="text-gray-400 text-[14px] relative bottom-3 pl-16">
          <strike>{Math.round(price * 82)}</strike>
        </p>
        <h1 className="font-bold text-[27px] text-gray-600 flex">
          <span className="text-gray-400 font-semibold text-[16px]">
            ratings : 
          </span>
          <p className="relative bottom-2 left-2">{rating.toFixed(1)}</p>
        </h1>
        <h1 className="font-bold text-[27px] text-gray-600 flex">
          <span className="text-gray-400 font-semibold text-[16px]">
            ratings : 
          </span>
          <p className="relative bottom-2 left-2">{rating.toFixed(1)}</p>
        </h1>

        <div className="flex gap-6">
          <aside className="bg-gray-400 px-4 rounded-md flex gap-3">
            <button className="text-orange-300">-</button>0
            <button className="text-orange-300">+</button>
          </aside>
          <aside className="flex bg-orange-500 px-12 py-1 rounded-md text-white font-bold gap-2">
            <IoCart className="relative top-[3px] text-white text-[18px]" /> Add
            to cart
          </aside>
        </div>
      </aside>
    </article>
  );
};

export default RightProductDetailsBox;
