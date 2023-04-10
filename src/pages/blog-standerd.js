import React from "react";
import Navsection from "../Components/Navsection";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
export default function blog_standerd() {
  return (
    <div>
      <section>
        <Navsection name="Blog Standard" className="blogstanderd" />
      </section>
      <section className="mx-[30px] md:mx-[75px] lg:mx-[260px] mt-[75px]  ">
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum1.37c23ec1.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum2.18287b17.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum3.b3885f2b.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum4.39d3262a.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum1.37c23ec1.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex justify-center">
          <div>
            <div className="efect_1">
              <div className=" grid grid-cols-12 single_item ">
                <img
                  src="https://agency.dexignzone.com/react/demo/static/media/thum2.18287b17.jpg"
                  alt=""
                  className="col-span-12 flex  rounded-md  object-cover h-[100%] w-[100%] "
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#111] mt-[20px] mb-[5px] text-[22px] flex m-auto leading-[28px] font-[600] col-span-12">
                <a href="">Title of first blog post</a>
              </h4>
            </div>
            <div className="mb-[20px] ">
              <ul className="flex">
                <li className=" borderl">
                  <ShoppingBagIcon className="text-[#6cc000] text-[18px] me-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    10 Aug 2016
                  </strong>
                </li>
                <li className="borderl">
                  <PersonIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className="pe-[7px] font-[500] text-[14px] leading-[20px] text-[#707070]">
                    By Demongo
                  </strong>
                </li>
                <li>
                  <ChatIcon className="text-[#6cc000] text-[18px] mx-[5px] leading-[22px]" />
                  <strong className=" font-[500] text-[14px] leading-[20px] text-[#707070]">
                    0 Comments
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mb-[20px] text-[20px] font-[400] text-[#6f6f6f] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
      </section>
      <div className="mb-[50px] mt-[30px] flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}
