import React from "react";

const FormInputs = ({ placeholder }: any) => {
  return (
    <div>
      <input
        className="absolute w-[488px] h-[62px] border-[1px] border-solid border-[#0D6CAF] rounded-[10px] pl-[20px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-xs-[12px] leading-[15px] outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInputs;
