import React from "react";
import styled from "styled-components";

const SellFilter = ({ isActive, toggleSellingStatus }) => {
  return (
    <ButtonContainer>
      <FilterButton onClick={toggleSellingStatus} isActive={isActive}>
        판매중
      </FilterButton>
    </ButtonContainer>
  );
};

export default SellFilter;

const ButtonContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#ffffff")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #d1d4d8;
  width: 80px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
