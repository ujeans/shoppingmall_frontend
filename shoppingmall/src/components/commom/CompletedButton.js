import React from "react";
import styled from "styled-components";

const CompletedButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default CompletedButton;

const Button = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background: #eb4646;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
