import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../style/theme";
import styled from "styled-components";
import Pagination from "../sellpage/PaginationArea";
import ProductFilter from "./ProductFilter";
// svg
import unlike from "../../assets/unlike.svg";
const ProductList = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/160/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
  ]);

  const productsPerRow = 5;
  const pages = [1, 2, 3, 4, 5];
  const [isChecked, setIsLike] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const clickProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const handleHeart = (index) => {
    setIsLike(() => {
      const newLike = [...isChecked];
      newLike[index] = !newLike[index];
      return newLike;
    });
  };

  return (
    <ProductListPageWrapper>
      <ProductFilter />
      <ProductListContainer>
        {productList.map((product, index) => (
          <ProductItem
            key={index}
            productsPerRow={productsPerRow}
            onClick={() => {
              clickProduct(product.id);
            }}
          >
            <ProductImage src={product.image} alt={product.productName} />
            <ProductInfoWrapper>
              <div>
                <ProductName>{product.productName}</ProductName>
                <ProductPrice>{product.productPrice + " 원"}</ProductPrice>
                <ProductDescription>{product.description}</ProductDescription>
              </div>
              <IconWrapper
                onClick={() => {
                  handleHeart(index);
                }}
              >
                <Icon src={unlike} fill="grayBgColor" />
              </IconWrapper>
            </ProductInfoWrapper>
          </ProductItem>
        ))}
      </ProductListContainer>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </ProductListPageWrapper>
  );
};

export default ProductList;

const ProductListPageWrapper = styled.div`
  display: flex;
  width: 1920px;
  hegith: 1080px;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;

const ProductListContainer = styled.div`
  display: flex;
  width: 1060px;
  padding: 0 0;
  margin: 20px 0px 64px 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProductItem = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 164px;
  padding: 0 0;
  margin: 0px 6px 24px 10px;
  flex-direction: column;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 160px;
  height: 160px;
  padding-bottom: 7px;
  border-radius: 5px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  width: 164px;
  height: 58px;
  flex-direction: row;
  justify-content: flex-start;
`;

const ProductName = styled.div`
  padding-bottom: 3px;
  font-size: 17px;
  font-weight: 500;
  line-heigh: 19.36px;
`;

const ProductPrice = styled.div`
  padding-bottom: 8px;
  font-size: 17px;
  font-weight: 600;
  line-heigh: 16.94px;
`;

const ProductDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-heigh: 16.94px;
`;

const IconWrapper = styled.div`
  margin-left: 62px;
  background-color: ${theme.white};
`;

const Icon = styled.img`
  background-color: ${(props) => (props.isChecked ? "#EB4646" : "#f4f4f4")};
`;
