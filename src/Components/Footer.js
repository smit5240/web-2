import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div>
      <footer class="bg-[#1C2114] ">
        <div class="mx-auto w-full max-w-screen-xl py-[50px]">
          <div class="grid sm:grid-cols-2 md:grid-cols-6  lg:grid-cols-10 gap-4 px-4 py-6 lg:py-8 text-[15px] ">
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-2  mx-3 ">
              <h5 className="text-white text-xl font-[600] text-[18px] leading-[24px]  mb-[30px]">
                COMPANY
              </h5>
              <ul class="text-slate-300 Footerul ">
                <li class="mb-4 ">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">About Us</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />{" "}
                  <a href="#">Home</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />{" "}
                  <a href="#">Contact Us</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">About Us</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Our Services</a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 mx-3">
              <h5 className="text-white text-xl font-[600] text-[18px] leading-[24px]  mb-[30px]">
                USEFUL LINK
              </h5>
              <ul class="text-slate-300 font-medium Footerul">
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Create Account</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Company Philosophy</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Corporate Culture</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Portfolio</a>
                </li>
                <li class="mb-4">
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="me-4"
                  />
                  <a href="#">Project Details</a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 mx-3">
              <h5 className="text-white text-xl font-[600] text-[18px] leading-[24px]  mb-[30px]">
                CONTACT US
              </h5>
              <ul class="text-slate-300 font-medium Footerul">
                <li className="mb-4 flex ">
                  <LocationOnOutlinedIcon className="mt-2 me-2" />
                  <div>
                    <strong>Address</strong>
                    <p>
                      Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                    </p>
                  </div>
                </li>
                <li className="mb-4 flex ">
                  <PhoneAndroidIcon className="mt-2 me-2" />
                  <div>
                    <strong>Phone</strong>
                    <p>0800-123456 (24/7 Support Line)</p>
                  </div>
                </li>
                <li className="mb-4 flex ">
                  <MailOutlinedIcon className="mt-2 me-2" />
                  <div>
                    <strong>Email</strong>
                    <p>Info@Example.Com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 mx-3">
              <h5 className="text-white text-xl font-[600] text-[18px] leading-[24px]  mb-[30px]">
                UBSCRIBE TO OUR NEWSLETTER
              </h5>
              <ul class="text-slate-300  font-medium Footerul">
                <li class="mb-4">
                  <a href="#">
                    If You Have Any Questions, You Can Contact With Us So That
                    We Can Give You A Satisfying Answer. Subscribe To Our
                    Newsletter To Get Our Latest Products.
                  </a>
                </li>
                <li class="mb-4 flex">
                  <a href="#">
                    <input
                      placeholder="Your E-  mail Id"
                      className="px-[20px] py-[15px] w-[150px]  md:w-[250px] lg:w-[180px] bg-[#232D17]  focus:outline-0 focus:bg-[#fff]"
                    />
                  </a>
                  <button class="bg-[#6CC000]  text-white font-bold py-2 px-4  rounded-r-lg">
                    Subscribes
                  </button>
                </li>
                <li class="mb-4 flex gap-4">
                  <div className="bg-[#3B5998] rounded-full h-[40px] w-[40px] flex justify-center  items-center">
                    <i class="fa-brands fa-facebook-f text-[18px]"></i>
                  </div>
                  <div className="bg-[#DE4E43] rounded-full h-[40px] w-[40px] flex justify-center  items-center">
                    <i class="fa-brands fa-google-plus-g text-[18px]"></i>
                  </div>
                  <div className="bg-[#107BB6] rounded-full h-[40px] w-[40px] flex justify-center  items-center">
                    <i class="fa-brands fa-linkedin-in text-[18px]"></i>
                  </div>
                  <div className="bg-[#8A5A4F] rounded-full h-[40px] w-[40px] flex justify-center  items-center">
                    <InstagramIcon className="text-[#fff]" />
                  </div>
                  <div className="bg-[#1EA1F3] rounded-full h-[40px] w-[40px] flex justify-center  items-center">
                    <TwitterIcon className="text-[#fff]" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
