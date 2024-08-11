import React, { useContext } from "react";
import LeftProductDetailsBox from "./LeftProductDetailsBox";
import RightProductDetailsBox from "./RightProductDetailsBox";
import DATA from "../../jsonfiles/products.json";
import { TbArrowBack } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { GlobalDataApi } from "../../context/GlobalData";
import BackNavigator from "../BackNavigator";
import Navbar from "../Navbar";

const ProductDetailsPage = () => {
  const { products } = useContext(GlobalDataApi);
  
  const currentURL =  window.location.href;
  let splits = currentURL.split("/");
  let id = Number(splits[4]);
   
  const product = products.find(item => item.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
      <main className="w-[100%] h-[100vh]">
        <Navbar />
        <BackNavigator />
        <section className=" h-[89%] flex justify-center items-center">
          <main className=" h-[100%] w-[80%] flex flex-wrap">
            <LeftProductDetailsBox props={product} />
            <RightProductDetailsBox props={product} />
          </main>
        </section>
      </main>
  );
};

export default ProductDetailsPage;
