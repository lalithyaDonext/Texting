import {
  DivFormContent,
  DivFormContentContainer,
  DivFormControllers,
  DivFormControlSocialMedia,
  DivFormHeader,
  DivFormHolder,
  DivFormSignInTitle,
  DivReset,
  SignInFormControllerContainer,
  SignInFormFooter,
  SocialMediaContainer,
} from "../styles/tsx/Auth/AuthStyle";
import { Button, Form, Image, Row, Col } from "react-bootstrap";
import ArrowLeft from "../images/icon/light/arrow/ArrowLeft.svg";
import "../styles/css/style.css";
import {
  SecondaryTitleMedium,
  TextP2SemiBold,
  TextP3Regular,
  TextP4Regular,
} from "../styles/TextStyle";
import { FormFluid, FromGroupFluid } from "../styles/tsx/Style";
import StepperComponent from "./StepperComponent";
import "../Register/register.css";
import DropdownExample from "./SignUpDropdown";
import { Upload } from "react-iconly";

const SignUpStepTwo = () => {
  return (
    <DivFormHolder>
      <DivFormContent>
        <DivFormHeader>
          <Image src={ArrowLeft} />
        </DivFormHeader>

        <DivFormContentContainer>
          {/* <DivFormSignInTitle>  */}
          <StepperComponent></StepperComponent>
          <TextP4Regular>Register as</TextP4Regular>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              marginTop: "-10px",
            }}
          >
            <div
              className="toggle-icon-signup-container"
              style={{
                width: "119px",
                height: "44px",
                backgroundColor: "#F9F9F9",
                borderRadius: "30px",
                padding: "8px 18px 8px 10px",
                alignItems: "center",
              }}
            >
              <div
                className="toggle-icon-signup-tumb"
                style={{ width: "24px", height: "24px", borderRadius: "100%" }}
              ></div>
              <div className="toggle-icon-signup-content">Seller</div>
            </div>
          </div>

          <DivFormControllers>
            <FormFluid>
              <SignInFormControllerContainer>
                <FromGroupFluid>
                  <Form.Control
                    className="mb-3 signup-form-input-large"
                    type="email"
                    placeholder="Enter Your Store Name"
                  />

                  <DropdownExample placeholder="Select Main Category" />

                  <DropdownExample placeholder="Select Sub Category/Categories" />

                  <Form.Control
                    className="mb-3 signup-form-input-text-area"
                    as="textarea"
                    rows={3}
                    placeholder="Store Description"
                  />

                  <Form.Group className="mb-3 signup-form-input-image">
                    
                    <Form.Control type="file" className="form-control-file"/>
                    <Form.Label>
                        <Upload size={32} stroke="light"/>
                        <div className="signup-form-input-image-title">
                      click here to upload your logo or drag and drop
                      </div>
                    </Form.Label>
                  </Form.Group>
                </FromGroupFluid>
                <Button className="btn-primary btn-sign-up-done-btn">
                  Done
                </Button>
              </SignInFormControllerContainer>
            </FormFluid>
          </DivFormControllers>
        </DivFormContentContainer>
      </DivFormContent>
    </DivFormHolder>
  );
};

export default SignUpStepTwo;
