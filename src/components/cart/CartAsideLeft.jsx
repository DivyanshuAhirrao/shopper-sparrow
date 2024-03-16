import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import CartItem from "./CartItem";

const CartAsideLeft = () => {
  return (
    <>
      <aside className="w-[740px]  bg-slate-100 flex flex-col items-center gap-2 p-4">
        <div className="h-[80px] border-2 border-gray-200 w-[100%] rounded-[4px] flex justify-between items-center px-4">
          <p className="font-bold text-gray-600 text-[14px]">
            Check delivery Time & Services{" "}
          </p>
          <button className="text-[13px] border-2 border-red-400 px-5 py-2 font-bold text-red-500 rounded-sm hover:bg-red-100 ">
            ENTER PIN CODE
          </button>
        </div>
        <div className="h-[120px] border-2 border-gray-200 w-[100%] rounded-[4px]  px-4">
          <p className="pt-2 flex font-bold text-gray-600 text-[14px]">
            <BiSolidOffer className="text-[20px]" />
            <h6 className="pl-4">Available Offers</h6>
          </p>
          <p className="text-[13px] text-gray-500 pl-9 pt-4">
            7.5% Instant Discount on every spend with SPARROW Kotak Credit Card.
            TCA{" "}
          </p>
          <h1 className="text-red-500 font-bold flex pl-9 pt-4">
            Show More{" "}
            <MdKeyboardArrowDown className="text-[25px] text-red-400" />
          </h1>
        </div>

        <div className=" border-2 border-gray-200 w-[100%] rounded-[4px] p-4 flex flex-col gap-2">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
      </aside>
    </>
  );
};

export default CartAsideLeft;
