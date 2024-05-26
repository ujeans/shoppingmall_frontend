import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <TextCol>
            <Text>상품 보기</Text>
            <Text>작성하기</Text>
            <Text>마이페이지</Text>
            <Text>장바구니</Text>
          </TextCol>
          <TextCol>
            <Text>고객센터</Text>
            <Text>문의하기</Text>
            <Text>신고하기</Text>
            <Text>자주 묻는 질문</Text>
          </TextCol>
          <TextCol>
            <Text>공지사항</Text>
            <Text>서비스 소개</Text>
          </TextCol>
        </TextWrapper>
        <TextCol className="super24">
          <Text className="super24">super24 앱 다운로드</Text>
          <AppBox>
            <App>APP Store</App>
            <App>Google Play</App>
          </AppBox>
        </TextCol>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.border};
`;

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const TextCol = styled.div``;

const Text = styled.div`
  margin: 0 80px 40px 0;
  font-size: 14px;
  color: ${props => props.theme.grayTextIcon};

  &.super24 {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    color: black;
  }
`;

const AppBox = styled.div`
  display: flex;
`;

const App = styled.div`
  padding: 12px 22px;
  background-color: ${props => props.theme.grayBgColor};
  border-radius: 5px;

  &:first-child {
    margin-right: 10px;
  }
`;
