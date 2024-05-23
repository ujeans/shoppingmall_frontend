import React from "react";
import styled from "styled-components";

const OrderAmount = ({ product }) => {
  return (
    <Container>
      <OrderPrice>{product.price}원</OrderPrice>
      <OrderBtn>BUY NOW</OrderBtn>
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

const OrderBtn = styled.button`
  padding: 10px 12px;
  border: none;
  color: white;
  background-color: ${props => props.theme.mainColor};
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;
