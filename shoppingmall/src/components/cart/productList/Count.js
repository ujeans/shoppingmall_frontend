import styled from "styled-components";
// assets
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

const Count = ({ quantity, onUpdateCount, disabled, product }) => {
  const token = localStorage.getItem("login-token");

  const handleDecrease = async () => {
    if (!disabled && quantity > 1) {
      const newQuantity = product.quantity - 1;
      await updateQuantity(newQuantity);
    }
  };

  const handleIncrease = async () => {
    if (!disabled) {
      const newQuantity = product.quantity + 1;
      await updateQuantity(newQuantity);
    }
  };

  const updateQuantity = async newQuantity => {
    try {
      const requestBody = {
        productId: product.productId,
        quantity: newQuantity,
        totalprice: product.price * newQuantity,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart/${product.cartItemId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onUpdateCount(newQuantity);
    } catch (error) {
      console.error("수량 업데이트 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <CountBox onClick={handleDecrease} disabled={disabled}>
          <img src={minus} alt="minus" />
        </CountBox>
        <CountBox className="count" disabled={disabled}>
          {disabled ? 0 : quantity}
        </CountBox>
        <CountBox onClick={handleIncrease} disabled={disabled}>
          <img src={plus} alt="plus" />
        </CountBox>
      </Wrapper>
    </Container>
  );
};

export default Count;

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.border};
`;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.border};
`;

const CountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-right: 1px solid ${props => props.theme.border};
  font-weight: bold;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }
  &.count {
    width: 17px;
    height: 22px;
  }

  ${({ disabled }) =>
    disabled &&
    `
  cursor: not-allowed;
  opacity: 0.5;
  `}
`;
