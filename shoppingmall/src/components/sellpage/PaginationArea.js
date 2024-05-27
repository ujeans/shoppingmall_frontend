import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/leftarrow.svg";

const PaginationArea = () => {
  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  return (
    <Wrapper>
      <PaginationContainer>
        <PageButton
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
        >
          <ArrowIcon src={LeftArrowIcon} alt="Previous" />
        </PageButton>
        {pages.map((page, index) => (
          <PageButton
            key={index}
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}
          >
            {page}
          </PageButton>
        ))}
        <PageButton
          onClick={() =>
            onPageChange(
              currentPage < pages.length ? currentPage + 1 : pages.length
            )
          }
        >
          <ArrowIcon src={LeftArrowIcon} alt="Next" flipped />
        </PageButton>
      </PaginationContainer>
    </Wrapper>
  );
};

export default PaginationArea;

const Wrapper = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 120px 26px 0;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;

const ArrowIcon = styled.img`
  width: 7px;
  height: 15px;
  transform: ${(props) => (props.flipped ? "scaleX(-1)" : "none")};

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
