import React from "react";
import styled from "styled-components";
import ModifyIcon from "../../assets/Modify.svg";

const ProductItem = ({ product, productsPerRow }) => {
  return (
    <StyledProductItem productsPerRow={productsPerRow}>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductButton src={ModifyIcon} alt="수정" />
      </ProductInfo>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
    </StyledProductItem>
  );
};

export default ProductItem;

const StyledProductItem = styled.div`
  padding: 2px;
  margin: 10px;
  width: calc(100% / ${(props) => props.productsPerRow} - 20px);
  box-sizing: border-box;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
`;

const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  flex-grow: 1;
`;

const ProductButton = styled.img`
  padding: 10px;
  border: none;
  cursor: pointer;
  filter: brightness(1.8);
  &:hover {
    filter: brightness(1);
  }
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #333;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
`;

const ProductDescription = styled.p`
  font-size: 0.8em;
  color: #666;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
`;
