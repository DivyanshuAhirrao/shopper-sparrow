import React from "react";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import DiscountFilter from "./DiscountFilter";

const FilterWrapper = () => {
  return (
    <div>
      <BrandFilter />
      <ColorFilter />
      <PriceFilter />
      <DiscountFilter />
    </div>
  );
};

export default FilterWrapper;
