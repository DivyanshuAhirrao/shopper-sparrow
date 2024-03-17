import React, { useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Goback from "./Goback";
import { Link } from "react-router-dom";

const CartAsideLeft = ({ props }) => {
  const { items } = props;
  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <>
      <aside className="w-[740px]  bg-slate-100 flex flex-col items-center gap-2 p-4">
        <article className="sticky top-0 bg-slate-100 border-2 py-2 border-gray-200 w-[100%] rounded-[4px]">
          <div className="h-[80px]  bg-slate-100  border-gray-200 w-[100%] rounded-[4px] flex justify-between items-center px-4">
            <p className="font-bold text-gray-600 text-[14px]">
              Check delivery Time & Services{" "}
            </p>
            <button className="text-[13px] border-2 border-red-400 px-5 py-2 font-bold text-red-500 rounded-sm hover:bg-red-100 ">
              ENTER PIN CODE
            </button>
          </div>
          <div className="h-[120px]  border-gray-200 w-[100%] rounded-[4px]  px-4">
            <p className="pt-2 flex font-bold text-gray-600 text-[14px]">
              <BiSolidOffer className="text-[20px]" />
              <h6 className="pl-4">Available Offers</h6>
            </p>
            <p className="text-[13px] text-gray-500 pl-9 pt-4">
              7.5% Instant Discount on every spend with SPARROW Kotak Credit
              Card. TCA{" "}
            </p>
            <h1 className="text-red-500 font-bold flex pl-9 pt-4">
              Show More{" "}
              <MdKeyboardArrowDown className="text-[25px] text-red-400" />
            </h1>
          </div>
        </article>

        {items.length === 0 ? (
          <div className="scale-90 relative bottom-8 h-[400px]">
            <aside className="">
            <EmptyCart />
            </aside>
            <section className="flex flex-col gap-2">
            <p className="text-center font-bold text-neutral-700 text-[20px]">
              Hey, it Feels so Emptiness 🥱
            </p>
            <h1 className="text-center font-normal text-neutral-500 text-[15px]">
              {" "}
              There is nothing in your Cart ! Lets add some Items !!{" "}
            </h1>
            <Link to="/">
              <article className="mx-auto flex border-2 border-pink-400  w-[200px] h-[40px] rounded-md hover:scale-105 hover:bg-pink-100 duration-200 transition-all">
                <aside className="scale-110 h-[50px] w-[70px] relative bottom-2 ">
                  <Goback />
                </aside>
                <button className="w-[100%] h-[100%] flex items-center justify-center font-mono font-bold text-pink-600">
                  Lets Shop 🤩
                </button>
              </article>
            </Link>
            </section>
          </div>
        ) : (
          <div className=" border-2 border-gray-200 w-[100%] rounded-[4px] p-4 flex flex-col gap-2">
            {items.map((e) => {
              return <CartItem props={e} />;
            })}
          </div>
        )}
      </aside>
    </>
  );
};

export default CartAsideLeft;
