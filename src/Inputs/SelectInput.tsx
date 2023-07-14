import React from "react";
import "./SelectInput.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { ReactComponent as ArrowDown } from "../images/icon/light/arrow/ArrowDown.svg";
const SelectInput = ({ placeholder, option }: any) => {
  return (
    <div className="drop-down-main">
      <select className="drop-down-select">
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option>{option}</option>
      </select>
      <ArrowDown className="dropdown-arrow" />
    </div>
  );
};

export default SelectInput;
