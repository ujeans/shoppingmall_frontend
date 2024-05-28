import React from 'react';
import styled from "styled-components";

// svg
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";

// component

const ProductDetail = () => {
 
    return (
        <Layout>
            <Container>
                    <ArrowWrapper>
                        <CustomArrow src={leftarrow}/>
                    </ArrowWrapper>
                    <HeaderText>
                        상품 정보
                    </HeaderText>
            </Container>
            <Main>
                <ImageContainer>
                    <ImageWrapper>
                        <ProductImage src="https://via.placeholder.com/400/#D9D9D9"/>
                        <LeftArrow src={leftarrow}/> 
                        <RightArrow src={rightarrow}/>
                    </ImageWrapper>
                </ImageContainer>
                <InfoContainer>
                    <Content>
                        <ProductName>아디다스 펜츠</ProductName>
                        <ProductPrice>56,000원</ProductPrice>
                        <Description>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Description>
                        <Cagetgory>#옵션 #옵션</Cagetgory>
                    </Content>
                </InfoContainer>    
            </Main>
        </Layout>
    );
};

export default ProductDetail;

const Layout = styled.div`
    max-width: 1090px;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
`;

const ArrowWrapper = styled.div`
    margin: 45px 461px 54px 50px;
    cursor: pointer;
`;

const CustomArrow = styled.img`
    width: 8px;
    height: 15px;
`;

const HeaderText = styled.div`
    margin-right: 160px;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 29.05px;
`;

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
   width: 50%;
   height: 50%;
   margin-bottom: 55px;
`;

const ImageWrapper = styled.div`
    position: fiexd;
    display: flex;
    justify-content:start;
    width: 700px;
    hegith: 448px;
    margin-top: 55px;
    margin-left: 50px;
`;

 const ProductImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
`;

const LeftArrow = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 430px;
    left: 170px;
    cursor: pointer;
`;

const RightArrow = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 430px;
    right: 754px;
    cursor: pointer;
`;

const InfoContainer = styled.div`
    width: 50%;
    height: 50%;
`;

const Content = styled.div`
    width: 400px;
    hegith: 100%;
    margin-top: 48px;
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
    height: 100%;
    margin-top: 16px;
    font-size: 16px;
    overflow: auto;
`;

const Cagetgory = styled.div`
    width: 100px;
    height: 18px;
    margin-top: 65px;
    font-size: 15px;
    color: #858585;
`;
