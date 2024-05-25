import styled from "styled-components";
// assets
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

const Count = ({ quantity, onUpdateCount }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateCount(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateCount(quantity + 1);
  };

  return (
    <Container>
      <Wrapper>
        <CountBox onClick={handleDecrease}>
          <img src={minus} alt="minus" />
        </CountBox>
        <CountBox className="count">{quantity}</CountBox>
        <CountBox onClick={handleIncrease}>
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
`;
