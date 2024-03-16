import React from "react";
const Price = () => {
  let prices = [10000, 20000, 45000, 36254, 12542, 85420, 210];
//   let objs = [ {name : 'divya' , age : 22}, {name: 'divyanshu', age: 23}, {name: 'xyz'}, {}  ]
  return (
    <>
      <section className="border-b-2 border-gray-400">
        {prices.map((e, ind) => {
          return (
            <div className="flex" key={ind}>
              <input type="checkbox" className="scale-[1.5]" />
              <p className="pl-3"> {e} </p>
            </div>
          );
        })}

      </section>
    </>
  );
};
export default Price;
