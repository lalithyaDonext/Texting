import React from "react";
import { FiUpload } from "react-icons/fi";

const DropDownZone = ({ placeholder, type }: any) => {
  return (
    <div>
      <div
        className="relative w-[588px] h-[106px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px] pt-[20px] pr-[20px] pb-[20px] leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px] outline-none"
        placeholder={placeholder}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mt-3">
            <FiUpload className="w-6 h-6 mx-auto text-gray-500" />
          </div>
          <span className="text-gray-500">Click here to upload your logo</span>

          <span className="text-gray-500">or drag and drop</span>
        </div>
      </div>
    </div>
  );
};

export default DropDownZone;
