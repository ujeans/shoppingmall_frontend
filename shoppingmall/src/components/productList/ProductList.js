import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../sellpage/PaginationArea";
import ProducFilter from "./ProducFilter";
// svg
import unlike from "../../assets/unlike.svg";

const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/product`)
      .then((response) => response.json())
      .then((json) => setProductList([...json]));
  }, []);

  const productsPerRow = 4;
  const pages = [1, 2, 3, 4, 5];

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const clickProduct = (productId) => {
    navigate(`/product/${productId}`, { state: { productId: productId } });
  };

  return (
    <Container>
      <Wrapper>
        <ProducFilter />
        <ListContainer>
          <CardList>
            {productList.map((product) => (
              <Item
                key={product.productId}
                productsPerRow={productsPerRow}
                onClick={() => clickProduct(product.productId)}
              >
                <ImageWrapper>
                  <Image
                    src="https://via.placeholder.com/250/#D9D9D9"
                    alt={product.productName}
                  />
                </ImageWrapper>
                <InfoWrapper>
                  <Info>
                    <ProductName>
                      {product.productName}{" "}
                      <IconWrapper>
                        <Icon src={unlike} />
                      </IconWrapper>
                    </ProductName>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                    <ProductPrice>
                      {product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <PriceText>원</PriceText>
                    </ProductPrice>
                  </Info>
                </InfoWrapper>
              </Item>
            ))}
          </CardList>
        </ListContainer>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </Wrapper>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1267px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  width: 100%;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.div`
  max-width: calc(25% - 20px);
  flex: 1 1 calc(25% - 20px);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const ProductName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const PriceText = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #5d5d5d;
`;

const ProductDescription = styled.div`
  padding-bottom: 15px;
  font-size: 14px;
  color: #5d5d5d;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
