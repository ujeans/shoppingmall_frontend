import React from "react";
import styled from "styled-components";

const CompletedButton = ({ text, onClick }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>{text}</Button>
    </Wrapper>
  );
};

export default CompletedButton;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1090px;
`;

const Button = styled.button`
  display: inline-block;
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  border: none;
  border-radius: 10px;
  margin: 120px 0 45px 0;
  background: #eb4646;
  color: white;
  cursor: pointer;
`;
