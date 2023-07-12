import {
    DivFormContent,
    DivFormContentContainer, DivFormControllers, DivFormControlSocialMedia,
    DivFormHeader,
    DivFormHolder,
    DivFormSignInTitle, DivReset, DivSignUpFormContentContainer, SignInFormControllerContainer, SignInFormFooter, SignUpFormControllerContainer, SocialMediaContainer
} from "../styles/tsx/Auth/AuthStyle";
import {Button, Form, Image} from "react-bootstrap";
import ArrowLeft from "../images/icon/light/arrow/ArrowLeft.svg";
import '../styles/css/style.css'
import { SecondaryTitleMedium, TextP2SemiBold, TextP3Regular, TextP4Regular } from "../styles/TextStyle";
import { SocialMediaIcon, SocialMediaRound } from "./social_media_round";
import FaceBook from '../images/social_media/Facebook.svg'
import Google from '../images/social_media/Google.svg'
import Instagram from '../images/social_media/Instagram.svg'
import { FormFluid, FromGroupFluid, SignUpFromGroupFluid } from "../styles/tsx/Style";
import StepperComponent from "./StepperComponent";
import SignUpToggleIcon from "./SignUpToggleIcon";
import '../Register/register.css'

const SignUpComponents = () => {
    return <DivFormHolder>

        <DivFormContent>
        <DivFormHeader>
                <Image src={ArrowLeft}/>
        </DivFormHeader>

        <DivSignUpFormContentContainer>
            
            {/* <DivFormSignInTitle>  */}
            <StepperComponent></StepperComponent>

            <div style={{ display: 'flex',flexDirection:'column',gap:'16px'}}>
            <TextP4Regular>Register as</TextP4Regular>
            <div style={{ width:'100%' , display:'flex' , justifyContent:'end' , alignItems:'end'}}>
            <div className="toggle-icon-signup-container" style={{width:'119px', height:'44px' , backgroundColor:'#F9F9F9' , borderRadius: '30px',padding: '8px 18px 8px 10px' , alignItems:'center'}}>
                <div className="toggle-icon-signup-tumb" style={{width:'24px' , height:'24px' , borderRadius:'100%'}}></div>
                <div className="toggle-icon-signup-content">Seller</div>
              </div>
            </div>
            </div> 
                {/* <SecondaryTitleMedium>Login</SecondaryTitleMedium> */}
                
                {/* </DivFormSignInTitle> */}
            <DivFormControllers>
                <DivFormControlSocialMedia>

                    <TextP2SemiBold>Signup via social Media</TextP2SemiBold>
                    <SocialMediaContainer>
                    <SocialMediaRound><SocialMediaIcon src={FaceBook}/></SocialMediaRound>
                    <SocialMediaRound><SocialMediaIcon src={Google}/></SocialMediaRound>
                    <SocialMediaRound><SocialMediaIcon src={Instagram}/></SocialMediaRound>
                    </SocialMediaContainer>
                </DivFormControlSocialMedia>
                {/* <TextP3Regular>Or</TextP3Regular> */}
                <FormFluid>
                    <SignUpFormControllerContainer>
                        <div style={{gap:'12px', display:'flex', flexDirection: 'column', alignItems:'center'}}>
                        <TextP3Regular>Or</TextP3Regular>

                        <SignUpFromGroupFluid>
                            <Form.Control className="signup-input" type="email"
                                              placeholder="Enter Your email"/>

                        </SignUpFromGroupFluid>

                        <Button className="btn-primary btn-sign-up" variant="primary" size="lg" style={{alignItems:'center'}}>
                        Continue with Email
                        </Button>
                        </div>

                        <div style={{gap:'12px', display:'flex', flexDirection: 'column', alignItems:'center'}}>
                        <div style={{ width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <TextP3Regular  >External Wallet</TextP3Regular>
                        </div>

                        <Button className="btn-primary btn-sign-up" variant="primary" size="lg" style={{alignItems:'center'}}>
                        Connect with Wallet
                        </Button>
                        </div>

                    </SignUpFormControllerContainer>
                </FormFluid>    
            </DivFormControllers>
           
            
            
        </DivSignUpFormContentContainer>

        </DivFormContent>
    </DivFormHolder>
}

export default SignUpComponents