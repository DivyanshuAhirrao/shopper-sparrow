import React from "react";
import { BsTags } from "react-icons/bs";
import CartAsideRight from "./CartAsideRight";
import CartAsideLeft from "./CartAsideLeft";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";

const CartModal = () => {
  return (
    <section className="flex justify-center items-center">
      <main className=" flex flex-wrap">
        <CartAsideLeft />
        <CartAsideRight />
      </main>
      <article className="absolute right-4 top-4">
        <Link to="/">
          {" "}
          <TbArrowBack className="text-[30px] bg-red-200 h-[38px] w-[38px] p-1 hover:scale-[1.1] transition-all duration-300 cursor-pointer" />
        </Link>
      </article>
    </section>
  );
};

export default CartModal;
