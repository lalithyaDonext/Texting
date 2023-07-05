import React from "react";
import BackgroundRegister from "../Background/BackgroundRegister";
import Register from "./Register";

const RegisterMain = () => {
  return (
    <div className="absolute flex">

      <div className="">
        <BackgroundRegister />
      </div>

      <div className=" flex flex-col items-center ml-[190px] bg-[white] pr-[100px] mt-[25px] mb-[25px] ">
        <Register />
      </div>
      
    </div>
  );
};

export default RegisterMain;
