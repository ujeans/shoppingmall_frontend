import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import InputField from "./InputField";
import { isValidEmail, isValidPassword } from "./Vaildators";
import Navigation from "../nav/Navigation";
import Modal from "../commom/Modal/Modal";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import { BlackBtn, WhiteBtn } from "../../style/CommonStyles";

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

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //유효성 검사
  const isValid = isValidEmail(user.email) && isValidPassword(user.password);

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
      setModalMessage("이메일과 비밀번호를 확인하세요");
      setIsModalOpen(true);
      console.error("에러", error);
    }
  };

  //navigate
  const { moveToHome, moveToSignup } = Navigation();
  return (
    <>
      <Wrapper>
        <Title onClick={moveToHome}>super24</Title>
        <InputWrapper>
          <InputField
            iconSrc={email}
            placeholder="아이디(이메일)"
            value={user.email}
            name="email"
            onChange={handleInputChange}
          />
          <InputField
            iconSrc={password}
            placeholder="비밀번호"
            type="password"
            value={user.password}
            name="password"
            onChange={handleInputChange}
          />
        </InputWrapper>

        <SubmitButton disabled={!isValid} onClick={submitLogin}>
          로그인
        </SubmitButton>
        <SignupButton onClick={moveToSignup}>회원가입</SignupButton>
      </Wrapper>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title="로그인 실패"
          subText={modalMessage}
          navigateToPage={closeModal}
        />
      )}
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
  margin: 220px 0 66px 0;
`;

const SubmitButton = styled(BlackBtn)`
  width: 100%;
  max-width: 465px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SignupButton = styled(WhiteBtn)`
  width: 465px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;
