import React, { useContext } from "react";
import ArrayProd from "./ArrayProd";

const ArrayAddProds = () => {
  
  let arr = [
    { names: "abc", age: 21 },
    { names: "mno", age: 28 },
    { names: "xyz", age: -21 },
  ];
  return (
    <div className="flex gap-2">
      Try It !!
      {arr.map((ele, ind) => {
        return (
          <div key={ind}>
            <ArrayProd props={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default ArrayAddProds;
