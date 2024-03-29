import React, { Fragment, useContext } from "react";
import { GlobalDataApi } from "../context/GlobalData";
import Card from "./Card";
import CardMain from "./productDetails/CardMain";

const Cards = ({ users }) => {
  let { inputVal } = useContext(GlobalDataApi);
  ;

  return (
    <section className="w-[100%] bg-[#cccccc1d] p-10 flex flex-wrap justify-center items-center gap-10 transition-all duration-300">
      {users
        .filter((val) => {
          if (inputVal == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(inputVal.toString().toLowerCase())  ||
            val.category.toLowerCase().includes(inputVal.toString().toLowerCase()) ||
            val.brand.toLowerCase().includes(inputVal.toString().toLowerCase()) ||
            val.description.toLowerCase().includes(inputVal.toString().toLowerCase()) ||
            val.price.toString().includes(inputVal.toString())
          ) {
            return val;
          }
        })
        .map((e) => {
          return (
            <Fragment key={e.id}>
              <CardMain e={e} />
            </Fragment>
          );
        })}
    </section>
  );
};

export default Cards;
