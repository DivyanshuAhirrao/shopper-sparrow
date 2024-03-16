import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DiscountFilter = () => {
  let discount = ["10% and above", "25% and above", "40% and above"];
  return (
    <>
      <hr className="border-b-[1px] border-gray-300 relative top-1" />
      <div className="flex justify-between flex-col">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold text-slate-600"
        >
        <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[13px] xl:text-[17px] font-bold text-slate-600">
          Discount
        </h1>
        </AccordionSummary>
        <AccordionDetails>
        {discount.map((brand, index) => {
          return (
            <div key={index} className="flex gap-2 text-gray-600 pl-2">
              <input type="checkbox" className="scale-[1.2]" />
              <span>{brand}</span>
            </div>
          );
        })}
         </AccordionDetails>
        </Accordion>
      </div>
      <hr className="border-b-[1px] border-gray-300 relative top-1" />
    </>
  );
};

export default DiscountFilter;
