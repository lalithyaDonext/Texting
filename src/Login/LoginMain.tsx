import React from "react";
import BackgroundRegister from "../Background/BackgroundRegister";
import Register from "../Register/Register";
import Login from "./login";


const LoginMain = () => {
  return (
    <div className="absolute flex fixed">

      <div className="">
        <BackgroundRegister />
      </div>

      <div className="ml-[300px]">
        <Login />
      </div>
      
    </div>
  );
};

export default LoginMain;
