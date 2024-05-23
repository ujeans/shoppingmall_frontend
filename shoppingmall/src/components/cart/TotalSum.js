import React from "react";
import styled from "styled-components";

const TotalSum = () => {
  return (
    <Container>
      <Header>
        <PaymentText>총 주문금액</PaymentText>
        <PaymentText>총 주문금액</PaymentText>
        <PaymentText>총 결제금액</PaymentText>
      </Header>
      <PaymentWrapper>
        <PaymentText>
          <PaymentBox>
            <PaymentPrice>179,000원</PaymentPrice>
            <TotalCount>총 1개</TotalCount>
          </PaymentBox>
        </PaymentText>
        <PaymentText>
          <PaymentPrice>0원</PaymentPrice>
        </PaymentText>
        <PaymentText>
          <PaymentPrice>179,000원</PaymentPrice>
        </PaymentText>
      </PaymentWrapper>
    </Container>
  );
};

export default TotalSum;

const Container = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;

const Header = styled.div`
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
  border-top: 1px solid ${props => props.theme.border};
`;

const PaymentBox = styled.div`
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
