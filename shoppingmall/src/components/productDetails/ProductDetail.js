import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// svg
import leftarrow from "../../assets/leftarrow.svg";
import profileimage from "../../assets/profileimage.svg";
import unlike from "../../assets/unlike.svg";
import rightarrow from "../../assets/rightarrow.svg";

const ProductDetail = ({product}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navigateToPage = () => {
      navigate("/");
    };
  
    const openModal = () => {
      setIsOpen(true);
    };

    return (
        <ProductDetailWrapper>
            <Container>
                <Header>
                    <BackIcon src={leftarrow} onClick={navigateToPage} />
                    <ProductTitle>상품 정보</ProductTitle>
                </Header>
                <ImageWrapper>
                    <ProductImage src="https://via.placeholder.com/400/#D9D9D9"/>
                    <LeftArrow src={leftarrow}/> 
                    <RightArrow src={rightarrow}/>
                </ImageWrapper>
                <ContentWrapper>
                    <UserInfo>
                        <UserImage src={profileimage} alt="personIcon"/>
                        <UserName>
                            사용자이름
                        </UserName>
                        <HeartIcon src={unlike} alt="좋아요"/>
                    </UserInfo>
                    <BorderLine></BorderLine>
                    <Content>
                        <ProductName>아디다스 펜츠</ProductName>
                        <ProductPrice>56,000원</ProductPrice>
                        <Description>
                            상품설명
                        </Description>
                        <Cagetgory>#옵션 #옵션</Cagetgory>
                    </Content>
                </ContentWrapper>
            </Container>
            <CartButton>장바구니 담기</CartButton>
        </ProductDetailWrapper>
    );
};

export default ProductDetail;

const ProductDetailWrapper = styled.div`
    width: 1920px;
    hegith: 1080px;
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
    height: 830px;
    margin: 57px 81px 0px 300px;
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
    left: 580px;
    cursor: pointer;
`;

const RightArrow = styled.img`
    position: absolute;
    top: 410px;
    right: 510px;
    cursor: pointer;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: start;
    width: 400px;
    height: 55px;
    margin-top: 25px;
    marigin-bottom: 14px;
`;

const UserImage = styled.img`
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 12px;
`;

const UserName = styled.div`
    width: 756px;
    height: 19px;
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;
`;

const HeartIcon = styled.img`
    width: 20px;
    height: 18.3px;
    margin-top: 11px;
    cursor: pointer;
`;

const BorderLine = styled.div`
    width: 400px;
    border-bottom: 1px solid #D1D4D8;
    margin-top: 14px;
    margin-bottom: 26px;
`;

const Content = styled.div`
    width: 400px;
    hegith: 100%;
`;

const ProductName = styled.div`
    width: 150px;
    height: 19px;
    font-size: 16px;
`;

const ProductPrice = styled.div`
    width: 94px;
    height: 24px;
    margin-top: 6px;
    font-size: 20px;
    font-weight: bold;
`;

const Description = styled.div`
    width: 400px;
    height: 19px;
    margin-top: 16px;
    fonst-size: 16px;
`;

const Cagetgory = styled.div`
    width: 100px;
    height: 18px;
    margin-top: 75px;
    font-size: 15px;
    color: #858585;
`;

const CartButton = styled.button`
    width: 250px;
    height: 40px;
    margin: 49px 0px 0px 50%;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    background-color: #EB4646;
    color: white;
    cursor:pointer;
`;