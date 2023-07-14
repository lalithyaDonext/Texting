import React from 'react';
import './walletDropDown.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const WalletDropDown = ({ placeholder, option }:any) => {
  return (
    <div className="drop-down-main">
                <select className="drop-down-select" >
                    <option  value="" disabled selected>{placeholder}</option>
                    <option>{option}</option>
                </select>
                <ArrowDown className="dropdown-arrow" />
            </div>
  );
};

export default WalletDropDown;