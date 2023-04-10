import React from "react";
import Navsection from "@/Components/Navsection";
import Footer from "@/Components/Footer";
import AirplayIcon from "@mui/icons-material/Airplay";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Business from "@/Components/Business";
import Button from "@/Components/Button";
export default function services() {
  return (
    <div>
      <Navsection name="Our Services" className="Services" />
      {/* -----------------------------      Section : 1     ------------------------------ */}
      <section>
        <div className="mx-[150px] my-[100px]">
          <div className="text-center">
            <h4 className="text-[22px] leading-[28px] font-[600] text-[#5a5a5a] mb-[10px]">
              Our Services
            </h4>
            <h2 className="text-[32px] leading-[45px] font-[700] text-[#111] ">
              Web Design & Development Services
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
                <a href="">
                  <AirplayIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay ">
                  <a href="">PHP WEB PORTALS</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <a href="">
                  <DesignServicesIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay ">
                  <a href="">WEB DEVELOPMENT SOLUTIONS</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <a href="">
                  <SignalCellularAltIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay">
                  <a href="">SEO/SMO SOLUTIONS</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <a href="">
                  <DescriptionIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay">
                  <a href="">PRE CUSTOMIZED SOLUTIONS</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <a href="">
                  <SaveAsIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay">
                  <a href="">PROJECT MAINTENANCE</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <a href="">
                  <LanguageIcon
                    className="text-[60px] text-[#6cc000] hover:text-[#111] mb-[15px] dellay"
                    sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </a>
                <h4 className="text-[#111] text-[18px] leading-[24px] mb-[15px] font-[600] hover:text-[#6cc000] dellay">
                  <a href="">SOCIAL NETWORKING PORTAL</a>
                </h4>
                <p className="leading-[28px] mb-[15px] text-[16px] font-[400]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------      Section : 2     ------------------------------ */}
      <section>
        <Business />
      </section>
      {/* -----------------------------      Section : 3     ------------------------------ */}
      <section>
        <div className="mx-[0px] md:mx-[100px] lg:mx-[200px] my-[100px]">
          <div className="text-center">
            <h2 className="text-[32px] leading-[45px] font-[700] text-[#111] ">
              Our Pricing
            </h2>
            <div className="flex justify-center">
              <p className="w-[700px] pt-[10px] text-[16px] text-[#0f192d] leading-[28px] mb-[24px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-12 gap-[25px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/744/228/original/rocket-outline-icon-free-vector.jpg"
                  alt=""
                  className="w-[75px] flex m-auto "
                />
                <h4 className="text-[#111] text-[22px] leading-[28px] mt-[10px] font-[300] ">
                  Starter
                </h4>
                <h4 className="mt-[10px] font-[700] text-[60px] leading-[60px] text-[#555]">
                  $25{" "}
                  <span className="text-[16px] font-[400] text-[#6f6f6f] ">
                    {" "}
                    / Par Month
                  </span>
                </h4>
                <ul>
                  <li className="flex justify-between mb-[16px]">
                    <p>Full Responsive</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Multi color theme</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>With Bootstrap</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Easy to customize</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Many Sortcodes</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                </ul>

                <Button name="Sign Up" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg ">
              <div className="p-[30px] text-center ">
                <img
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35662629.jpg"
                  alt=""
                  className="w-[75px] flex m-auto "
                />
                <h4 className="text-[#111] text-[22px] leading-[28px] mt-[10px] font-[300] ">
                  Professional
                </h4>
                <h4 className="mt-[10px] font-[700] text-[60px] leading-[60px] text-[#555]">
                  $50
                  <span className="text-[16px] font-[400] text-[#6f6f6f] ">
                    {" "}
                    / Par Month
                  </span>
                </h4>
                <ul>
                  <li className="flex justify-between mb-[16px]">
                    <p>Full Responsive</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Multi color theme</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>With Bootstrap</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Easy to customize</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Many Sortcodes</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                </ul>
                <Button name="Sign Up" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 serviceBoxBorder bg-[#fcfcfc] rounded-lg">
              <div className="p-[30px] text-center">
                <img
                  src="https://us.123rf.com/450wm/gwensgraphicstudio/gwensgraphicstudio2003/gwensgraphicstudio200300070/141252306-hand-drawn-growing-bar-graph-icon-in-black-on-a-white-background-doodle-style-vector-illustration.jpg?ver=6"
                  alt=""
                  className="w-[75px] flex m-auto "
                />
                <h4 className="text-[#111] text-[22px] leading-[28px] mt-[10px] font-[300] ">
                  Enterprise
                </h4>
                <h4 className="mt-[10px] font-[700] text-[60px] leading-[60px] text-[#555]">
                  $75
                  <span className="text-[16px] font-[400] text-[#6f6f6f] ">
                    {" "}
                    / Par Month
                  </span>
                </h4>
                <ul>
                  <li className="flex justify-between mb-[16px]">
                    <p>Full Responsive</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Multi color theme</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>With Bootstrap</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Easy to customize</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                  <li className="flex justify-between mb-[16px]">
                    <p>Many Sortcodes</p>
                    <span>
                      <CheckCircleOutlineIcon className="text-[#6cc000] " />
                    </span>
                  </li>
                </ul>
                <Button name="Sign Up" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
