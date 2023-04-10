import React from "react";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LayersIcon from "@mui/icons-material/Layers";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BiotechIcon from "@mui/icons-material/Biotech";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EastIcon from "@mui/icons-material/East";
import Business from "@/Components/Business";
import Testimonials from "@/Components/Testimonials";
import GetTouch from "../Components/GetTouch";
import Footer from "@/Components/Footer";
import Navsection from "@/Components/Navsection";

export default function service_details() {
  return (
    <div>
      <Navsection name="Services Details" className="ServicesDetails" />
      {/* -----------------------------------------    section : 1     ----------------------------------- */}
      <section>
        <div className="sm:my-[0px]  lg:mx-[150px]  md:mx-[75px] pt-[80px] pb-[50px]">
          <div className="text-center">
            <h4 className="text-[#5a5a5a] mb-[10px] font-[500] text-[22px] leading-[28px]">
              PHP Technologies
            </h4>
            <h2 className=" text-[#111]  text-[32px] leading-[45px] font-[700]">
              Scalable, interactive & custom PHP solutions on your way
            </h2>
            <p className="text-[18px] leading-[32px] text-[#0f192d] font-[50]  my-[24px] ">
              "Within a span of"{" "}
              <strong className="text-[#6cc000] text-[22px] font-[400]">
                15
              </strong>{" "}
              " years Team In India has emerged as one of the leading companies
              teaming the expert and experienced PHP developers. With the
              undaunted skills and the unmatched assistance our team of"{" "}
              <strong className="text-[#FFB822] text-[22px] font-[400]">
                300+
              </strong>
              "strong and dedicated PHP developers have developed"{" "}
              <strong className="text-[#FF4045] text-[22px] font-[400]">
                2500+
              </strong>{" "}
              " portals and websites for"{" "}
              <strong className="text-[#FF4045] text-[22px] font-[400]">
                2000+
              </strong>{" "}
              clients. We support clients from all over the world including USA,
              UK, Australia, France, and New Zealand.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-[20px] my-[50px]">
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <ConnectedTvIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px] text-center hover:text-[#6CC000] transition-[.7] pt-[25px]">
                  <a href="">Custom Applications</a>
                </h5>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <DesignServicesIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px]  hover:text-[#6CC000] transition-[.7] text-center pt-[25px]">
                  <a href="">Dynamic Website</a>
                </h5>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <LayersIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px]  hover:text-[#6CC000] transition-[.7] text-center pt-[25px]">
                  <a href="">CMS Development</a>
                </h5>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <WorkOutlineIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px]  hover:text-[#6CC000] transition-[.7] text-center pt-[25px]">
                  <a href="">PHP based E-commerce</a>
                </h5>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <BiotechIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px]  hover:text-[#6CC000] transition-[.7] text-center pt-[25px]">
                  <a href="">CMS Development</a>
                </h5>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 sdetails">
              <div className="bg-[#000] py-[30px] text-center rounded-[500px] mx-[30px]">
                <a href="" className="">
                  <LanguageIcon className="text-[#fff] text-[45px]" />
                </a>
              </div>
              <div>
                <h5 className="text-[#111] font-[600] text-[18px] leading-[24px]  hover:text-[#6CC000] transition-[.7] text-center pt-[25px]">
                  <a href="">Cloud (SaaS, PaaS)</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------    section : 2     ----------------------------------- */}
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <img
              src="https://agency.dexignzone.com/react/demo/static/media/pic3.9c5b7196.jpg"
              alt=""
              className="howwork"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-[#1C1C1C]">
              <div className="p-[70px]">
                <div className="px-[20px]">
                  <h3 className=" text-[#fff] mb-[10px] text-[28px] leading-[35px] font-[700] ">
                    How We Work
                  </h3>
                  <h5 className=" text-[#fff] mb-[30px] text-[18px] leading-[24px] font-[600] ">
                    Since our foundation in 2005 our goal has been to use
                    digital technology to create experiences.
                  </h5>
                  <ul>
                    <li className="mb-[10px]">
                      <CheckCircleOutlineIcon className="text-[#6cc000] me-[20px]" />
                      <span className="text-[15px] text-[#fff] opacity-70">
                        Contrary to popular belief, Lorem Ipsum is not simply
                      </span>
                    </li>
                    <li className="mb-[10px]">
                      <CheckCircleOutlineIcon className="text-[#6cc000] me-[20px]" />
                      <span className="text-[15px] text-[#fff] opacity-70">
                        Random text. It has roots in a piece of classical Latin
                        literature
                      </span>
                    </li>
                    <li className="mb-[10px]">
                      <CheckCircleOutlineIcon className="text-[#6cc000] me-[20px]" />
                      <span className="text-[15px] text-[#fff] opacity-70">
                        Latin professor at Hampden-Sydney College in Virginia
                      </span>
                    </li>
                  </ul>
                  <p className="mb-[24px] leading-[28px] text-[16px] text-[#6f6f6f] font-[400]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                  <p className="mb-[24px] leading-[28px] text-[16px] text-[#6f6f6f] font-[400]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                  <button class="bg-transparent hover:bg-[#e0dee2] text-[#fff]  hover:text-[#555] py-2 px-4 border border-[#f0f0f0] hover:border-transparent rounded-3xl detailstrasition">
                    Read More{" "}
                    <span>
                      <EastIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------    section : 3     ----------------------------------- */}
      <section>
        <div className="mx-[150px] my-[100px]">
          <div className="text-center">
            <h4 className="text-[22px] leading-[28px] font-[600] text-[#5a5a5a] mb-[10px]">
              Services
            </h4>
            <h2 className="text-[32px] leading-[45px] font-[700] text-[#111] ">
              PHP Development Services
            </h2>
            <div className="flex justify-center">
              <p className="w-[700px] pt-[10px] text-[16px] text-[#0f192d] leading-[28px] mb-[24px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-12 gap-[25px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000] ">
                  <a href="">
                    PHP WEB <br /> PORTALS
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000]">
                  <a href="">
                    PHP MOBILE <br />
                    WEB SERVICES
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000] ">
                  <a href="">
                    PHP BACKEND <br />
                    SOLUTIONS
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000] ">
                  <a href="">
                    SOCIAL NETWORKING <br /> DEVELOPMENT
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000]">
                  <a href="">
                    PHP ECOMMERCE <br />
                    SOLUTION
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <h4 className="text-[#111] text-[22px] leading-[28px] mb-[15px] font-[600] hover:text-[#6cc000] ">
                  <a href="">
                    PHP <br />
                    FRAMEWORKS
                  </a>
                </h4>
                <p className="leading-[28px] mb-[24px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <button class="bg-transparent hover:bg-[#539300] text-[#6cc000]  hover:text-[#fff] py-2 px-4 border border-[#6cc000] hover:border-transparent rounded-3xl detailstrasition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------    section : 4     ----------------------------------- */}
      <section>
        <Business />
      </section>
      {/* -----------------------------------------    section : 5     ----------------------------------- */}
      <section>
        <Testimonials />
      </section>
      {/* -----------------------------------------    section : 6     ----------------------------------- */}
      <section>
        <GetTouch />
      </section>
    </div>
  );
}
