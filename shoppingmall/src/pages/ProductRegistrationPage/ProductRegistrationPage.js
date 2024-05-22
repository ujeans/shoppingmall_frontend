import React from "react";
import styled from "styled-components";
import ArrowButton from "../../components/commom/ArrowButton";
import HeaderText from "../../components/commom/HeaderText";
import ProductComponent from "../../components/commom/ProductComponent";
import CompletedButton from "../../components/commom/CompletedButton";

const ProductRegistrationPage = () => {
  const handleArrowClick = () => {
    console.log("화살표 클릭 로직 구현");
  };

  return (
    <RegistPageLayout>
      <RegistPageContainer>
        <ArrowButton onClick={handleArrowClick} />
        <HeaderText text="상품 등록" />
      </RegistPageContainer>
      <ProductContainer>
        <ProductComponent />
      </ProductContainer>
      <ButtonContainer>
        <CompletedButton text="작성 완료" />
      </ButtonContainer>
    </RegistPageLayout>
  );
};

export default ProductRegistrationPage;

const RegistPageLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const RegistPageContainer = styled.div`
  text-align: center;
  position: relative;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 100px;
`;
