import React from "react";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";

const BackNavigator = () => {
  return (
    <article className="absolute right-4 top-24">
      <Link to="/">
        <TbArrowBack className=" text-[30px] bg-red-200 h-[38px] w-[38px] p-1 hover:scale-[1.1] transition-all duration-300 cursor-pointer" />
      </Link>
    </article>
  );
};

export default BackNavigator;
