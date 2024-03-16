import React, { useContext } from "react";
import { GlobalDataApi } from "../context/GlobalData";

const ArrayProd = ({ props }) => {
  console.log(props);
  let { cartArray } = useContext(GlobalDataApi);
  let handleAdder = (e) => {
    cartArray.push(props);
    console.log(cartArray);
  };
  let handleRemover = (e) => {
    if(cartArray.length > 0){
    cartArray.pop(props);
    console.log(cartArray);
    }
  };


  return (
    <div className="h-[200px] w-[150px] bg-red-300">
      <h1>{props.age}</h1>
      <button onClick={handleAdder} className="p-2 bg-lime-300">Add</button>
      <button onClick={handleRemover} className="p-2 bg-blue-300">Remove</button>
    </div>
  );
};

export default ArrayProd;
