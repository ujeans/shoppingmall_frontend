import React, { useState } from "react";
import styled from "styled-components";

const FilterArea = ({ onFilterClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 필터 클릭 시 SellPage로 값을 전달

    setIsActive((prevStatus) => !prevStatus);
    const dataToSend = isActive;
    onFilterClick(dataToSend);
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <FilterButton onClick={handleClick} isActive={isActive}>
          판매중
        </FilterButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default FilterArea;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 31px;
`;

const ButtonContainer = styled.div`
  text-align: left;
  margin: 10px;
`;

const FilterButton = styled.button`
  width: 80px;
  height: 30px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: center;
  border: 1px solid #d1d4d8;
  border-radius: 15px;
  margin: 0;
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#ffffff")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
