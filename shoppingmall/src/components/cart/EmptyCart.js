import styled from "styled-components";

const EmptyCart = () => {
  return (
    <Container>
      <Wrapper>
        <EmptyCartMessage>장바구니에 담은 상품이 없습니다.</EmptyCartMessage>
        <Btn>CONTINUE SHOPPING</Btn>
      </Wrapper>
    </Container>
  );
};

export default EmptyCart;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 160px 0;
`;

const EmptyCartMessage = styled.div`
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
