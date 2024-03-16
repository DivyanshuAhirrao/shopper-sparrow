import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { GlobalDataApi } from "../../context/GlobalData";
import { IoMdStar } from "react-icons/io";
// import ProductDetailsPage from "./productDetails/ProductDetailsPage";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItems, addToCart } from "../../redux/slice/cartSlice";
import { removeFromCart } from "../../redux/slice/cartSlice";

const CardMain = ({ e }) => {


  let { setProductId } = useContext(GlobalDataApi);

  const cartDetails = useSelector((state) => state.cart);
  const itemsArray = cartDetails.items;
  const dispatch = useDispatch();

  const addProduct = () => {
    const flag = false;
    console.log(e);
    console.log(itemsArray);
    cartDetails.items.map((item) => {
      if (item.id === e.id) {
        alert("Item already added");
        flag = true;
      } 
    });
    if(!flag){
      console.log("Adding More Item");
        dispatch(addToCart(e));
        console.log("I from Cartmain : ");
        console.log(e);
    }
  };

  const removeProduct = (id) => {
    const flag = false;
    itemsArray.map(item=>{
      if(item.id === e.id){
        flag = true;
      }
    })
    if(!flag){
    dispatch(removeFromCart(id));
    console.log(id);
    console.log(itemsArray);
    }else{
      alert("Add item to cart first !");
    }
  };

  let handleImgError = (e) => {
    e.target.src = "https://demofree.sirv.com/nope-not-here.jpg";
  };
  return (
    <div
      className="h-[24.5rem] w-[16rem] border-b-2 border-green-700 overflow-hidden"
      key={e.id}
    >
      <div className="h-[17rem] w-[16rem] overflow-hidden">
        <FaRegHeart className="absolute pl-2 pt-2 text-[33px] text-red-500 hover:text-red-500 z-10 hover:text-[36px] transition-all duration-300" />
        <div className="absolute pt-[246px] pl-1 z-10">
          <p className="px-2 py-[1px] bg-gray-500 rounded text-white text-[12px] flex">
            {e.rating.toFixed(1)}
            <IoMdStar className="text-orange-300 relative top-[3px] left-1" />{" "}
            <span className="px-2 relative bottom-[2px] text-gray-900">|</span>
            {e.stock}
          </p>
        </div>
        <Link to="/productDetails">
          <img
            src={e.images[0]}
            alt={e.title}
            onError={handleImgError}
            onClick={() => setProductId(e.id)}
            className="h-[17rem] w-[16rem] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300"
          />
        </Link>
      </div>
      <div className="w-[100%]  h-[7rem] transition-all duration-300 hover:cursor-pointer">
        <p className="pl-3 uppercase font-bold pt-2">
          {e.title.substring(0, 21)} {e.title.length > 21 ? "...." : ""}
        </p>
        <hr />

        <aside className="flex justify-between w-[100%] py-1">
          <p className="w-[100%] pl-2 flex justify-between">
            <div>
              <span className="font-bold hover:text-[17px] transition-all duration-300 pl-1">
                Rs.
                {Math.round(
                  e.price * 80 - e.price * (e.discountPercentage / 100) * 80
                )}
              </span>
              <br />
            </div>
            <div>
              <strike className="text-gray-400 pl-7 pt-1 text-[12px] relative right-[11.5px]">
                Rs.{e.price * 80}{" "}
              </strike>{" "}
              <span className="text-red-500 relative right-[5.5px] text-[14px] font-bold">
                ({Math.round(e.discountPercentage)}% OFF)
              </span>
            </div>
          </p>
        </aside>
        <article className="h-[50px]  flex gap-2">
          <button
            onClick={addProduct}
            className="w-[50%] h-[90%] bg-lime-200 hover:bg-lime-400 transition-all duration-300 hover:text-[20px] rounded-md pl-14"
          >
            <IoArrowRedoSharp />
          </button>
          <button
            onClick={()=>removeProduct(e)}
            className=" w-[50%] h-[90%] bg-red-200 hover:bg-red-400 transition-all duration-300 text-[18px] hover:text-[20px] rounded-md pl-14"
          >
            <MdDeleteSweep />
          </button>
        </article>
      </div>
    </div>
  );
};

export default CardMain;
