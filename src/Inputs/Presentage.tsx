import React from "react";
import "./presentage.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { ReactComponent as ArrowDown } from "../images/icon/light/arrow/ArrowDown.svg";
const Percentage = ({ placeholder, option }: any) => {
  return (
    <div className="percentage-drop-down-main">
      <div className="presentage-placeholder">
        {placeholder}
        <select className="percentage-drop-down-select">
          <option value="" disabled selected>
            %
          </option>
          <option>%</option>
        </select>
        <ArrowDown className="percentage-dropdown-arrow" />
      </div>
    </div>
  );
};

export default Percentage;
