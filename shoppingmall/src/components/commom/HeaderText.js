import React from "react";
import styled from "styled-components";

const HeaderText = ({ text }) => {
  return <HeaderContainer>{text}</HeaderContainer>;
};

export default HeaderText;

const HeaderContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 29.05px;
`;
