import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Button(props) {
  return (
    <div>
      <div class="button" id="button-5">
        <div id="translate"></div>
        <a href="#">
          {props.name}
          <ArrowRightAltIcon className="ms-[7px]" />{" "}
        </a>
      </div>
    </div>
  );
}
