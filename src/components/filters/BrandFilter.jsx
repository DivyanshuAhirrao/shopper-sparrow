import { TbFilterBolt } from "react-icons/tb";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GlobalDataApi } from "../../context/GlobalData";


const BrandFilter = () => {

  let brand = [
    "APPLE",
    "HUAWEI",
    "INFINIX",
    "HP",
    "HEMANI",
    "SAMSUNG",
    "OPPO",
    "MICROSOFT",
  ];

  let { inputVal, setInputVal } = React.useContext(GlobalDataApi);

  let handleCheckBox = (e) => {
    let val = e.target.value;
    setInputVal(inputVal = val);
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="pl-3 pt-7 sm:text-[10px] md:text-[20px] lg:text-[40px] xl:text-[30px] text-center font-bold text-green-800">
          Filters
        </h1>
        <TbFilterBolt className="pr-4 relative top-8 sm:text-[18px]  xl:text-[39px] text-[#3c323251]" />
      </div>

      <hr className="border-b-[1px] border-gray-300 pt-1" />

      <div className="flex justify-between flex-col">
      <Accordion className="bg-gray-200">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold text-slate-600"
        >
        <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[13px] xl:text-[17px] font-bold text-slate-600">
          Brand
        </h1>
        </AccordionSummary>
        <AccordionDetails>
        {brand.map((brand, index) => {
          return (
            <div key={index} className="flex gap-2 text-gray-600 pl-2">
              <input type="checkbox" className="scale-[1.2]" onChange={handleCheckBox} value={brand}/>
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

export default BrandFilter;
