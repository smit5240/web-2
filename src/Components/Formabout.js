import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Formabout() {
  return (
    <div>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div class="flex items-center border-b border-[#E1E6EB] py-2">
              <PersonOutlineIcon className="text-[#6cc000]" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="First Name"
                aria-label="Full name"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <div class="flex items-center border-b border-[#E1E6EB] py-2">
              <PhoneAndroidIcon className="text-[#6cc000]" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number"
                placeholder="Phone"
                aria-label="Full name"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <div class="flex items-center border-b border-[#E1E6EB] py-2">
              <MailOutlineIcon className="text-[#6cc000]" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Password"
                aria-label="Full name"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div class="flex items-center border-b border-[#E1E6EB] py-2">
              <CheckCircleOutlineIcon className="text-[#6cc000]" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Upload File"
                aria-label="Full name"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <div class="flex items-center border-b border-[#E1E6EB] py-2">
              <FolderOpenIcon className="text-[#6cc000]" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Upload File"
                aria-label="Full name"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <div class="flex  border-b border-[#E1E6EB] py-2">
              <StarBorderIcon className="text-[#6cc000]" />
              <textarea
                id="message"
                rows="3"
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Tell us about  your project or idea"
              ></textarea>
            </div>
          </div>
        </div>
        <button class="bg-[#6CC000]  text-white font-[400] text-[16px]  py-3 px-6  rounded my-[30px]">
          Get A Free Quote !
        </button>
      </form>
    </div>
  );
}
