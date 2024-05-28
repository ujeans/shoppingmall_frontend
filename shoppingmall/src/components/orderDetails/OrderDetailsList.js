import styled from "styled-components";
// styles
import { Container, Header } from "../../style/CommonStyles";

const OrderDetailsList = ({ orderItems }) => {
  const formatOrderNumber = (orderId, date) => {
    let formattedDate;
    try {
      formattedDate = new Date(date)
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "");
    } catch (error) {
      formattedDate = "00000000"; // 기본값
    }
    return `ORD${formattedDate}-${String(orderId).padStart(7, "0")}`;
  };

  return (
    <Container borderBottom={false}>
      <Header>
        <OrderDate>주문일</OrderDate>
        <OrderDetails>주문내역</OrderDetails>
        <OrderNumber>주문번호</OrderNumber>
        <PaymentAmount>결제금액</PaymentAmount>
      </Header>
      {orderItems.map((item, index) => {
        const totalPayment = item.price * item.quantity;
        const orderNumber = formatOrderNumber(
          item.orderedItemId,
          item.created_at
        );

        return (
          <ListWrapper key={index}>
            <OrderDate>{item.created_at}</OrderDate>
            <OrderDetailsItem>
              <Image src={item.image || ""} alt={item.name} />
              <div>{item.name}</div>
            </OrderDetailsItem>
            <OrderNumberItem>{orderNumber}</OrderNumberItem>
            <PaymentAmount>{totalPayment.toLocaleString()}원</PaymentAmount>
          </ListWrapper>
        );
      })}
    </Container>
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
