import React, { useState } from "react";
import './register.css'
import RegFormInputsShort from "../Inputs/regFormInputsShort";
import OtpInputs from "../Inputs/otpInputs";
import RegFormInputs from "../Inputs/regFormInputs";
import FormInputs from "../Inputs/formInputs";
import Insta from "../images/Register/Insta.png";
import Google from "../images/Register/Google.png";
import Facebook from "../images/Register/Facebook.png";
import FormTextField from "../Inputs/formTextFiels";
import DropDownZone from "../Inputs/dropDownZone";
import PopupMessage from "../PopUpModals/popUpMessage";
import { BsArrowLeft} from "react-icons/bs";
import { ArrowLeft } from 'react-iconly'
import RegisterButtonLarge from "../Buttons/RegisterButtonLarge";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [showPopup, setShowPopup] = useState(false);

  const showMessage = () => {
    setShowPopup(true);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    
      
        <div>
          <div className="back-arrow">
          <ArrowLeft size={32} stroke='light'/>
          </div>
          
          {/* Progress Bar */}
          <div className="reg-progress-bar">
            {Array.from(Array(totalSteps), (_, index) => (
              <div className="flex items-center ">

                <div
                  key={index}
                  className={`w-[44px] h-[44px] flex justify-center items-center rounded-full border-[1px] ${
                    index < currentStep
                      ? "border-[#4A037D] boarde-500 bg-[#F3D8FD] border-500"
                      : "border-[#D9D9D9] border-300 bg-[#FFFFFF]"
                  }`}
                >

                  {index < currentStep ? (
                    <span className="text-[#4A037D] font-bold">
                      {index + 1}
                    </span>
                  ) : (
                    <span className="text-black-500 font-bold">
                      {index + 1}
                    </span>
                  )}

                </div>

                {index < totalSteps - 1 && (
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4A037D] w-[55px]"></div>
                )}

              </div>
            ))}
          </div>

          {/* Step content */}
          {currentStep === 1 && (
            <div>
              {/* Form fields for step 1 */}
              <div className="text-signup-title">

              <div className="Signup-titel">
                Register as
              </div>

              <div className="toggle-icon-signup-container">
                <div className="toggle-icon-signup-tumb"></div>
                <div className="toggle-icon-signup-content">Seller</div>
              </div>
              </div>

              <div className="SignUp-Wrapper">

                <div className="SignUp-Title">
                  Signup via social Media
                </div>

                <div className="Social-Media-Icon-Wrapper">
                <div className="custom-circle ">
                    <img
                      className="custom-image"
                      src={Google}
                      alt-="insta"
                    />
                  </div>


                  <div className="custom-circle ">
                    <img
                      className="custom-image"
                      src={Google}
                      alt-="insta"
                    />
                  </div>

                  <div className="custom-circle">
                    <img
                      className="custom-image "
                      src={Insta}
                      alt-="insta"
                    />
                  </div>

                </div>

                <div className=" ml-[235px] mt-[20px] text-[#000000] text-opacity-[50%] text-[16px] leading-[24px] font-semibold">
                  Or
                </div>

                <div className="font-Poppin box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[15px]   ">
                  <FormInputs placeholder="Enter Your Email" />
                </div>

                <div className="font-Poppin box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[80px]  ">
                 <RegisterButtonLarge
                 ButtonName='Continue with Email'
                 />
                </div>

                <div className="font-Poppin ml-[180px] mt-[70px] text-[#000000] text-opacity-[50%] text-[16px] leading-[24px] font-semibold">
                  External Wallet
                </div>

                <div className="font-Poppin box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[20px]   ">
                  <RegisterButtonLarge
                  ButtonName='Continue with Wallet'
                  />
                </div>

              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              {/* Form fields for step 2 */}

              <div className="h-[45px] ml-[340px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-[25px] ">
                Verify Your Phone Number{" "}
              </div>

              <div className=" h-[45px] ml-[240px]  mr-[40px]  mt-[70px] w-[400px] leading-[26px] text-sm font-[Open Sans] font-normal text-right  text-[#707070]">
                we have sent you a code into your phone number ended with
                **********45. please type it below and confirm
              </div>

              <div className="box-border flex flex-row items-center ml-[80px]   mt-[45px] gap-[120px] ">
                <OtpInputs />

                {/* <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]   ml-[1057px]  "> */}
                <OtpInputs />
                {/* </div> */}
                {/* <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]    ml-[1133px]  "> */}
                <OtpInputs />
                {/* </div> */}
                {/* <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]   ml-[1209px]  "> */}
                <OtpInputs />
                {/* </div> */}
                {/* <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]   ml-[1285px]  "> */}
                <OtpInputs />
                {/* </div> */}
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]   mt-[140px] ml-[200px]  ">
                <button
                  className="ml-[220px] absolute w-[221px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[10px] hover: border-[1px] border-solid border-[#9F00D9] rounded-[10px] bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]"
                  onClick={handleNextStep}
                >
                  Verify Phone Number
                </button>
              </div>

              <div className="absolute ml-[460px]  mt-[70px]   h-[45px] ">
                <div className="text-black font-semibold font-Montserrat text-[20px] leading-[44px]">
                  Don't recieve code ?
                </div>
              </div>

              <div className="absolute  mt-[120px] ml-[540px]  h-[45px] ">
                <div className="text-[#4A037D] font-semibold font-Montserrat text-[16px] leading-[24px] ">
                  Resend Code
                </div>
              </div>

            </div>
          )}
          {currentStep === 3 && (
            <div className="font-Poppin">
              {/* Form fields for step 3 */}

              <div className="h-[45px] mt-[20px] ml-[520px]  font-Montserrat font-semibold leadding-[24px]  text-[20px] ">
                Register as
              </div>

              <div className="ml-[520px] mt-4  w-[119px]  h-[40px] rounded-full bg-[#ffffff] flex items-center justify-start text-[16px] font-[400]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4A037D] mx-2 mr-[15px]"></div>
                Seller
              </div>

              <div className="h-[45px] mt-[20px] ml-[125px]  font-Montserrat font-semibold leadding-[24px] text-[16px] ">
                You Continued with your email address Info.John@gmail.com
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]  mt-[15px]  ml-[50px]  ">
                <RegFormInputsShort placeholder="Enter your first name" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px]   ml-[353px]  ">
                <RegFormInputsShort placeholder="Enter your last name" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Your Phone Number" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Address Line 1" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Address Line 2" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]  ml-[50px]  ">
                <RegFormInputsShort placeholder="State" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[353px]  ">
                <RegFormInputsShort placeholder="Postal Code" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Country" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[105px] ml-[543px]  ">
                <button
                  className="absolute w-[94px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[6px]  bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]"
                  onClick={handleNextStep}
                >
                  Done
                </button>
              </div>

            </div>
          )}

          {currentStep === 4 && (
            <div>
              {/* Form fields for step 4 */}

              <div className="h-[45px] mt-[30px] ml-[530px]  font-Montserrat font-semibold leadding-[24px]  text-[20px] ">
                Register as
              </div>

              <div className="ml-[520px] mt-[10px] w-[119px]  h-[40px] rounded-full bg-[#ffffff] flex items-center justify-start text-[16px] font-[400]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4A037D] mx-2 mr-[15px]"></div>
                Seller
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[40px]   ml-[50px]  ">
                <RegFormInputs placeholder="Enter Your Store Name" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Select Main Category" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[60px]   ml-[50px]  ">
                <RegFormInputs placeholder="Select Sub Category/Categories" />
              </div>

              <div className="box-border flex flex-row   gap-[10px] mt-[50px] p-[14px 75px 14px 20px] mt-[60px]  ml-[50px]  ">
                <FormTextField placeholder="Store Description" />
              </div>

              <div className="box-border flex flex-row   gap-[10px] mt-[50px] p-[14px 75px 14px 20px] mt-[125px]  ml-[50px]  ">
                <DropDownZone
                //  placeholder="Address Line 2"
                />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[55px] ml-[543px]  ">
                <button
                  className="absolute w-[94px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[6px]  bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]"
                  onClick={showMessage}
                >
                  Done
                </button>
                {showPopup && (
                  <PopupMessage message="This is a popup message!" />
                )}
              </div>

            </div>
          )}

        </div>
      
    
  );
};

export default Register;
