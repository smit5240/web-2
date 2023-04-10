import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Formabout from "@/Components/Formabout";
import LetsConvert from "./LetsConvert";

export default function GetTouch() {
  return (
    <div>
      <div className="bgabout2 min-h-[700px]">
        <div className="sm:my-[0px]  ms-[0px] me-[0px] md:mx-[75px] lg:ms-[150px] lg:me-[150px] grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-6 pt-[100px]">
            <h2 className="text-[#fff] mb-[15px] text-[32px] leading-[45px] font-[700]">
              Let's get in touch{" "}
            </h2>
            <p className="mb-[24px] text-[#fff] opacity-80">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </p>
            <h3 className="text-[28px] leading-[35px] font-[500] mb-[50px] text-[#fff] opacity-60 ">
              By 700+ customers for 3200+ Web and Mobile App development
              projects.
            </h3>
            <h4 className="mb-[15px] text-[22px] font-[600] leading-[28px] text-[#fff]">
              & What you will get:
            </h4>
            <ul className="mb-[30px] md:mb-[0px]">
              <li className="mb-[10px]  pt-[8px] pe-[5px] pb-[8px] ">
                <div>
                  <CheckCircleOutlineIcon className="text-[#6CC000]" />
                  <span className="text-[15px] ps-[30px] text-[#fff] opacity-70">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </span>
                </div>
              </li>
              <li className="mb-[10px]  pt-[8px] pe-[5px] pb-[8px]">
                <CheckCircleOutlineIcon className="text-[#6CC000]" />
                <span className="text-[15px] ps-[30px] text-[#fff] opacity-70">
                  Random text. It has roots in a piece of classical Latin
                  literature
                </span>
              </li>

              <li className="mb-[10px]  pt-[8px] pe-[5px] pb-[8px]">
                <CheckCircleOutlineIcon className="text-[#6CC000]" />
                <span className="text-[15px] ps-[30px] text-[#fff] opacity-70">
                  Latin professor at Hampden-Sydney College in Virginia
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6  mt-[15px] md:mt-[30px] lg:mt-[0px]    w-[100%]">
            <LetsConvert />
          </div>
        </div>
      </div>
    </div>
  );
}
