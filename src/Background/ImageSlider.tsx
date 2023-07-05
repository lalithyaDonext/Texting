import React, { useState, useEffect } from "react";
import Slider1 from "../images/Background/Register/slider1.png";
import Slider2 from "../images/Background/Register/slider2.png";
import Slider3 from "../images/Background/Register/slider3.png";

const ImageSlider: React.FC = () => {

  const images = [Slider1, Slider2, Slider3];
  const [activeIndex, setActiveIndex] = useState(0);



  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);



  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };



  return (
    <div className="flex flex-col ">

      <div className="h-auto overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className={`absolute transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex mt-[630px] ml-[130px]">

        {images.map((_, index) => (

          <div key={index} className="flex items-center justify-center">
            <span
              className={`inline-block w-4 h-4 mx-1 rounded-full bg-gray-500 ${
                index === activeIndex ? "bg-gray-200" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          </div>
          
        ))}

      </div>

    </div>
  );
};

export default ImageSlider;
