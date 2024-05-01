import React from "react";
import logo from "../media/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import img1 from '../media/tags/gp.jpg'
import img2 from '../media/tags/ap.jpg'
import { useNavigate } from "react-router-dom";

const Footer = () => {

  let TOKEN = localStorage.getItem("TOKEN");

  let navigator = useNavigate();

  let help = [
    "Track Your Order",
    "FAQ",
    "Returns",
    "Cancellations",
    "payments",
    "Customer Care",
  ];
  let shopby = [
    "Men",
    "Women",
    "Kids",
    "Stores",
    "New Arrivals",
    "Collections",
  ];
  let sparrow = [
    "Who we Are",
    "Join Our Team",
    "T&C",
    "Fees & Payments",
    "Returns & Refunds",
    "Promotions",
  ];
  let useful = [
    "Blog",
    "Carrers",
    "Site Map",
    "Gift Cards",
    "Corporate Information",
    "Our Partners",
  ];
  return (
    <>
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto flex flex-col justify-center items-center">
          {/* <!-- Logo --> */}
          <main className="flex w-[80%]">
          <article className="w-[45%]"></article>
          <article className="w-[51%] flex justify-between">
          <div class="mb-4 lg:mb-0 pb-4 bg-gray-500 pt-5 px-3 rounded-[5px] relative top-[-16px] ">
            <img src={logo} alt="" height={40} width={40} className="hover:scale-[1.3] transition-all duration-300"/>
          </div>
          <aside className="flex w-[50%] h-[45px]">
             <input type="text" className=" rounded-lg w-[100%] h-[100%] bg-gray-500 text-center placeholder:text-[#e3e3e382] " placeholder="TRACK YOU ORDER" />
             <IoLocationOutline className="text-[39px] hover:scale-[1.2] transition-all duration-300 hover:font-bold hover:text-lime-300 absolute pt-1 pl-4"/>
          </aside>
          </article>
          </main>
          <hr className="bg-lime-100 border-1 opacity-25 w-[100%] " />
          {/* <!-- Navigation Links --> */}
          <div class="flex flex-wrap justify-around pt-4 w-[80%]">
            <aside>
              <h1 className="text-[17px] font-bold pb-2 text-lime-100">Sparrow</h1>
              <article>
                <ul>
                  {sparrow.map((content, ind) => {
                    return <h6 key={ind} className="text-[13px] cursor-pointer hover:scale-[1.1] transition-all duration-300">{content}</h6>;
                  })}
                </ul>
              </article>
            </aside>
            <aside className="pl-6">
              <h1 className="text-[17px] font-bold pb-2 text-lime-100">Shop by</h1>
              <article>
                <ul>
                  {shopby.map((content, ind) => {
                    return <h6 key={ind} className="text-[13px] cursor-pointer hover:scale-[1.1] transition-all duration-300">{content}</h6>;
                  })}
                </ul>
              </article>
            </aside>
            <aside className="pl-6">
              <h1 className="text-[17px] font-bold pb-2 text-lime-100">Useful</h1>
              <article>
                <ul>
                  {useful.map((content, ind) => {
                    return <h6 key={ind} className="text-[13px] cursor-pointer hover:scale-[1.1] transition-all duration-300">{content}</h6>;
                  })}
                </ul>
              </article>
            </aside>
            <aside className="pl-6">
              <h1 className="text-[17px] font-bold pb-2 text-lime-100">Help</h1>
              <article>
                <ul>
                  {help.map((content, ind) => {
                    return <h6 key={ind} className="text-[13px] cursor-pointer hover:scale-[1.1] transition-all duration-300">{content}</h6>;
                  })}
                </ul>
              </article>
            </aside>
            <aside className="pl-6">
              <h1 className="text-[17px] font-bold pb-2 text-lime-100">
                Connect with us Now
              </h1>
              <article className="flex flex-col">
                <div className="flex gap-4 text-[20px] pt-1">
                <FaFacebook className="hover:scale-[1.2] hover:text-blue-500 transition-all duration-300 cursor-pointer" />
                <FaInstagram className="hover:scale-[1.2] hover:text-pink-600 transition-all duration-300 cursor-pointer" />
                <RiYoutubeLine className="hover:scale-[1.2] hover:text-red-500 transition-all duration-300 cursor-pointer"/>
                <MdOutlineWhatsapp className="hover:scale-[1.2] hover:text-green-500 transition-all duration-300 cursor-pointer"/>
                <RiTwitterXFill className="hover:scale-[1.2] hover:text-orange-300 transition-all duration-300 cursor-pointer"/>
                </div>

                <div className="block pt-5 text-[15px] font-bold">
                  Download the Mobile Experince
                  <div className="flex gap-2 pt-4">
                    <img src={img1} alt="" className="h-[35px] hover:scale-[1.1] transition-all duration-300 cursor-pointer" />
                    <img src={img2} alt="" className="h-[35px] hover:scale-[1.1] transition-all duration-300 cursor-pointer" />
                  </div>
                </div>

              </article>
            </aside>
          </div>
        </div>
        <article className="w-[100%] text-center    text-gray-400 text-[11.2px]">
          <p className="relative top-4 bg-[#cccccc17] py-2 tracking-widest">©Copyrights Resereved by Divyanshu Ahirrao & Co. @2024, GST - 797728441144</p>
        </article>
      </footer>
    </>
  );
};

export default Footer;
