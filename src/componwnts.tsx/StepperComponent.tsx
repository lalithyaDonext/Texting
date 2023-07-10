import React from 'react';
import styled from 'styled-components';

interface NumberCircleProps {
  isFirst?: boolean;
}

const NumberCircle = styled.div<NumberCircleProps>`
  width: 44px;
  height: 44px;
  display: flex;
  fill: var(--primary-colour-light, #F3D8FD);
  border: 1px solid ${({ isFirst }) => (isFirst ? '#4A037D' : '#CBCBCB')};
  border-radius: 50%;
  background-color: ${({ isFirst }) => (isFirst ? '#F3D8FD' : 'transparent')};
  justify-content: center;
  align-items: center;
  color: var(--primary-colour-dark, #4A037D);

  /* Texts/P2/Semi Bold */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const Line = styled.div`
  width: 55.002px;
  height: 2px;
  background: #4A037D;
`;

const StepLine = styled.div`
  display: flex;
  align-items: center;

  ${NumberCircle}:not(:last-child) {
    margin-right: 0px;
  }

  ${Line}:not(:last-child) {
    margin-right: 0px;
  }
`;

const StepperComponent: React.FC = () => {
  return (
    <StepLine>
      <NumberCircle isFirst>1</NumberCircle>
      <Line />
      <NumberCircle>2</NumberCircle>
      <Line />
      <NumberCircle>3</NumberCircle>
      <Line />
      <NumberCircle>4</NumberCircle>
    </StepLine>
  );
};

export default StepperComponent;
