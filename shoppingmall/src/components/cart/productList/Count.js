import styled from "styled-components";
// assets
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

const Count = ({ quantity, onUpdateCount, disabled }) => {
  const handleDecrease = () => {
    if (!disabled && quantity > 1) {
      onUpdateCount(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (!disabled) {
      onUpdateCount(quantity + 1);
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
