import React from "react";

const Brands = () => {

  let brands = ["Louis Vuitton", "Benetton", "Channel", "Raymond","Puma", "Nike"];

  return (
    <>
    <section className="border-b-2 border-gray-400">
      {
       brands.map((e,ind) => {
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

export default Brands;
