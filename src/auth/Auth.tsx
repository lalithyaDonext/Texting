import React from "react";
import "../styles/css/auth/AuthStyle.css";
import "../styles/css/style.css";
import { Container, Col, Row } from "react-bootstrap";
import { DivSliderHolder } from "../styles/tsx/Auth/AuthStyle";
import SliderComponent from "../componwnts.tsx/SliderComponents";
import SignInComponent from "../componwnts.tsx/SignInComponent";
import SignUpComponents from "../componwnts.tsx/SignUpComponents";
import SignUpNumberVerification from "../componwnts.tsx/SignUpNumberVerification";
import SignUpDetailFormComponent from "../componwnts.tsx/SignUpDetaileFormComponent";
import UnikLogoImage from "../images/unik-logo.webp";
import { UnikLogo } from "../styles/tsx/Style";
import SignUpStepTwo from "../componwnts.tsx/SignUpStepTwo";
import SelectionComponent from "../componwnts.tsx/SelectionComponent";

const Auth = () => {
  return (
    <Container fluid>
      <Row
        style={{ overflowX: "hidden", position: "relative", display: "flex" }}
      >
        <span id="blur-eclipse-three" className="blur-eclipse" />
        <span id="blur-eclipse-two" className="blur-eclipse" />
        <span id="blur-eclipse-one" className="blur-eclipse" />
        <UnikLogo src={UnikLogoImage} />
        <div style={{ padding: 0, width: "50%" }}>
          <DivSliderHolder>
            <div style={{ width: "100%", height: "100vh" }}>
              <SliderComponent />
            </div>
          </DivSliderHolder>
        </div>
        <div style={{ minHeight: "100vh", width: "50%" }}>
          <div style={{ height: "100vh" }}>
            <SelectionComponent />
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Auth;
