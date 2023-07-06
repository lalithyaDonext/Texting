import React from "react";
import FormInputs from "../Inputs/formInputs";
import Insta from "../images/Register/Insta.png";
import Google from "../images/Register/Google.png";
import Facebook from "../images/Register/Facebook.png";
import './loginMain.css'
import {ArrowLeft} from 'react-iconly'

const Login = () => {
  return (
    <div className="login-main-text login-text mt-20">

      <div className="flex justify-end mr-[30px]">
        <ArrowLeft size={32} stroke="light"/>
      </div>
      
      <div className=" login-text h-[45px] mt-[10px] ml-[500px]  font-Montserrat font-semibold leadding-[44px] font-[40px] text-[25px] ">
        Login
      </div>

      <div className="flex flex-col mt-[70px] ml-[121px]">
        <div className="text-center text-[16px] font-[600]">
        Login with
        </div>

        <div className="flex flex-row ml-[80px] gap-12 mt-5">

          <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
            <img className="w-[44px] h-[44px]" src={Facebook} alt-="insta" />
          </div>

          <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
            <img className="w-[44px] h-[44px]" src={Google} alt-="insta" />
          </div>

          <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
            <img className="w-[44px] h-[44px]" src={Insta} alt-="insta" />
          </div>

        </div>

        <div className=" ml-[235px] mt-[30px] text-[#000000] text-opacity-[50%] text-[16px] leading-[24px] font-semibold">
          Or
        </div>

        <div className="box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[30px]   ">
          <FormInputs placeholder="Enter Your Email" />
        </div>

        <div className="box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[30px] ml-[330px] ">
          <button className="absolute w-[143px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[5px] hover: border-[1px] border-solid border-[#9F00D9] rounded-[10px] bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]">
            Take Me In
          </button>
        </div>

        <div className="absolute ml-[250px]  mt-[400px] mr-[-80px] ">
          <div className="text-black  font-Montserrat text-[18px] leading-[44px]">
            Don’t have an account?
          </div>
        </div>

        <div className="absolute ml-[350px]  mt-[440px] mr-[-80px] ">
          <div className="text-[#4A037D] font-semibold font-Montserrat text-[16px] leading-[24px] ">
            Register Here
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Login;
