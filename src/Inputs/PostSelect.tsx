import React from 'react';
import './postSelect.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ReactComponent as ArrowDown } from '../images/icon/light/arrow/ArrowDown.svg'
const PostSelect = ({ placeholder, option }:any) => {
  return (
    <div className="drop-down-main">
                <select className="post-drop-down-select" >
                    <option  value="" disabled selected>{placeholder}</option>
                    <option>{option}</option>
                </select>
                <ArrowDown className="dropdown-arrow" />
            </div>
  );
};

export default PostSelect;