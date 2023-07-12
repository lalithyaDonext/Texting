import React from 'react';
import './currencyDropDown.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const CurrencyDropDown = ({ placeholder, option }:any) => {
  return (
    <div className="currency-drop-down-main">
                <select className="currency-drop-down-select" >
                    <option  value="" disabled selected>Select Currency</option>
                    <option>{option}</option>
                </select>
                <ArrowDown className="currency-dropdown-arrow" />
            </div>
  );
};

export default CurrencyDropDown;