import React, { Fragment, useContext, useEffect, useState } from "react";
import LeftProductDetailsBox from "./LeftProductDetailsBox";
import RightProductDetailsBox from "./RightProductDetailsBox";
import DATA from "../../jsonfiles/products.json";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GlobalDataApi } from "../../context/GlobalData";
import BackNavigator from "../BackNavigator";

const ProductDetailsPage = () => {
  let products = DATA.products;
  let { productId } = useContext(GlobalDataApi);
  let id = productId;
  console.log(id);

  return (
    <>
      <main className="w-[100%] h-[100vh]">
        <nav className="h-[11%] w-[100%] bg-gray-200"></nav>
        <BackNavigator />
        <section className=" h-[89%] flex justify-center items-center">
          <main className=" h-[100%] w-[80%] flex flex-wrap">
            <LeftProductDetailsBox props={products[5]} />
            <RightProductDetailsBox props={products[5]} />
          </main>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
