import styled from "styled-components";
// styles
import { Container, Header } from "../../style/CommonStyles";

const TotalSum = () => {
  return (
    <Container borderBottom={true}>
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

const PaymentText = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
`;

const PaymentWrapper = styled.div`
  display: flex;
  padding: 30px 0;
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
