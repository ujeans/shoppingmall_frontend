import styled from "styled-components";
// components
import ContentLayout from "../../components/commom/ContentLayout";
// styles
import { Container, Header } from "../../style/CommonStyles";

const OrderDetailsPage = () => {
  return (
    <ContentLayout title={"주문내역"} width="1000px">
      <Container>
        <Header>
          <OrderDate>주문일</OrderDate>
          <OrderDetails>주문내역</OrderDetails>
          <OrderNumber>주문번호</OrderNumber>
          <PaymentAmount>결제금액</PaymentAmount>
        </Header>
      </Container>
    </ContentLayout>
  );
};

export default OrderDetailsPage;

const OrderDate = styled.div``;

const OrderDetails = styled.div``;

const OrderNumber = styled.div``;

const PaymentAmount = styled.div``;
