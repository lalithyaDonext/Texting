import React, { useState } from "react";
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
    <div className="mt-[25px] ">
      <div className="  z-10">
        <div>
          
          {/* Progress Bar */}
          <div className="flex justify-between items-center ml-[300px] w-[330px]">
            {Array.from(Array(totalSteps), (_, index) => (
              <div className="flex items-center ">

                <div
                  key={index}
                  className={`w-[44px] h-[44px] flex justify-center items-center rounded-full border-2 ${
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

              <div className="h-[45px] mt-[10px] ml-[515px]  font-Montserrat font-semibold leadding-[44px] font-[20px] text-[25px] ">
                Register as
              </div>

              <div className="ml-[520px] mt-4  w-[119px]  h-[40px] rounded-full bg-gray-200 flex items-center justify-start text-[16px] font-[400]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4A037D] mx-2 mr-[15px]"></div>
                Seller
              </div>

              <div className="flex flex-col mt-[40px] ml-[121px]">

                <div className="ml-[150px] font-poppins text-[18px] leading-[24px] font-semibold">
                  Signup via social Media
                </div>

                <div className="flex flex-row ml-[80px] gap-12 mt-8">
                  <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
                    <img
                      className="w-[44px] h-[44px]"
                      src={Facebook}
                      alt-="insta"
                    />
                  </div>

                  <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
                    <img
                      className="w-[44px] h-[44px]"
                      src={Google}
                      alt-="insta"
                    />
                  </div>

                  <div className="flex flex-row justify-center items-center w-[76px] h-[76px] rounded-full border-[2px] border-[#F3D8FD] ">
                    <img
                      className="w-[44px] h-[44px]"
                      src={Insta}
                      alt-="insta"
                    />
                  </div>

                </div>

                <div className=" ml-[235px] mt-[30px] text-[#000000] text-opacity-[50%] text-[16px] leading-[24px] font-semibold">
                  Or
                </div>

                <div className="box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[20px]   ">
                  <FormInputs placeholder="Enter Your Email" />
                </div>

                <div className="box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[80px]  ">
                  <button
                    className="absolute w-[488px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[10px] hover: border-[1px] border-solid border-[#9F00D9] rounded-[10px] bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]"
                    onClick={handleNextStep}
                  >
                    Continue with Email
                  </button>
                </div>

                <div className=" ml-[180px] mt-[70px] text-[#000000] text-opacity-[50%] text-[16px] leading-[24px] font-semibold">
                  External Wallet
                </div>

                <div className="box-border flex flex-row  p-[14px 75px 14px 20px] gap-[10px]  mt-[20px]   ">
                  <button className="absolute w-[488px] h-[48px]  border-[1px] border-solid border-[#9F00D9] rounded-[10px] hover: border-[1px] border-solid border-[#9F00D9] rounded-[10px] bg-[#9F00D9] text-white font-semibold font-Montserrat  leading-[22px]">
                    Continue with Wallet
                  </button>
                </div>

              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              {/* Form fields for step 2 */}

              <div className="h-[45px] mt-[28px] ml-[340px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-[25px] ">
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
            <div>
              {/* Form fields for step 3 */}

              <div className="h-[45px] mt-[20px] ml-[520px]  font-Montserrat font-semibold leadding-[44px]  text-[25px] ">
                Register as
              </div>

              <div className="ml-[520px] mt-4  w-[119px]  h-[40px] rounded-full bg-gray-200 flex items-center justify-start text-[16px] font-[400]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4A037D] mx-2 mr-[15px]"></div>
                Seller
              </div>

              <div className="h-[45px] mt-[20px] ml-[85px]  font-Montserrat font-semibold leadding-[44px] text-[18px] ">
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

              <div className="h-[45px] mt-[28px] ml-[500px]  font-Montserrat font-semibold leadding-[44px]  text-[25px] ">
                Register as
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[50px]   ml-[50px]  ">
                <RegFormInputs placeholder="Enter Your Store Name" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[50px]   ml-[50px]  ">
                <RegFormInputs placeholder="Select Main Category" />
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[50px]   ml-[50px]  ">
                <RegFormInputs placeholder="Select Sub Category/Categories" />
              </div>

              <div className="box-border flex flex-row   gap-[10px] mt-[50px] p-[14px 75px 14px 20px] mt-[50px]  ml-[50px]  ">
                <FormTextField placeholder="Store Description" />
              </div>

              <div className="box-border flex flex-row   gap-[10px] mt-[50px] p-[14px 75px 14px 20px] mt-[113px]  ml-[50px]  ">
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
      </div>
    </div>
  );
};

export default Register;
