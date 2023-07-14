import React from "react";
import "./input1.css";

const FormInputs = ({ placeholder }: any) => {
  return (
    <div>
      <input className="email-input" placeholder={placeholder} />
    </div>
  );
};

export default FormInputs;
