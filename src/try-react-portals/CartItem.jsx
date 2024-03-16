import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const CartItem = () => {
  return (
    <section className="h-[180px] border-2 border-gray-200 w-[100%] flex">
      
      <img
        src="https://static.zara.net/photos///2023/I/0/2/p/3427/320/800/2/w/315/3427320800_6_1_1.jpg?ts=1689257032458"
        alt=""
        height="100%"
        className="border-2 hover:brightness-110 w-[22%]"
      />
      <div className="h-[100%] w-[78%] pl-4 py-1 flex flex-col justify-evenly">
        <h1 className="text-[13px] font-bold text-gray-600">
          FAUX LEATHER JACKET
        </h1>
        <p className="text-[12px]  text-gray-400">
          Mens Leather Jacket, Premium Collection
        </p>
        <p className="text-[12px]  text-gray-400">
          Price : <span className="font-bold text-gray-600 text-[14px]"> ₹6499.25 </span> <strike>₹7800.65</strike> <span className="text-red-500 font-bold">20% OFF</span>
        </p>
        <p className="text-[12px]  text-gray-400">Company : ZARA</p>
        <article className="flex gap-12">
          <button className="bg-gray-300 p-1 px-2 rounded-md font-bold text-gray-600 text-[13.5px]">
            Size : 42
          </button>

          <aside className="flex gap-2">
            {" "}
            <h4 className="text-[13px] font-bold text-gray-600 pt-1">
              QTY :
            </h4>{" "}
            <button className="bg-blue-200 p-1 px-2 rounded-md font-bold text-gray-600 text-[13.5px]">
              -{" "}
            </button>{" "}
               <p>1</p>
            <button className="bg-blue-200 p-1 px-2 rounded-md font-bold text-gray-600 text-[13.5px]">
              +{" "}
            </button>{" "}
          </aside>
        </article>
        <p className="text-[12px]  text-gray-400 flex">
          <GiReturnArrow className="text-gray-600"/> <h2> <span className="font-bold text-gray-700">14 Days </span> Return Available </h2>
        </p>
      </div>
      <IoMdClose className="pr-1 pt-1 text-[22px] hover:text-[25px] cursor-pointer"/>
    </section>
  );
};

export default CartItem;
