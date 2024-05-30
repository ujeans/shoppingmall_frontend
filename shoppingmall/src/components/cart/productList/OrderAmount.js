import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import { BlackBtn } from "../../../style/CommonStyles";
// components
import Modal from "../../commom/Modal/Modal";

const OrderAmount = ({ product, totalPrice, onRemoveItem }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToPage = () => {
    navigate("/");
  };

  const handleOrder = async () => {
    const requestBody = {
      quantity: product.quantity,
      totalAmount: totalPrice,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/order/${product.cartItemId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("결제에 실패했습니다.");
      }

      onRemoveItem();
      setIsOpen(true);
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다:", error);
    }
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
          subText={`총 결제 금액: ${totalPrice.toLocaleString()}원, 결제되었습니다. 홈으로 이동하시겠습니까?`}
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
