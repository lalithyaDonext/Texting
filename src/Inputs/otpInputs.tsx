import React from "react";

const OtpInputs = ({ type }: any) => {
  return (
    <div>
      <input
        className="absolute w-[80px] h-[80px] bg-[gray] bg-opacity-[25%]  rounded-[4px] pl-[20px]  p-[14px 75px 14px 20px]  leading-[15px] outline-none"
        type={type}
      />
    </div>
  );
};

export default OtpInputs;
