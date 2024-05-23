import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// assets
import checkbox from "../../assets/checkbox.svg";
// components
import ProductList from "./productList/ProductList";
import TotalSum from "./TotalSum";
// styles
import {
  BlackBtn,
  Container,
  Header,
  WhiteBtn,
} from "../../style/CommonStyles";

const FilledCart = ({ cartItems }) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/");
  };
  return (
    <>
      <Container borderBottom={false}>
        <Header>
          <Checkbox>
            <Icon src={checkbox} />
          </Checkbox>
          <ProductInfo>상품정보</ProductInfo>
          <Count>수량</Count>
          <OrderAmount>주문금액</OrderAmount>
        </Header>
        <ProductList cartItems={cartItems} />
      </Container>
      <BtnWrapper>
        <DeleteBtn>선택상품 삭제</DeleteBtn>
        <DeleteBtn>품절상품 삭제</DeleteBtn>
      </BtnWrapper>
      <TotalSum />
      <ButtonWrapper>
        <Btn padding=" 12px 20px" fontSize="20px" onClick={navigateToPage}>
          CONTINUE SHOPPING
        </Btn>
        <BlackBtn padding=" 12px 20px" fontSize="20px">
          CHECK OUT
        </BlackBtn>
      </ButtonWrapper>
    </>
  );
};

export default FilledCart;

const Checkbox = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
`;

const ProductInfo = styled.div`
  width: 53%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Count = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderAmount = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled.div`
  margin: 20px 0 60px 0;
`;

const DeleteBtn = styled.button`
  padding: 10px 12px;
  margin-right: 10px;
  background: none;
  border: 1px solid ${props => props.theme.grayTextIcon};
  color: ${props => props.theme.grayTextIcon};
  cursor: pointer;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Btn = styled(WhiteBtn)`
  margin-right: 10px;
`;
