import React from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/LeftArrow.svg";

const ArrowButton = ({ onClick }) => {
  return (
    <ArrowContainer onClick={onClick}>
      <CustomArrow src={LeftArrowIcon} alt="Left Arrow" />
    </ArrowContainer>
  );
};

export default ArrowButton;

const ArrowContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

const CustomArrow = styled.img`
  width: 20px;
  height: 20px;
`;
