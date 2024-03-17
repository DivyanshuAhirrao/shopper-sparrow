import React, { useEffect } from "react";
import { BsTags } from "react-icons/bs";

const CartAsideRight = ({ props }) => {
  const [checked, setChecked] = React.useState(true);

  function handleClick() {
    setChecked(!checked);
  }

  const { items } = props;

  let sumWithoutDiscount = 0;
  let sumWithDiscount = 0;
  let difference = 0;
  let couponDiscount = 0;
  let platformFee = 0;

  if (items.length === 0) {
    sumWithoutDiscount = 0;
    sumWithDiscount = 0;
    difference = 0;
    couponDiscount = 0;
    platformFee = 0;
  } else {
    couponDiscount = 500.00;
    platformFee = 22.45;
    let total = 0;
    let tot = 0;
    items.map((e) => {
      total += e.price;
      tot += e.price - e.price * (Math.round(e.discountPercentage) / 100);
    });
    difference = ((total - tot) * 80).toFixed(2);
    sumWithoutDiscount = (total * 80).toFixed(2);
    sumWithDiscount = (tot * 80 + (platformFee - couponDiscount)).toFixed(2);
  }

  return (
    <>
      <aside className="w-[364.5px] h-[100vh] bg-slate-100 border-l-2 border-gray-800 flex flex-col gap-3 items-center p-4 sticky top-0">
        {/* Coupons Section */}
        <div className="h-[130px] w-[100%] border-b-2 border-gray-200 pt-1 flex flex-col justify-evenly">
          <h1 className="uppercase text-gray-600 font-bold ">Coupons</h1>
          <article className="w-[100%] flex">
            <aside className="w-[10%] text-[20px] pl-1 pt-[10px]">
              <BsTags />
            </aside>
            <aside className="w-[60%] text-gray-700 font-bold pl-2 pt-[5px]">
              Apply Coupons
            </aside>
            <aside className="w-[30%]">
              <button className="border-2 border-red-500 px-4 py-1 font-bold text-red-500 rounded-md hover:bg-red-100 ">
                APPLY
              </button>
            </aside>
          </article>
          <h5 className="font-mono text-center">
            {" "}
            Flat{" "}
            <span className="text-red-500 font-bold text-[18px]">₹200</span> OFF
            on First 2 Orders !!{" "}
          </h5>
        </div>

        {/* Donation Section */}
        <div className="h-[225px] w-[100%] border-b-2 border-gray-200 pt-1 flex flex-col">
          <h1 className="uppercase text-gray-800 font-bold text-[12px] py-2">
            {" "}
            Support Transformative social work in india{" "}
          </h1>
          <article className="w-[100%] flex pt-2">
            <form>
              <input
                type="checkbox"
                id="bug-four"
                name="bug-four"
                onChange={handleClick}
                className="scale-[1.5] absolute"
                value="Agree"
              />
            </form>
            <p className="pl-6 relative bottom-2">
              {" "}
              “Agree, if your aware and your generous donation helps us get that
              important work done.”{" "}
            </p>
          </article>
          <article className="flex gap-3 py-4">
            <button className="border-2 border-gray-300 rounded-[20px] px-6 py-1 font-mono text-[16px] hover:bg-red-100">
              ₹10
            </button>
            <button className="border-2 border-gray-300 rounded-[20px] px-6 py-1 font-mono text-[16px] hover:bg-red-100">
              ₹50
            </button>
            <button className="border-2 border-gray-300 rounded-[20px] px-6 py-1 font-mono text-[16px] hover:bg-red-100">
              ₹100
            </button>
          </article>
          <p className="text-red-500 font-bold hover:text-[17px] transition-all duration-200 cursor-pointer">
            {" "}
            Know More
          </p>
        </div>

        {/* Price Section */}
        <div className="h-[280px] w-[100%] border-b-2 border-gray-200 pt-1 flex flex-col">
          <h1 className="uppercase text-gray-600 font-bold text-[15px]">
            PRICE DETAILS (<span className="text-gray-900">1 Items </span>)
          </h1>
          <article className="px-2 h-[150px] flex flex-col justify-evenly">
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Total MRP</p>
              <h6>₹{sumWithoutDiscount}</h6>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Discount on MRP</p>
              <h6 className="text-green-500">-₹{difference}</h6>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Coupon Discount </p>
              <h6 className="text-green-500">-₹{couponDiscount}</h6>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>
                Platform Fee{" "}
                <span className="text-red-500 hover:text-red-600 cursor-pointer">
                  {" "}
                  Know More
                </span>{" "}
              </p>
              <h6>₹{platformFee}</h6>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>
                {" "}
                Shipping Fee{" "}
                <span className="text-red-500 hover:text-red-600 cursor-pointer">
                  {" "}
                  Know More
                </span>{" "}
              </p>
              <h6>
                {" "}
                <strike className="pr-1 text-[13px]">₹69</strike>{" "}
                <span className="text-green-500">FREE</span>{" "}
              </h6>
            </div>
          </article>

          <article className="text-[17px] h-[55px] flex justify-center items-center bg-blue-50 text-gray-700 font-bold flex justify-between px-2 border-t-2 border-gray-300">
            <p>Total Amount</p>
            <h6>₹{sumWithDiscount}/-</h6>
          </article>

          <article className="px-2">
            <button className="w-[100%] bg-pink-500 py-2 text-white font-bold tracking-wide rounded-sm hover:text-[18px] transition-all duration-300 cursor-pointer">
              PLACE ORDER
            </button>
          </article>
        </div>
      </aside>
    </>
  );
};

export default CartAsideRight;
