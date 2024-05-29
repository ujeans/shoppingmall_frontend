import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import { BlackBtn } from "../../../style/CommonStyles";
// components
import Modal from "../../commom/Modal/Modal";

const OrderAmount = ({ product, totalPrice, onOrder }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOrder = async () => {
    const orderedItems = await onOrder();
    console.log("Checkout Ordered Items: ", orderedItems); // 주문된 아이템 로그
    // openModal();
  };

  return (
    <Container>
      {product.stock === 0 ? (
        <SoldOutText>sold out</SoldOutText>
      ) : (
        <>
          <OrderPrice>{totalPrice.toLocaleString()}원</OrderPrice>
          <BlackBtn padding="10px 12px" onClick={handleOrder}>
            BUY NOW
          </BlackBtn>
        </>
      )}
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          title="결제금액"
          subText={`총 결제 금액: ${totalPrice.toLocaleString()}원, 결제하시겠습니까?`}
          // navigateToPage={navigateToPage}
        />
      )}
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

const SoldOutText = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const OrderPrice = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
