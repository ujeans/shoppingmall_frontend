import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// styles
import { Container, WhiteBtn } from "../../style/CommonStyles";

const EmptyCart = () => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/");
  };

  return (
    <EmptyContainer borderBottom={true}>
      <Wrapper>
        <EmptyCartMessage>장바구니에 담은 상품이 없습니다.</EmptyCartMessage>
        <WhiteBtn padding="12px 20px" fontSize="20px" onClick={navigateToPage}>
          CONTINUE SHOPPING
        </WhiteBtn>
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
