import React, { Fragment, useContext, useEffect, useState } from "react";
import LeftProductDetailsBox from "./LeftProductDetailsBox";
import RightProductDetailsBox from "./RightProductDetailsBox";
import DATA from "../../jsonfiles/products.json";
import { TbArrowBack } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { GlobalDataApi } from "../../context/GlobalData";
import BackNavigator from "../BackNavigator";

const ProductDetailsPage = () => {

  let products = DATA.products;
  const currentURL =  window.location.href;
  let splits = currentURL.split("/");
  let id = splits[4]-1; 

  return (
    <>
      <main className="w-[100%] h-[100vh]">
        <nav className="h-[11%] w-[100%] bg-gray-200"></nav>
        <BackNavigator />
        <section className=" h-[89%] flex justify-center items-center">
          <main className=" h-[100%] w-[80%] flex flex-wrap">
            <LeftProductDetailsBox props={products[id]} />
            <RightProductDetailsBox props={products[id]} />
          </main>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
