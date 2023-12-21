import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: darkred;
  }
`;

const RadioButton = (props) => {
  const { label } = props;

  return <StyledButton>{label}</StyledButton>;
};

export default RadioButton;
