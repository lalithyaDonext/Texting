import React from "react";
import '../Background/Background.css'
import BackgroundRegister from "../Background/BackgroundRegister";
import Register from "./Register";

const RegisterMain = () => {
  return (
    <div className=" flex bg-[gray] bg-opacity-[8%]">

      <div className="">
        <BackgroundRegister />
      </div>

      <div className=" flex flex-col items-center justify-center ml-[250px] bg-[#FFFFFF] bg-opacity-[30%]  w-[699px] mr-[40px]  mt-[25px] mb-[25px] rounded-[22px] ">
        <Register />
      </div>
      
    </div>
  );
};

export default RegisterMain;
