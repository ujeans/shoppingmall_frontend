import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// assets
import salesDetails from "../../assets/salesDetails.svg";
import orderDetails from "../../assets/orderDetails.svg";
import cart from "../../assets/cart.svg";

const MyDealList = () => {
  const navigate = useNavigate();

  const navigateToPage = title => {
    switch (title) {
      case "판매 내역":
        navigate("/sell");
        break;
      case "주문 내역":
        navigate("/order-details");
        break;
      case "장바구니":
        navigate("/cart");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Wrapper>
        <MyDealTitle>나의 거래</MyDealTitle>
        <MyDealBox>
          <Icon src={salesDetails}></Icon>
          <ListTitle onClick={() => navigateToPage("판매 내역")}>
            판매 내역
          </ListTitle>
        </MyDealBox>
        <MyDealBox>
          <Icon src={orderDetails}></Icon>
          <ListTitle onClick={() => navigateToPage("주문 내역")}>
            주문 내역
          </ListTitle>
        </MyDealBox>
        <MyDealBox>
          <Icon src={cart}></Icon>
          <ListTitle onClick={() => navigateToPage("장바구니")}>
            장바구니
          </ListTitle>
        </MyDealBox>
      </Wrapper>
    </Container>
  );
};

export default MyDealList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 644px;
  margin-top: 40px;
`;

const MyDealTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MyDealBox = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const ListTitle = styled.div`
  cursor: pointer;
`;
