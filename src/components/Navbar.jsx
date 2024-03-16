import React, { useContext, useEffect, useState } from "react";
import ziara from "../media/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalDataApi } from "../context/GlobalData";
import { useSelector } from "react-redux";
import { CartItems } from "../redux/slice/cartSlice";

const Navbar = () => {
  let TOKEN = localStorage.getItem("TOKEN");

  let { inputVal, setInputVal, cartLength, setCartLength, data } =
    useContext(GlobalDataApi);

    let[name, setName] = useState("");

    const cartItemCount = useSelector(CartItems);

  // const str = JSON.stringify(data.name);
  // setName(str.slice(0, str.indexOf(" ")));

  console.log(name);

  return (
    <nav className="flex justify-between items-center w-[100%] h-[75px]">
      <aside className="px-4 w-[50%] h-[100%] bg-gray-100 text-[150%] text-[#c7ecd0] flex items-center">
        <img
          src={ziara}
          alt="logo"
          className="relative left-8 h-[45px] hover:pl-4 transition-all duration-[1s]"
        />
        <div className="pl-12 uppercase text-gray-600 text-[13.3px] font-bold text-center">
          <a
            href="#"
            className="px-5 py-2 h-[100%] hover:bg-yellow-200 hover:text-red-900 rounded-[6px] transition-all duration-300"
          >
            Clothing
          </a>
          <a
            href="#"
            className="px-5 py-2 hover:bg-yellow-200 hover:text-red-900 rounded-[6px] transition-all duration-300"
          >
            Electronics
          </a>
          <a
            href="#"
            className="px-5 py-2  hover:bg-yellow-200 hover:text-red-900 rounded-[6px] transition-all duration-300"
          >
            Beauty
          </a>
          <a
            href="#"
            className="px-5 py-2  hover:bg-yellow-200 hover:text-red-900 rounded-[6px] transition-all duration-300"
          >
            HOME & LIVING
          </a>
          <a
            href="#"
            className="px-5 py-2  hover:bg-yellow-200 hover:text-red-900 rounded-[6px] transition-all duration-300"
          >
            Studio <sup className="text-red-500 text-[10px]">NEW</sup>
          </a>
        </div>
      </aside>
      <aside className="bg-gray-100 border-r-2 border-gray-300 w-[32%] h-[100%] flex justify-center items-center">
        <form className="h-[100%] w-[100%] flex justify-center items-center pl-1">
          <input
            type="search"
            placeholder="search brands, products and more..."
            id="search-box"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            className=" w-[100%] h-[40px] rounded-[5px] pl-6 border-2 border-gray-600"
          />
        </form>
        <IoCameraOutline className="z-10 bg-white h-[30px] rounded-[5px] w-10 p-1 hover:bg-gray-200 relative left-[-80px] text-gray-500 transition-all duration-300" />
        <IoSearchSharp className="z-10 bg-white h-[30px] rounded-[5px] w-10 p-[5.8px] hover:bg-gray-200 relative left-[-77px] text-gray-500 transition-all duration-300" />
      </aside>
      <aside className="uppercase px-4 bg-gray-100 w-[18%] h-[100%] text-[#a1ace3] text-[20px] flex justify-around items-center">
        {TOKEN ? (
          <>
            <div className="pt-3">
              <article className="flex">
                <Link to="cart">
                  {" "}
                  <IoCartOutline className="border-b-2 border-gray-300 pb-2 text-[35px] text-[#0d3918] hover:border-green-700 hover:text-[40px] transition-all duration-300 hover:text-[#24843c]" />
                </Link>
                {cartItemCount > 0 ? (
                  <p className="relative right-2 bottom-[5px] px-[6px] bg-lime-400 rounded-[50%] text-[12px] h-[20px] text-black font-bold border-[1px] border-gray-800">
                    {cartItemCount}
                  </p>
                ) : (
                  ""
                )}
              </article>

              <h1 className="text-[9px] pt-[2px] font-bold text-center text-[#0d3918]">
                Cart
              </h1>
            </div>
            <div className="pt-3">
              <FaRegHeart className=" pb-2 pl-[7px] text-[32px] text-[#06210cba] hover:border-green-700 hover:text-[#f15f5f] hover:text-[36px] transition-all duration-300" />
              <h1 className=" border-t-2 border-gray-300 text-[9px] pt-[2px] font-bold text-center text-[#0d3918]">
                WishList
              </h1>
            </div>
            <div className="pt-3">
              <FaRegUserCircle className="border-b-2 border-gray-300 pb-2 text-[33px] text-[#05230cba] hover:border-green-700 hover:text-[37px] hover:text-[#24843c] transition-all duration-300" />
              <h1 className="text-[9px] pt-[2px] font-bold text-center text-[#0d3918] w-[50px] pr-4">
                {/* {data != null ? data.name : "Profile"} */}
                Profile
              </h1>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-[17px] border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 px-3 font-mono">
                LOGIN
              </button>
            </Link>
            /
            <Link to="/signup">
              <button className="hover:border-2 hover:border-green-500 hover:bg-white hover:text-gray-500 bg-gray-700 px-3 font-mono  text-white py-[1px] text-[18px]">
                SIGNUP
              </button>
            </Link>
          </>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
