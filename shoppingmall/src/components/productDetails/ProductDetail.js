import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// svg
import leftarrow from "../../assets/leftarrow.svg";

// component
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';


const ProductDetail = () => {
    const navigate = useNavigate();

    const navigateToPage = () => {
      navigate("/");
    };

    return (
        <ProductDetailWrapper>
            <Container>
                <Header>
                    <BackIcon src={leftarrow} onClick={navigateToPage} />
                    <ProductTitle>상품 정보</ProductTitle>
                </Header>
                <ProductCarousel/>
                <ProductInfo/>
            </Container>
            <CartButton>장바구니 담기</CartButton>
        </ProductDetailWrapper>
    );
};

export default ProductDetail;

const ProductDetailWrapper = styled.div`
    width: 1920px;
    // hegith: 1080px;
    hegith: 100%;
    max-width: 1300px;
    margin-bottom: 50px;
    background-color: white;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-width: 1300px;
    // height: 830px;
    hegith: 100%;
    margin: 57px 20% 0px 300px;
`;

const Header = styled.div`
    display: flex;
    justify-content: start;
    width: 1030px;
    height: 29px;
    margin-left: 92px;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 380px;
    cursor: pointer;
`;

const ProductTitle = styled.div`
    width: 110px;
    height: 29px;
    margin-top: 3px;
    font-weight: bold;
    font-size: 24px;
`;

const CartButton = styled.button`
    width: 250px;
    height: 40px;
    margin: 49px 0px 0px 40%;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    background-color: #EB4646;
    color: white;
    cursor:pointer;
`;