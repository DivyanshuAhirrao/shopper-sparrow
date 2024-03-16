import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import { GlobalDataApi } from "../../context/GlobalData";

const ColorFilter = () => {
  
  let { inputVal, setInputVal } = React.useContext(GlobalDataApi);

  let handleCheckBox = (e) => {
    let val = e.target.value;
    setInputVal(inputVal = val);
  };


  let colors = ["red", "green", "blue", "black", "white", "purple"];
  return (
    <>
      <hr className="border-b-[1px] border-gray-300 relative top-1" />

      <div className="flex justify-between flex-col">
        <Accordion className="font-bold text-slate-600">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[13px] xl:text-[17px] font-bold text-slate-600">
              Color
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            {colors.map((color, index) => {
              return (
                <div key={index} className="flex gap-2 text-gray-600 pl-2">
                  <input
                    type="checkbox"
                    onChange={handleCheckBox}
                    className="scale-[1.2]"
                    value={color}
                  />
                  <div style={{backgroundColor: color }} className="relative top-[6px] left-[3px] h-[14px] w-[14px] rounded-[50%] border-black border-[1px]"></div>
                  <span className="font-normal">{color}</span>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default ColorFilter;
