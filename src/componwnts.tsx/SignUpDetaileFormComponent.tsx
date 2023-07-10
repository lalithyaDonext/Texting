import {
    DivFormContent,
    DivFormContentContainer, DivFormControllers, DivFormControlSocialMedia,
    DivFormHeader,
    DivFormHolder,
    DivFormSignInTitle, DivReset, SignInFormControllerContainer, SignInFormFooter, SocialMediaContainer
} from "../styles/tsx/Auth/AuthStyle";
import {Button, Form, Image ,Row,Col} from "react-bootstrap";
import ArrowLeft from "../images/icon/light/arrow/ArrowLeft.svg";
import '../styles/css/style.css'
import { SecondaryTitleMedium, TextP2SemiBold, TextP3Regular, TextP4Regular } from "../styles/TextStyle";
import { SocialMediaIcon, SocialMediaRound } from "./social_media_round";
import FaceBook from '../images/social_media/Facebook.svg'
import Google from '../images/social_media/Google.svg'
import Instagram from '../images/social_media/Instagram.svg'
import { FormFluid, FromGroupFluid } from "../styles/tsx/Style";
import StepperComponent from "./StepperComponent";
import SignUpToggleIcon from "./SignUpToggleIcon";
import '../Register/register.css'
import DropdownExample from "./SignUpDropdown";

const SignUpDetailFormComponent = () =>{
    return <DivFormHolder>

        <DivFormContent>
        <DivFormHeader>
                <Image src={ArrowLeft}/>
        </DivFormHeader>

        <DivFormContentContainer>
            
            {/* <DivFormSignInTitle>  */}
            <StepperComponent></StepperComponent>
            <TextP4Regular>Register as</TextP4Regular>
            <div style={{ width:'100%' , display:'flex' , justifyContent:'end' , alignItems:'end' , marginTop:'-10px'}}>
            <div className="toggle-icon-signup-container" style={{width:'119px', height:'44px' , backgroundColor:'#F9F9F9' , borderRadius: '30px',padding: '8px 18px 8px 10px' , alignItems:'center'}}>
                <div className="toggle-icon-signup-tumb" style={{width:'24px' , height:'24px' , borderRadius:'100%'}}></div>
                <div className="toggle-icon-signup-content">Seller</div>
              </div>
            </div>
                
                {/* <SecondaryTitleMedium>Login</SecondaryTitleMedium> */}
                
                {/* </DivFormSignInTitle> */}
                <TextP4Regular style={{display:'flex',flexDirection:'row',justifyContent:'end',alignItems:'end', textAlign:'end' , marginTop:'18px'}}>You Continued with your email address Info.John@gmail.com</TextP4Regular>
            <DivFormControllers>
            
               
                <FormFluid>
                    <SignInFormControllerContainer>
                        <FromGroupFluid>
                        <Row className="mb-3" style={{display:'flex',gap:'15px'}}>
                        <Form.Control className=" signup-form-input" type="email"
                                              placeholder="Enter your first name"/>

                        <Form.Control className="signup-form-input" type="email"
                                              placeholder="Enter your last name"/>
                        </Row>
                        <Form.Control className="mb-3 signup-form-input-large" type="email"
                                              placeholder="Your Phone Number"/>

                        <Form.Control className="mb-3 signup-form-input-large" type="email"
                                              placeholder="Addres line 1"/>

                        <Form.Control className="mb-3 signup-form-input-large" type="email"
                                              placeholder="Addres line 2"/>


                        <Row className="mb-3" style={{display:'flex',gap:'15px'}}>
                        <Form.Control className="signup-form-input" type="email"
                                              placeholder="State"/>

                        <Form.Control className="signup-form-input" type="email"
                                              placeholder="Postal Code"/>
                        </Row>

                        <DropdownExample/>
{/* 
                        <Form.Select  className="signup-form-input">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select> */}


                        </FromGroupFluid>
                        <Button className="btn-primary btn-sign-up-done-btn">Done</Button>

                     

                    </SignInFormControllerContainer>
                </FormFluid>    
            </DivFormControllers>
           
            
            
        </DivFormContentContainer>

        </DivFormContent>
    </DivFormHolder>
}

export default SignUpDetailFormComponent;