import {
    DivFormContent,
    DivFormContentContainer, DivFormControllers, DivFormControlSocialMedia,
    DivFormHeader,
    DivFormHolder,
    DivFormSignInTitle, DivReset, SignInFormControllerContainer, SignInFormFooter, SocialMediaContainer
} from "../styles/tsx/Auth/AuthStyle";
import {Button, Form, Image} from "react-bootstrap";
import ArrowLeft from "../images/icon/light/arrow/ArrowLeft.svg";
import '../styles/css/style.css'
import { SecondaryTitleMedium, TextP2SemiBold, TextP3Regular } from "../styles/TextStyle";
import { SocialMediaIcon, SocialMediaRound } from "./social_media_round";
import FaceBook from '../images/social_media/Facebook.svg'
import Google from '../images/social_media/Google.svg'
import Instagram from '../images/social_media/Instagram.svg'
import { FormFluid, FromGroupFluid } from "../styles/tsx/Style";

const SignInComponent = () =>{
    return <DivFormHolder>

        <DivFormContent>
        <DivFormHeader>
                <Image src={ArrowLeft}/>
        </DivFormHeader>

        <DivFormContentContainer>
            <DivFormSignInTitle> <SecondaryTitleMedium>Login</SecondaryTitleMedium></DivFormSignInTitle>
            <DivFormControllers>
                <DivFormControlSocialMedia>
                    <TextP2SemiBold>Login With</TextP2SemiBold>
                    <SocialMediaContainer>
                    <SocialMediaRound><SocialMediaIcon src={FaceBook}/></SocialMediaRound>
                    <SocialMediaRound><SocialMediaIcon src={Google}/></SocialMediaRound>
                    <SocialMediaRound><SocialMediaIcon src={Instagram}/></SocialMediaRound>
                    </SocialMediaContainer>
                </DivFormControlSocialMedia>
                <TextP3Regular>Or</TextP3Regular>
                <FormFluid>
                    <SignInFormControllerContainer>
                        <FromGroupFluid>
                            <Form.Control className="login-input" type="email"
                                              placeholder="Enter Your email"/>

                        </FromGroupFluid>
                        <DivReset>
                            <TextP3Regular>Forgot Password? <span
                                    className="text-primary">Reset Here</span></TextP3Regular>
                        </DivReset>
                        <Button className="btn-primary btn-sign-in">Take me in!</Button>

                    </SignInFormControllerContainer>
                </FormFluid>    
            </DivFormControllers>
            <SignInFormFooter>
                <TextP3Regular >Don’t have an account?<br/> <span
                        className="text-primary">Register Here</span></TextP3Regular>

            </SignInFormFooter>
            
            
        </DivFormContentContainer>

        </DivFormContent>
    </DivFormHolder>
}

export default SignInComponent;