import styled from "styled-components";

export const UnikSlideContainer = styled.div`
  position: relative;
  left:300px
  width: 745px !important;
  height: 982px !important;
`;
export const UnikSliderImage = styled.img`
  position: absolute;
  
  width: 745px !important;
  //height: 516px !important;
  top: 20px;
  // left:00px
  right: 0;
  @media only screen and (max-width: 1400px)
  {
    width: 545px !important;
    //height: 416px !important;
    top: -10px;
    right: 0;
  }
 
`;

export const UnikTestimonial = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 0;
  width: 480px;
  background: rgba(255, 255, 255, 0.28);
  color: white;
  border-radius: 26px;
  font-size:16px;
  fon-family: 'Poppins';
  position: absolute;
  top: 330px;
  right: 120px;
  @media only screen and (max-width: 1400px)
  {
    width: 430px; !important;
    top: 280px;
    right: 120px;
  }
`;

export const SlickContainer = styled.div`
  position: absolute;
  top: 100px;
`;