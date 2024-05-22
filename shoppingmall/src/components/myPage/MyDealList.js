import styled from "styled-components";
// assets
import salesDetails from "../../assets/salesDetails.svg";
import cart from "../../assets/cart.svg";

const MyDealList = () => {
  return (
    <Container>
      <Wrapper>
        <MyDealTitle>나의 거래</MyDealTitle>
        <MyDealBox>
          <Icon src={salesDetails}></Icon>
          <ListTitle>판매 내역</ListTitle>
        </MyDealBox>
        <MyDealBox>
          <Icon src={cart}></Icon>
          <ListTitle>장바구니</ListTitle>
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
  border-bottom: 1px solid #d1d4d8;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const ListTitle = styled.div`
  cursor: pointer;
`;
