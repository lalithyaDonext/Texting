import styled from "styled-components";
import SliderBg from '../../../images/Background/SliderBg.svg'


/*=======================================================================
 SliderComponent
=========================================================================*/
export const DivSliderHolder = styled.div`
  max-width: 43rem !important;
  width: 100%;
  height: 100%;
  background:rgba(255, 255, 255, 0.25);
  background-image: url(${SliderBg});
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: start;
  overflow: hidden;
  border: none;
  background-size: cover;
  position: relative;
  @media (max-width: 992px) {
    display: none;
  }
`;


/*=======================================================================
 Sign Form
=========================================================================*/
export const DivFormHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 32px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 576px) {
    padding-left: 3px;
    padding-right: 3px;
  }
`;

export const DivFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 32px;
  gap: 24px;
  background: rgba(255, 255, 255, 0.25);

  border-radius: 22px;
  max-width: 686px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    gap: 10px;
  }
`;


export const DivFormHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100%;
`;
export const DivFormSignInTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    justify-content: center;
  }
`;

export const DivFormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  gap: 60px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    gap: 15px;
  }
  @media only screen and (max-width: 1400px)
  {
    gap: 25px;
  }
`;

export const DivSignUpFormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  gap: 30px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    gap: 15px;
  }
  @media only screen and (max-width: 1400px)
  {
    gap: 25px;
  }
`;

export const DivFormControllers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
`;
export const DivFormControlSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 27px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    padding-left: 0px;
    padding-right: 0px;
  }
`;


export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: 36px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    gap: 28px;
  }
  @media only screen and (max-width: 348px)
  {
    gap: 20px;
  }
`;

export const OtpCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  padding: 0px;
  gap: 31px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    gap: 24px;
  }
  @media only screen and (max-width: 348px)
  {
    gap: 16px;
  }
`;

export const OtpCodeBoxField = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 4px;
  background: #FFF;

  @media only screen and (max-width: 576px) {
    height: 60px;
    width: 60px;
  }

  @media only screen and (max-width: 348px) {
    height: 40px;
    width: 40px;
  }
`;



export const SignInFormControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 26px;
  max-width: 623px;
  width: 100% !important;
`;

export const SignUpFormControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 26px;
  max-width: 623px;
  width: 100% !important;
`;

export const DivReset = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 576px)
  {
    justify-content: center;
    text-align: center;
  }
`;

export const SignInFormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: flex-end;
  @media only screen and (max-width: 576px)
  {
    justify-content: center;
    text-align: center;
  }
`;


