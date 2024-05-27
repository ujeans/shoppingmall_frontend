import React from 'react';
import styled from "styled-components";

// svg
import { FiCircle } from "react-icons/fi";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
const ProductCarousel = () => {
    return (
        <ImageWrapper>
            <ProductImage src="https://via.placeholder.com/400/#D9D9D9"/>
            <LeftArrow src={leftarrow}/> 
            <RightArrow src={rightarrow}/>
            <CarouselButtons>
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
            </CarouselButtons>
        </ImageWrapper>
    );
};

export default ProductCarousel;

const ImageWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 700px;
    hegith: 448px;
    margin-top: 55px;
`;

 const ProductImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
`;

const LeftArrow = styled.img`
    position: absolute;
    top: 410px;
    left: 480px;
    cursor: pointer;
`;

const RightArrow = styled.img`
    position: absolute;
    top: 410px;
    right: 444px;
    cursor: pointer;
`;

const CarouselButtons = styled.div`
    position: absolute;
    cursor: pointer;
    top: 580px;
    right: 600px;
`;

const PaginationButton = styled(FiCircle)`
    margin-right: 4px;
    background-color: none;
`;