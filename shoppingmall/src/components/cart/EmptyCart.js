import styled from "styled-components";
// // styles
import { Container } from "../../style/CommonStyles";

const EmptyCart = () => {
  return (
    <EmptyContainer>
      <Wrapper>
        <EmptyCartMessage>장바구니에 담은 상품이 없습니다.</EmptyCartMessage>
        <Btn>CONTINUE SHOPPING</Btn>
      </Wrapper>
    </EmptyContainer>
  );
};

export default EmptyCart;

const EmptyContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 160px 0;
`;

const EmptyCartMessage = styled.div`
  display: flex;
  margin-bottom: 60px;
  font-size: 18px;
  font-weight: bold;
`;

const Btn = styled.button`
  padding: 12px 20px;
  border: 1px solid ${props => props.theme.grayTextIcon};
  background: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;
