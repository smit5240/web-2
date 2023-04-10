import React from "react";
import Formabout from "./Formabout";

export default function LetsConvert() {
  return (
    <div>
      <div className=" bg-[#fff] relative p-[20px] absolute top-[-40px] shadowform rounded-[20px] w-[100%] ">
        <h3 className="mb-[10px] text-[28px] leading-[35px] font-[800] text-[#111] pt-[25px] ">
          Let's Convert Your Idea into Reality
        </h3>
        <p className="text-[16px] leading-[28px] mb-[24px] font-[400] text-[#6f6f6f]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <div>
          <Formabout />
        </div>
      </div>
    </div>
  );
}
