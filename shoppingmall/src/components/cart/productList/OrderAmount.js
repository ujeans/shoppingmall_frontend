import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import { BlackBtn } from "../../../style/CommonStyles";
// components
import Modal from "../../commom/Modal/Modal";

const OrderAmount = ({ totalPrice }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToPage = () => {
    navigate("/order-details");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <OrderPrice>{totalPrice.toLocaleString()}원</OrderPrice>
      <BlackBtn padding="10px 12px" onClick={openModal}>
        BUY NOW
      </BlackBtn>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          title="결제금액"
          subText={`총 결제 금액: ${totalPrice.toLocaleString()}원, 결제하시겠습니까?`}
          navigateToPage={navigateToPage}
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

const OrderPrice = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
