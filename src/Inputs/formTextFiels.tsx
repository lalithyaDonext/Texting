import React from "react";

const FormTextField = ({ placeholder, type }: any) => {
  return (
    <div>
      <textarea
        className="absolute w-[588px] h-[106px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px] pt-[20px] pr-[20px] pb-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px] outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormTextField;
