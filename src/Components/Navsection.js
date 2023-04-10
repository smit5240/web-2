import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "@/Components/Navbar";
export default function navsection(props) {
  return (
    <div>
      <div className={props.className}>
        {/* <div className="colorL "></div> */}
        <div className=" sm:my-[0px]  ms-[0px] me-[0px] md:mx-[75px] lg:ms-[150px] lg:me-[150px] ">
          <Navbar />
          <div className="mt-[100px] navpath">
            <h1 className="text-[40px] font-[600] text-[#fff] mb-[10px] leading-[]">
              {props.name}
            </h1>
            <ul className="flex text-[15px] text-[#fff]">
              <li>
                <a href="/">Home</a>
                <ArrowForwardIosIcon className="text-[16px] ms-[5px] me-[5px]" />
              </li>
              <li>{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
