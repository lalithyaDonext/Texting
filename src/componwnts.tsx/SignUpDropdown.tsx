import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormSelect = styled(Form.Select)`
  color: #00000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding:10px 18px;
`;

const DropdownExample = ({ placeholder, option }: any) => {
  const [selectedOption, setSelectedOption] = useState('hi');

  const handleChange = ({event}:any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledFormSelect
      className="mb-3 signup-form-input-large"
      value={selectedOption}
      onChange={handleChange}
      placeholder={placeholder}
    >
      <option value="" selected>{placeholder}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </StyledFormSelect>
  );
};


export default DropdownExample;
