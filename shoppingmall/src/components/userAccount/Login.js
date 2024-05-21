import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const Login = () => {
  return (
    <>
      <Title>
        <Header>super24</Header>
      </Title>
      <InputWrapper>
        <Input placeholder="아이디(이메일)" required />
        <Input placeholder="비밀번호" type="password" required />
        <SubmitButton>로그인</SubmitButton>
      </InputWrapper>
      <SignupButton>회원가입</SignupButton>
    </>
  );
};

export default Login;

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
  background-color: ${theme.mainColor};
`;

const SignupButton = styled.button`
  width: 465px;
  height: 45px;
  border-radius: 10px;

  &:hover {
  }
`;
