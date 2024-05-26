import styled from "styled-components";
// styles
import { Header } from "../../style/CommonStyles";

const OrderDetailsList = () => {
  return (
    <>
      <Header>
        <OrderDate>주문일</OrderDate>
        <OrderDetails>주문내역</OrderDetails>
        <OrderNumber>주문번호</OrderNumber>
        <PaymentAmount>결제금액</PaymentAmount>
      </Header>
      <ListWrapper>
        <OrderDate>2024-05-23</OrderDate>
        <OrderDetailsItem>
          <Image></Image>
          <div>상품이름</div>
        </OrderDetailsItem>
        <OrderNumberItem>2024-05-23</OrderNumberItem>
        <PaymentAmount>173,000원</PaymentAmount>
      </ListWrapper>
    </>
  );
};

export default OrderDetailsList;

const CommonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "auto"};
`;

const OrderDate = styled(CommonStyle)`
  width: 15%;
`;

const OrderDetails = styled(CommonStyle)`
  width: 45%;
`;

const OrderDetailsItem = styled(CommonStyle)`
  width: 45%;
  justify-content: flex-start;
`;

const OrderNumber = styled(CommonStyle)`
  width: 25%;
`;

const OrderNumberItem = styled(CommonStyle)`
  width: 25%;
  font-weight: bold;
`;

const PaymentAmount = styled(CommonStyle)`
  width: 15%;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.border};
  color: #4c4c4c;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
  background-color: #f4f4f4;
`;
