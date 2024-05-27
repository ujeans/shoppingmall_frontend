import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../style/theme";
import styled from "styled-components";
import Pagination from "../sellpage/PaginationArea";
import ProductFilter from "./ProducFilter";
// svg
import unlike from "../../assets/unlike.svg";
const ProductList = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150/#D9D9D9",
      productName: "아디다스",
      productPrice: "56,000",
      description: "상품 설명",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150/#D9D9D9",
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
    <Wrapper>
       <Container>
            <ProductFilter />
            <ListContainer>
                    <CardList>
                        {productList.map((product, index) => (
                            <Item
                            key={index}
                            productsPerRow={productsPerRow}
                            onClick={() => {
                                clickProduct(product.id);}}
                            >
                                <ImageWrapper>
                                    <Image  src={product.image} alt={product.productName}/>
                                </ImageWrapper>
                                <InfoWrapper>
                                    <Info>
                                        <ProductName>{product.productName}</ProductName>
                                        <ProductPrice>{product.productPrice + " 원"}</ProductPrice>
                                        <ProductDescription>{product.description}</ProductDescription>
                                    </Info>
                                    <IconWrapper>
                                        <Icon src={unlike}/>
                                    </IconWrapper>
                                </InfoWrapper>
                            </Item> 
                        ))}   
                    </CardList>
            </ListContainer>        
           
       </Container> 
       <Pagination
                pages={pages}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 1050px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-top: 32px;
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    height: 100%;
    margin-top: 28px;
`;

const CardList = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    height:500px;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 294px;
    height:220px;
    margin-right: 20px;
    &:nth-child(4) {
        margin-right:0px;
    }
    &:nth-child(8) {
        margin-right:0px;
    }
`;


const ImageWrapper = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid white;
    border-radius: 3%;
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 3%;
    object-fit: cover;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 26%;
    margin-top: 8px;
`;

const Info = styled.div`
    width: 200px;
    height: 100%;
`;

const ProductName = styled.div`
    width: 100px;
    height: 19px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
`;

const ProductPrice = styled.div`
    width: 66px;
    height: 17px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
`;

const ProductDescription = styled.div`
    width: 100px;
    height: 17px;
    font-size: 14px;
    font-weight: bold;
`;

const IconWrapper = styled.div`
    margin-left: 100px;
`;

const Icon = styled.img`
    background-color: none;
`;
