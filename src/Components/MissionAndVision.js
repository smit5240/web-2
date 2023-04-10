import React from "react";

export default function MissionAndVision() {
  return (
    <div>
      <div>
        <h1 className=" text-[22px] md:text-[32px] text-[#222] font-[700] flex justify-center leading-[28px] text-center md:leading-[45px] mt-[35px] md:mt-[0px]">
          Mission And Vision
        </h1>
        <div className=" flex justify-center mb-[45px]">
          <span className=" w-[700px] pt-[10px] text-[16px] mb-[24px] leading-[28px] text-center text-[#444] text-[17px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </span>
        </div>
      </div>
      <div className="wallpepar">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <img src="meet.jpg" className="rounded-[10px]" alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:ms-[30px]">
            <h2 className=" text-[22px] md:text-[28px] text-[#222] font-[700]  leading-[35px] md:leading-[45px] pb-[25px] pt-[20px] lg:pt-[0px]">
              Mission
            </h2>
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>{" "}
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:mt-[75px] ">
          <div className="col-span-12 lg:col-span-6 lg:me-[30px]">
            <h2 className=" text-[22px] md:text-[28px] text-[#222] font-[700]  leading-[35px] md:leading-[45px] pb-[25px]">
              Vision
            </h2>
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>{" "}
            <p className="text-[#6f6f6f] leading-[28px] tracking-widest text-[16px] font-[400] pb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the .
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src="meet2.jpg" className="rounded-[10px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
