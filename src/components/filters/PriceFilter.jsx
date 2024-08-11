import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GlobalDataApi } from "../../context/GlobalData";
import DATA from "../../jsonfiles/products.json";

const PriceFilter = () => {
  let pric = [
    { p1: 100, p2: 500 },
    { p1: 500, p2: 2000 },
    { p1: 2000, p2: 5000 },
    { p1: 5000, p2: 15000 },
    { p1: 15000, p2: 50000 },
  ];
  let data = [100, 500, 1000, 2500, 5000];
  let maxPrice = 0;
  DATA.products.map((el) => {
    if (el.price > maxPrice) {
      maxPrice = el.price;
    }
  });

  let displayer = (e) => {
    DATA.products.map((el) => {

    if (e.target.value == price.length - 1) {
      for (let i = 0; i < pric.length; i++) {
        for (let j = pric[i].p1; j <= maxPrice; j++) {
          if (j === e.price * 80) {
            setInputVal(e.price);
          }
        }
      }
    } else {
      for (let i = 0; i < pric.length; i++) {
        for (let j = pric[i].p1; j <= pric[i].p2; j++) {
          if (j === e.price * 80) {
            setInputVal(e.price);
          }
        }
        for (
          let i = data[e.target.value];
          i <= data[e.target.value] + 500;
          i++
        ) {
          
        }
      }
    }
  })
  };

  let { inputVal, setInputVal } = React.useContext(GlobalDataApi);

  let handleCheckBox = (e) => {
    let val = e.target.value;
  };

  let price = [
    "Rs. 100 -500",
    "Rs. 500 -1000",
    "Rs. 1000-2500",
    "Rs. 2500-5000",
    "Rs. 5000 & above",
  ];

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
              Price
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            {price.map((brand, index) => {
              return (
                <div key={index} className="flex gap-2 text-gray-600 pl-2">
                  <input
                    type="checkbox"
                    className="scale-[1.2]"
                    onChange={displayer}
                    value={index}
                  />
                  <span>{brand}</span>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default PriceFilter;
