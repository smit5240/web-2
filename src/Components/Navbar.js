import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
export default function Navbar() {
  return (
    <div>
      <div>
        <ul className="flex justify-between  text-[14px]  text-[#fff]  opacity-70 mb-[20px] ">
          <li className="flex">
            <div className="me-[20px]">
              <CallIcon />
              <span className="ps-[10px]">001 1234 6789</span>
            </div>
            <div className="me-[20px]">
              <LocationOnIcon />
              <span className="ps-[10px]">
                {" "}
                6701 Democracy Blvd, Suite 300, USA
              </span>
            </div>
          </li>
          <li className="flex">
            <div className="me-[20px]">
              <ApiOutlinedIcon />
              <span className="ps-[10px]"> Agency.software</span>
            </div>
            <div className="me-[20px]">
              <MailOutlineIcon />
              <span className="ps-[10px]"> info@example.com</span>
            </div>
          </li>
        </ul>
      </div>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="#" class="flex items-center">
            <img
              src="logo.png"
              class="  z-[100] w-[125px]"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class="hidden w-full md:block md:w-auto navup"
            id="navbar-multi-level "
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   ">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-[#fff]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-[#fff]"
                >
                  Dropdown{" "}
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal   divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dropdown
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown"
                        class="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-[#fff]">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-[#fff]">
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-[#fff]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-[#fff]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-[#fff]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
