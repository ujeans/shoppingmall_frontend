import styled from "styled-components";
// assets
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

const Count = () => {
  return (
    <Container>
      <Wrapper>
        <CountBox>
          <img src={minus} />
        </CountBox>
        <CountBox className="count">1</CountBox>
        <CountBox>
          <img src={plus} />
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
