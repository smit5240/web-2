import GetTouch from "../Components/GetTouch";
import React from "react";
import Business from "../Components/Business";
import Testimonials from "@/Components/Testimonials";
import MissionAndVision from "@/Components/MissionAndVision";
import Navsection from "@/Components/Navsection";

export default function about() {
  return (
    <div className="">
      <Navsection name="About Us 1" className="aboutBgImage" />

      {/* ------------------------------------    Section : 1   ------------------------------------------------ */}
      <section className=" sm:my-[0px] md:my-[100px] ms-[0px] me-[0px] md:mx-[75px] lg:ms-[150px] lg:me-[150px] pb-[0px] lg:pb-[210px] flex justify-center">
        <div>
          <div>
            <h3 className="text-[#444] flex justify-center text-[22px] font-[600] mb-[10px] leading-[22px] pt-[25px] md:pt-[0px]">
              About Us
            </h3>
            <h1 className=" text-[22px] md:text-[32px] text-[#222] font-[700] flex justify-center leading-[28px] text-center md:leading-[45px]">
              We create brand new corporate identities
            </h1>
            <div className=" flex justify-center mb-[45px]">
              <span className=" w-[700px] pt-[10px] text-[16px] mb-[24px] leading-[28px] text-center text-[#444] text-[17px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <div className="grid grid-cols-12 mb-0 pb-0 relative">
              <div className=" col-span-12  lg:col-span-3 md:w-[250px] lg:w-[450px]">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/pic9.35695812.jpg"
                  alt=""
                  className=" h-auto rounded-lg "
                />
              </div>
              <div className="lg:absolute col-span-12 lg:col-span-9  ms-0  flex justify-center mt-0 pt-0 left-[30%]  top-[10%]">
                <div className="grid grid-cols-12 bg-[#fff] Bshedow w-[100%] py-[35px] px-[15px]   md:z-[100] ">
                  <div className="col-span-12 lg:col-span-4 ">
                    <div>
                      <h1 className="text-[#111] text-[32px] leading-[45px] text-[32px] font-[700]  ">
                        About Us
                      </h1>
                      <h2 className="text-[#5a5a5a] text-[22px] leading-[28px]  font-[600] ">
                        We create unique experiences
                      </h2>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-8 ">
                    <p className="text-[#6f6f6f] leading-[28px] tracking-normal text-[16px] font-[400] pb-[20px] ">
                      We create unique experiences Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMak.
                    </p>
                    <p className="text-[#6f6f6f] leading-[28px] hidden lg:block tracking-normal text-[16px] font-[400] pb-[20px] ">
                      Also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMak.
                    </p>
                    <p className="text-[#6f6f6f] leading-[28px] tracking-normal text-[16px] font-[400] ">
                      Also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------   Section : 2   ------------------------------------------------ */}
      <section>
        <Business />
      </section>
      {/* -------------------------------------   Section : 3   ------------------------------------------------ */}
      <section className=" sm:my-[0px] md:my-[100px] ms-[0px] me-[0px] md:mx-[75px] lg:ms-[150px] lg:me-[150px] ">
        <MissionAndVision />
      </section>
      {/* -------------------------------------   Section :  4  ------------------------------------------------ */}
      <section className="sm:my-[0px]  ms-[0px] me-[0px] md:mx-[75px] ">
        <Testimonials />
      </section>
      {/* -------------------------------------    Section : 5   ----------------------------------------------- */}
      <section className="relative">
        <GetTouch />
      </section>
    </div>
  );
}
