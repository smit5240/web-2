import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example ">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              <ArrowBackIcon className="pe-[8px]" />
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-[#fff] hover:text-gray-700 dark:bg-[#fff] dark:border-gray-200 dark:text-gray-400 dark:hover:bg-[#6cc000] dark:hover:text-white"
            >
              Next <ArrowForwardIcon className="ps-[8px]" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
