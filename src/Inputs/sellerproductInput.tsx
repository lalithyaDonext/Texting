import React from "react";
import { BsClipboard2Plus } from "react-icons/bs";
import { PaperPlus } from "react-iconly";

const SellerproductInput = ({ placeholder }: any) => {
  return (
    <div className="relative">
      <input
        className="w-[378px] h-[44px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[60px] placeholder:text-[rgba(30, 30, 30, 0.7)]   font-normal font-inter text-[14px] leading-[24px] outline-none"
        placeholder={placeholder}
      />
      <div className="absolute top-0 left-0 flex items-center h-full pl-2 text-gray-500">
        <PaperPlus size={20} style={{ color: "#130F26" }} />
      </div>
    </div>
  );
};

export default SellerproductInput;
