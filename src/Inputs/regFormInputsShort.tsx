import React from "react";

const RegFormInputsShort = ({ placeholder, type }: any) => {
  return (
    <div>
      <input
        className="absolute w-[284px] h-[44px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px] outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default RegFormInputsShort;
