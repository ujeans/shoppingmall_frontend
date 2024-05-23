import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //로그인 정보
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const isInVaild =
    user.email && user.password.length >= 8 && user.password.length <= 20;

  const navigate = useNavigate();
  const moveToSignup = () => {
    navigate("/signup");
  };

  //로그인 실행
  const submitLogin = async () => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("이메일과 비밀번호를 확인하세요");
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>
          <Header>super24</Header>
        </Title>
        <InputWrapper>
          <Input
            placeholder="아이디(이메일)"
            value={user.email}
            name="email"
            onChange={handleInputChange}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={user.password}
            name="password"
            onChange={handleInputChange}
          />
          <SubmitButton disabled={!isInVaild} onClick={submitLogin}>
            로그인
          </SubmitButton>
        </InputWrapper>
        <SignupButton onClick={moveToSignup}>회원가입</SignupButton>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  padding: 10px;
  font-weight: bold;
  font-size: 30px;
  margin: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 465px;
  height: 62px;
  text-indent: 12px;
  margin-bottom: 15px;
  border: 1px solid ${theme.border};
  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
    color: ${theme.placeholderText};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 465px;
  height: 45px;
  border-radius: 10px;
  border: 0px;
  background-color: ${theme.mainColor};
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  width: 465px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
  }
`;
