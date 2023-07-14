import React from 'react';
import './walletInputField.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const WalletInputField = ({ placeholder}:any) => {
  return (
    <div className="input-main">
                <div className="input-txt" >
                    {placeholder}
                </div>
            </div>
  );
};

export default WalletInputField;