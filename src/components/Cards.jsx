import React, { Fragment, useContext } from "react";
import { GlobalDataApi } from "../context/GlobalData";
import Card from "./Card";
import CardMain from "./productDetails/CardMain";
import noFiles from "../jsonfiles/noFiles.json";
import Lottie from "lottie-react";

const Cards = ({ users }) => {
  let { inputVal } = useContext(GlobalDataApi);
  const searchTerm = inputVal.toLowerCase();
  const filteredUsers = users.filter((user) => {
    const { title, category, brand, description, price } = user;
    return (
      !inputVal ||
      title?.toLowerCase().includes(searchTerm) ||
      category?.toLowerCase().includes(searchTerm) ||
      brand?.toLowerCase().includes(searchTerm) ||
      description?.toLowerCase().includes(searchTerm) ||
      price?.toString().includes(searchTerm)
    );
  });

  return (
    <section className="w-[100%] bg-[#cccccc1d] p-10 flex flex-wrap justify-center items-center gap-10 transition-all duration-300">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((e) => (
          <Fragment key={e.id}>
            <CardMain e={e} />
          </Fragment>
        ))
      ) : (
        <div className="scale-110 h-full w-[30vw] relative bottom-2 ">
          <Lottie animationData={noFiles} height={10} width={10} />
        </div>
      )}
    </section>
  );
};

export default Cards;
