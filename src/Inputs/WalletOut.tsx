import React from 'react';
import './walletOut.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const WalletOut = ({ placeholder}:any) => {
  return (
    <div className="output-main">
                <div className="output-txt" >
                    {placeholder}
                </div>
            </div>
  );
};

export default WalletOut;