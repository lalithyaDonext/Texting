import React from 'react';
import styled from 'styled-components';

interface ToggleIconProps {
  active?: boolean;
}

const ToggleIconContainer = styled.div`
  display: flex;
  padding: 8px 18px 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 23px;
  border-radius: 30px;
  background: var(--bg-grey, #F9F9F9);
`;

const ToggleThumb = styled.div`
  width: 24px;
  height: 24px;
  fill: var(--primary-colour-dark, #4A037D);
`;

const SignUpToggleIcon: React.FC<ToggleIconProps> = ({ active }) => {
  return (
    <ToggleIconContainer>
      {active ? <ToggleThumb>{active}</ToggleThumb> : null}
      <span>{active ? 'ON' : 'OFF'}</span>
    </ToggleIconContainer>
  );
};

export default SignUpToggleIcon;
