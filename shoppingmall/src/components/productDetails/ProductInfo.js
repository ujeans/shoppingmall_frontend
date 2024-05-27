import React from 'react';
import styled from "styled-components";

// svg
import profileimage from "../../assets/profileimage.svg";
import unlike from "../../assets/unlike.svg";

const ProductInfo = () => {
    return (
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
    );
};

export default ProductInfo;

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