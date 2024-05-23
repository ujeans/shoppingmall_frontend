import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";

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
  const moveToHome = () => {
    navigate("/");
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
        <Title onClick={moveToHome}>super24</Title>
        <InputWrapper>
          <InputContainer>
            <IconWrapper>
              <Icon src={email} />
            </IconWrapper>
            <Input
              placeholder="아이디(이메일)"
              value={user.email}
              name="email"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>

            <Input
              placeholder="비밀번호"
              type="password"
              value={user.password}
              name="password"
              onChange={handleInputChange}
            />
          </InputContainer>
        </InputWrapper>

        <SubmitButton disabled={!isInVaild} onClick={submitLogin}>
          로그인
        </SubmitButton>
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
  margin-top: 58px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  height: 44px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 262px 0 66px 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 463px;
  margin-bottom: 15px;
  border: 1px solid ${theme.border};
`;

const IconWrapper = styled.div`
  width: 54px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.grayBgColor};
  border-right: 1px solid ${theme.border};
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  width: 465px;
  text-indent: 12px;
  border: none;
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
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  width: 465px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid ${theme.border};
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: ${theme.border};
  }
`;
