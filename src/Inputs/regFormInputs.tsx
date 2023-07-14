import React from "react";

const RegFormInputs = ({ placeholder, type }: any) => {
  return (
    <div>
      <input
        className="absolute w-[588px] h-[44px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px]  leading-[15px] placeholder:text-[#000000] font-normal  text-[16px] leading-[15px] outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default RegFormInputs;
