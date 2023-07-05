import React, { useState } from "react";
import Seller from "../images/Register/Seller.png";
import Buyer from "../images/Register/Buyer.png";
import { BsCheckSquareFill } from "react-icons/bs";

const RegisterType = () => {
  const [isBuyerHovered, setIsBuyerHovered] = useState(false);
  const [isSellerHovered, setIsSellerHovered] = useState(false);

  const handleBuyerMouseEnter = () => {
    setIsBuyerHovered(true);
    setIsSellerHovered(false);
  };

  const handleBuyerMouseLeave = () => {
    setIsBuyerHovered(false);
  };

  const handleSellerMouseEnter = () => {
    setIsSellerHovered(true);
    setIsBuyerHovered(false);
  };

  const handleSellerMouseLeave = () => {
    setIsSellerHovered(false);
  };

  return (
    <div className="relative inline-block">
      <div className="flex flex-col items-center">

        <button
          className={`flex items-center gap-5 p-5 w-[338px] rounded-[12px] h-[68px] border border-[#4A037D] text-[18px] leading-[27px] p-[18px, 24px, 18px, 24px] hover:w-[345px] hover:bg-[#F3D8FD] hover:bg-opacity-[35%] transition-transform ${
            isBuyerHovered ? "-translate-x-3" : ""
          }`}
          onMouseEnter={handleBuyerMouseEnter}
          onMouseLeave={handleBuyerMouseLeave}
        >
          <>
            <img src={Buyer} alt="Buyer" />I want to buy unique styles
            {isBuyerHovered && <BsCheckSquareFill className="text-[#4A037D]" />}
          </>
        </button>

        <button
          className={`flex items-center gap-5 p-5 mt-3 w-[338px] rounded-[12px] h-[68px] border border-[#4A037D] text-[18px] leading-[27px] hover:w-[345px] hover:bg-[#F3D8FD] hover:bg-opacity-[35%] transition-transform ${
            isSellerHovered ? "-translate-x-3" : ""
          }`}
          onMouseEnter={handleSellerMouseEnter}
          onMouseLeave={handleSellerMouseLeave}
        >
          <>
            <img src={Seller} alt="Seller" />I want to sell Unique Styles
            {isSellerHovered && (
              <BsCheckSquareFill className="text-[#4A037D]" />
            )}
          </>
        </button>
        
      </div>
    </div>
  );
};

export default RegisterType;
