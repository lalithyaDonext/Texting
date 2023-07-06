import React from "react";
import { FiUpload } from "react-icons/fi";

const DropDownZone = ({ placeholder, type }: any) => {
  return (
    <div>
      <div
        className="relative w-[588px] h-[106px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px] pt-[20px] pr-[20px] pb-[20px] leading-[15px] placeholder:text-[#000000] font-normal font-inter text-[14px] leading-[14px] outline-none"
        placeholder={placeholder}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mt-3">
            <FiUpload className="w-6 h-6 mx-auto text-[#000000]" />
          </div>
          <span className="text-[#000000]">Click here to upload your logo</span>

          <span className="text-[#000000]">or drag and drop</span>
        </div>
      </div>
    </div>
  );
};

export default DropDownZone;
