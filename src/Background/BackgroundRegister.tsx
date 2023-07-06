import React from "react";
import BackgroundImage from "../images/Background/Register/Slider.png";
import Logo from "../images/Background/Register/Unik Logo.png";
import ImageSlider from "./ImageSlider";
import BackgroundCard from "./BackgroundCard";

const BackgroundRegister = () => {
  return (
    <div className="h-[100vh] relative">

      <img src={BackgroundImage} alt="BackgroundImage" className="h-full" />

      <img
        src={Logo}
        alt="Logo"
        className="absolute top-5 left-3 w-40 h-auto"
      />


      <div className="absolute inset-0 flex ml-[100px] mt-[80px]">
        <div className="h-2/3 w-1/2 ">
          <ImageSlider />
        </div>
      </div>

      <div className="absolute top-[440px] left-[25px] flex items-center ">
        <BackgroundCard />
      </div>
      
    </div>
  );
};

export default BackgroundRegister;
