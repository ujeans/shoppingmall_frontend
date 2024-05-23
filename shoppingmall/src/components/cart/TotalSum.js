import React from "react";
import styled from "styled-components";

const TotalSum = () => {
  return (
    <>
      <ProductsListWrapper>
        <ListHeader>
          <PaymentText>총 주문금액</PaymentText>
          <PaymentText>총 주문금액</PaymentText>
          <PaymentText>총 결제금액</PaymentText>
        </ListHeader>
        <PaymentWrapper>
          <PaymentText>
            <Box>
              <PaymentPrice>179,000원</PaymentPrice>
              <TotalCount>총 1개</TotalCount>
            </Box>
          </PaymentText>
          <PaymentText>
            <PaymentPrice>0원</PaymentPrice>
          </PaymentText>
          <PaymentText>
            <PaymentPrice>179,000원</PaymentPrice>
          </PaymentText>
        </PaymentWrapper>
      </ProductsListWrapper>
    </>
  );
};

export default TotalSum;

const ProductsListWrapper = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;

  &.empty-cart {
    display: flex;
    justify-content: center;
  }
`;

const ListHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const PaymentText = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
`;

const PaymentWrapper = styled.div`
  display: flex;
  padding: 30px 0;
  border-top: 1px solid #d1d4d8;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaymentPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TotalCount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`;
