import React from 'react';
import './SelectInput.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const SelectInput = ({ placeholder, option }:any) => {
  return (
    // <div className="select-input-group">
    //   <select className="select-form-select rounded-start" placeholder={placeholder}>
    //     <option>{option}</option>
    //   </select>
    //   <div className="select-input-group-append">
    //     <span className="select-input-group-text">
    //       <i className="bi bi-caret-down-fill bigger-icon"></i>
    //     </span>
    //   </div>
    // </div>

    <div className="drop-down-main">
                <select className="drop-down-select" >
                    <option  value="" disabled selected>{placeholder}</option>
                    <option>{option}</option>
                    {/* {[
                        "Single Room",
                        "Double Room",
                        "Twin Room",
                        "Twin/double Room",
                        "Triple Room",
                        "Quadruple Room",
                        "Family Room",
                        "Suite Room",
                        "Apartment Room",
                        "Dormitory room",
                        "Bed in dormitor",
                    ].map((option, index) => (
                        <option key={index} value={option} className="">
                            {option}
                        </option>
                    ))} */}
                </select>
                <ArrowDown className="dropdown-arrow" />
            </div>
  );
};

export default SelectInput;