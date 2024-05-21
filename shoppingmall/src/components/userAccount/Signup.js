import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const Signup = () => {
  return (
    <>
      <Title>
        <Header>super24</Header>
      </Title>
      <InputWrapper>
        <Info>회원정보를 입력해주세요</Info>
        <Input placeholder="아이디(이메일)" required />
        <Input placeholder="비밀번호" type="password" required />
        <Input placeholder="비밀번호 확인" type="password" required />
        <Input placeholder="이름" required />
        <Input placeholder="휴대폰 번호" required />
        <Input placeholder="Image URL" />
        <Input placeholder="닉네임" required />
        <SubmitButton>가입하기</SubmitButton>
      </InputWrapper>
    </>
  );
};

export default Signup;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.h2``;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.h2``;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
  }
`;

const SubmitButton = styled.button`
  width: 465px;
  height: 45px;
  border-radius: 10px;
`;
