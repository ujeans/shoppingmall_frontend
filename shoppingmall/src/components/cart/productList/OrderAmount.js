import styled from "styled-components";
// styles
import { BlackBtn } from "../../../style/CommonStyles";

const OrderAmount = ({ totalPrice }) => {
  return (
    <Container>
      <OrderPrice>{totalPrice.toLocaleString()}원</OrderPrice>
      <BlackBtn padding="10px 12px">BUY NOW</BlackBtn>
    </Container>
  );
};

export default OrderAmount;

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderPrice = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
