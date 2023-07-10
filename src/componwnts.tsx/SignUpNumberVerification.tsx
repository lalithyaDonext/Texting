import {
    DivFormContent,
    DivFormContentContainer, DivFormControllers, DivFormControlSocialMedia,
    DivFormHeader,
    DivFormHolder,
    DivFormSignInTitle, DivReset, OtpCodeBoxField, OtpCodeContainer, SignInFormControllerContainer, SignInFormFooter, SocialMediaContainer
} from "../styles/tsx/Auth/AuthStyle";
import {Button, Form, Image} from "react-bootstrap";
import ArrowLeft from "../images/icon/light/arrow/ArrowLeft.svg";
import '../styles/css/style.css'
import { SecondaryTitleMedium, TextH3Semibold, TextP2Dark, TextP2Regular, TextP2SemiBold, TextP3Dark, TextP3Regular, TextP4Regular } from "../styles/TextStyle";
import { SocialMediaIcon, SocialMediaRound } from "./social_media_round";
import FaceBook from '../images/social_media/Facebook.svg'
import Google from '../images/social_media/Google.svg'
import Instagram from '../images/social_media/Instagram.svg'
import { FormFluid, FromGroupFluid } from "../styles/tsx/Style";
import StepperComponent from "./StepperComponent";
import SignUpToggleIcon from "./SignUpToggleIcon";
import '../Register/register.css'

const SignUpNumberVerification = () => {
  return <DivFormHolder>

        <DivFormContent>
        <DivFormHeader>
                <Image src={ArrowLeft}/>
        </DivFormHeader>

        <DivFormContentContainer>
            
            {/* <DivFormSignInTitle>  */}
            <StepperComponent></StepperComponent>
            <div style={{marginTop:'-64px'}} >
            <TextH3Semibold>Verify Your Phone Number</TextH3Semibold>
            </div>
            <div style={{width:'430px' , height:'42px' , display:'flex' , flexDirection:'column', justifyContent:'end',alignItems:'end'}}>
            <TextP3Regular>we have sent you a code into your phone number ended with</TextP3Regular>
            <TextP3Regular>**********45. please type it below and confirm</TextP3Regular>
            </div>
                
            <DivFormControllers>
                <DivFormControlSocialMedia style={{marginTop:'-50px'}}>
                    <OtpCodeContainer>
                    <OtpCodeBoxField></OtpCodeBoxField>
                    <OtpCodeBoxField></OtpCodeBoxField>
                    <OtpCodeBoxField></OtpCodeBoxField>
                    <OtpCodeBoxField></OtpCodeBoxField>
                    <OtpCodeBoxField></OtpCodeBoxField>
                    </OtpCodeContainer>
                </DivFormControlSocialMedia>
                   
            </DivFormControllers>
            <div style={{ width:'230px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',alignItems:'end' }}>
            <Button className="btn-primary btn-verify-btn" variant="primary" size="lg" style={{ alignItems: 'end', display: 'flex', flexDirection: 'row' }}>
                Verify Phone Number
            </Button>
            </div>

            <SignInFormFooter style={{display:'flex' , flexDirection:'column' }}>
                <TextP2Dark className="text-Black">Didn’t receive code?</TextP2Dark>
                <TextP3Dark className="text-primary" style={{marginTop:'8px'}}>Resend Code</TextP3Dark>
               
            </SignInFormFooter>
            
            </DivFormContentContainer>
            

           
            
            
       

        </DivFormContent>
    </DivFormHolder>
  
}

export default SignUpNumberVerification