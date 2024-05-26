import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from "../../style/theme";
import ModalComponent from "../../components/modal/ModalComponent";
import Pagination from "../../components/sellpage/PaginationArea";
// svg
import unlike from "../../assets/unlike.svg";
import pencil from "../../assets/pencil.svg";

const ProductListPage = () => {
  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsLike] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const productsPerRow = 4;
  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const [productList, setProductList] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명 상품 설명 상품 설명 상품 설명",
    },
  ]);

  const closeModal = () => {
    setIsVisible(false);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  const checkLogin = () => {
    if (isLogin === true) {
      navigate("/PR");
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClickButton = (idx) => {
    setBtnActive(idx);
  };

  const handleHeart = (index) => {
    setIsLike(() => {
      const newLike = [...isChecked];
      newLike[index] = !newLike[index];
};

export default ProductListPage;

const ProductListPageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductListFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LeftWrapper = styled.div`
  margin-left: 1%;
  display: flex;
  justify-content: flex;
`;

const ButtonDivs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Menu = styled.button`
  background-color: ${(props) => (props.isActive ? "#EB4646" : "")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "")};
  width: 80px;
  height: 30px;
  border: 1px solid ${theme.border};
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.border};
    color: ${theme.black};
  }
`;

const Selector = styled.select`
  margin-left: 5px;
  width: 92px;
  height: 30px;
  border: 1px solid ${theme.border};
  border-radius: 15px;
  text-align: center;
  > option {
    &:hover {
      background-color: ${theme.grayBgColor};
    }
  }
`;

const RightWrapper = styled.div`
  margin-right: 1%;
  > button {
    width: 124px;
    height: 40px;
    border: 1px solid ${theme.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    padding-right: 5px;
    background-color: ${theme.grayBgColor};
    cursor: pointer;

    > svg {
      margin-right: 3px;
      line-height: 16.94px;
      margin-top: 2px;
    }
  }
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: red;
  margin-bottom: 10px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
`;

const ProductName = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-heigh: 19.36px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-heigh: 16.94px;
  margin-bottom: 5px;
`;

const ProductDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-heigh: 16.94px;
`;

const IconWrapper = styled.div`
    padding: 10px;
    height: 100%
    background-color: ${theme.grayBgColor};
`;

const Icon = styled.img`
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
`;


