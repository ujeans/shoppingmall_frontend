import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// assets
import checkbox from "../../assets/checkbox.svg";
import checkedbox from "../../assets/checkedbox.svg";
// components
import ProductList from "./productList/ProductList";
import TotalSum from "./TotalSum";
import Modal from "../commom/Modal/Modal";
// styles
import {
  BlackBtn,
  Container,
  Header,
  WhiteBtn,
} from "../../style/CommonStyles";

const FilledCart = ({
  cartItems,
  setCartItems,
  allChecked,
  totalAmount,
  totalCount,
  onToggleAllChecked,
  onDeleteSelected,
  onDeleteSoldOut,
  onDeleteItem,
}) => {
  const token = localStorage.getItem("login-token");
  const userId = localStorage.getItem("user_Id");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToPage = () => {
    navigate("/");
  };

  const handleCheckout = async () => {
    try {
      const postResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/ordertotal/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const text = await postResponse.text();
      try {
      } catch (err) {
        console.error("응답이 JSON 형식이 아닙니다:", text);
      }

      if (!postResponse.ok) {
        throw new Error("전체 결제 요청 실패");
      }

      setIsOpen(true);
    } catch (error) {
      console.error("결제 처리 중 오류가 발생했습니다:", error);
    }
  };

  const handleCloseModal = async () => {
    setIsOpen(false);
    await Promise.all(cartItems.map(item => onDeleteItem(item.cartItemId)));
    setCartItems([]);
  };

  return (
    <>
      <Container borderBottom={false}>
        <Header>
          <Checkbox onClick={onToggleAllChecked} checked={allChecked}>
            {allChecked ? <Icon src={checkedbox} /> : <Icon src={checkbox} />}
          </Checkbox>
          <ProductInfo>상품정보</ProductInfo>
          <Count>수량</Count>
          <OrderAmount>주문금액</OrderAmount>
        </Header>
        <ProductList
          cartItems={cartItems}
          setCartItems={setCartItems}
          onDeleteItem={onDeleteItem}
        />
      </Container>
      <BtnWrapper>
        <DeleteBtn onClick={onDeleteSelected}>선택상품 삭제</DeleteBtn>
        <DeleteBtn onClick={onDeleteSoldOut}>품절상품 삭제</DeleteBtn>
      </BtnWrapper>
      <TotalSum totalAmount={totalAmount} totalCount={totalCount} />
      <ButtonWrapper>
        <Btn padding=" 12px 20px" fontSize="20px" onClick={navigateToPage}>
          CONTINUE SHOPPING
        </Btn>
        <BlackBtn padding=" 12px 20px" fontSize="20px" onClick={handleCheckout}>
          CHECK OUT
        </BlackBtn>
        {isOpen && (
          <Modal
            open={isOpen}
            onClose={handleCloseModal}
            title="결제 완료"
            subText="결제 완료되었습니다. 홈으로 이동하시겠습니까?"
            navigateToPage={navigateToPage}
          />
        )}
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
