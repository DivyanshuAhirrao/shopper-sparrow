import React from "react";
import Filters from "./Filters";
import Cards from "./Cards";

const NewPractice = () => {
  return (
    <div className=" w-[100%] flex">
      <aside className="w-[20%] h-[100vh] bg-gray-100 px-4 sticky top-0">
        <Filters />
      </aside>
      <aside className="w-[80%] bg-lime-300 ">
        <Cards />
      </aside>
    </div>
  );
};

export default NewPractice;
