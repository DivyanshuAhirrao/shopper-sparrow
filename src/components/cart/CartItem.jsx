import React, { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slice/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ props }) => {
  const [state, setState] = useState(1);

  function increment() {
    setState((prev) => prev + 1);
  }
  function decrement() {
    if (state < 2) {
      toast.error("Quantity Cannot be nagative");
    } 
    else{
      setState(state-1);
    }
  }

  const {id} = props;
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart);

  function removeProduct(ind) {
    // const index = cartDetails.items.findIndex((item) => item.id === ind);
    // if (index !== -1) {
    dispatch(removeFromCart(ind));
    // }
  }
  return (
    <section className="h-[180px] bg-slate-200 border-2 border-gray-200 w-[100%] flex">
      <img
        src={props.images[0]}
        alt=""
        height="100%"
        className="border-2 hover:brightness-110 w-[25%]"
      />
      <div className="h-[100%] w-[78%] pl-4 py-1 flex flex-col justify-evenly">
        <h1 className="text-[13px] font-bold text-gray-600">{props.title}</h1>
        <p className="text-[12px]  text-gray-400">{props.category}</p>
        <p className="text-[12px]  text-gray-400">
          Price :{" "}
          <span className="font-bold text-gray-600 text-[14px]">
            {(
              (props.price -
                props.price * (Math.round(props.discountPercentage) / 100)) *
              80
            ).toFixed(2)}
          </span>{" "}
          <strike>{props.price * 80}</strike>{" "}
          <span className="text-red-500 font-bold">
            {Math.round(props.discountPercentage)} %OFF
          </span>
        </p>
        <p className="text-[12px]  text-gray-400">Company : {props.brand}</p>
        <article className="flex gap-12">
          <aside className="flex gap-2">
            <h4 className="text-[13px] font-bold text-gray-600 pt-1">QTY :</h4>
            <button
              onClick={decrement}
              className="bg-blue-200 p-1 px-2 rounded-md font-bold text-gray-600 text-[13.5px]"
            >
              -
            </button>
            <p>{state}</p>
            <button
              onClick={increment}
              className="bg-blue-200 p-1 px-2 rounded-md font-bold text-gray-600 text-[13.5px]"
            >
              +
            </button>
          </aside>
        </article>
        <p className="text-[12px]  text-gray-400 flex">
          <GiReturnArrow className="text-gray-600" />{" "}
          <h2>
            <span className="font-bold text-gray-700">14 Days </span> Return
            Available
          </h2>
        </p>
      </div>
      <IoMdClose
        className="pr-1 pt-1 text-[22px] hover:text-[25px] cursor-pointer"
        onClick={() => removeProduct(id)}
      />
    </section>
  );
};

export default CartItem;
