import React from 'react';
import './SelectInput.css';

const SelectInput = ({placeholder,option }:any) => {
  return (
    <div className="select-input-group">
      <select className="select-form-select rounded-start" placeholder={placeholder}>
        <option>{option}</option>
      </select>
      <div className="select-input-group-append">
        <span className="select-input-group-text">
          <i className="bi bi-caret-down-fill bigger-icon"></i>
        </span>
      </div>
    </div>
  );
};

export default SelectInput;