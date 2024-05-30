import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/leftarrow.svg";
import { Navigate } from "react-router-dom";
const HeaderArea = ({ text }) => {
  const [handleArrow, setHandleArrow] = useState(false);

  const handleArrowClick = () => {
    setHandleArrow(true);
  };

  if (handleArrow) {
    return <Navigate to="/mypage" />;
  }

  return (
    <Wrapper>
      <ArrowContainer onClick={handleArrowClick}>
        <CustomArrow src={LeftArrowIcon} alt="Left Arrow" />
      </ArrowContainer>
      <HeaderText>{text}</HeaderText>
    </Wrapper>
  );
};

export default HeaderArea;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ArrowContainer = styled.div`
  margin: 57px 461px 54px 8px;
  cursor: pointer;
`;

const CustomArrow = styled.img`
  width: 8px;
  height: 15px;
`;

const HeaderText = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 29.05px;
`;
