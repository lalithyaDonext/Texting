import React from "react";
import BackgroundRegister from "../Background/BackgroundRegister";
import RegisterType from "./RegisterType";
import "./login.css"

const TypeSelection = () => {
  return (
    <div className="absolute flex login-text">
      <div className="">
        <BackgroundRegister />
      </div>
      <div className="ml-[450px]">
        <div>

          <div className=" mt-[100px] text-right  font-poppins font-[300px] text-opacity-50 text-[#000000] leadding-[60px]  text-[40px] ">
            Welcome to UNIK!
          </div>

          <div className="  text-right  font-poppins font-bold leadding-[72px]  text-[48px] ">
            Pick Your Choice
          </div>

          <div className="mt-[100px] ml-[50px]">
            <RegisterType />
          </div>

          <div className="absolute ml-[150px]  mt-[40px]   h-[45px] ">
            <div className="text-black  font-Montserrat text-[18px] leading-[44px]">
              Already have an account?
            </div>
          </div>

          <div className="absolute  mt-[90px] ml-[280px]  h-[45px] ">
            <div className="text-[#4A037D] font-semibold font-Montserrat text-[18px] leading-[24px] ">
              Login Here
            </div>
          </div>

          <div className="absolute  mt-[190px] ml-[290px]  h-[45px] ">
            <div className="text-[#4A037D]  font-Montserrat text-[16px] leading-[24px] ">
              Need Help ?
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TypeSelection;
