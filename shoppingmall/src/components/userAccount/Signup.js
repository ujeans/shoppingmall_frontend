import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";
//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";

const Signup = () => {
  //유저 정보
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    phone: "",
    addr: "",
    nickname: "",
    img: null,
  });

  //이미지 미리보기
  // const [preview, setPreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  //isVaild
  const isVaild =
    userInfo.email &&
    userInfo.name &&
    userInfo.phone &&
    userInfo.addr &&
    userInfo.password.length >= 8 &&
    userInfo.password.length <= 20 &&
    userInfo.password === userInfo.passwordCheck;

  //회원가입
  const submitSignup = async () => {
    console.log(userInfo);
    try {
      await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          name: userInfo.name,
          phone: userInfo.phone,
          addr: userInfo.addr,
          nickname: userInfo.nickname,
        }),
      });

      // if (!response.ok) {
      //   throw new Error("회원가입에 실패하였습니다.");
      // }
      moveToLogin();
    } catch (error) {
      console.error("에러", error);
    }
  };

  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/login", userInfo);
    console.log(userInfo);
  };
  const moveToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <Title onClick={moveToHome}>super24</Title>
        <Info>회원정보를 입력해주세요</Info>
        <InputWrapper>
          <InputContainer>
            <IconWrapper>
              <Icon src={email} />
            </IconWrapper>
            <Input
              placeholder="아이디(이메일)"
              type="email"
              value={userInfo.email}
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
              value={userInfo.password}
              name="password"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>
            <Input
              placeholder="비밀번호 확인"
              type="password"
              value={userInfo.passwordCheck}
              name="passwordCheck"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={people} />
            </IconWrapper>
            <Input
              placeholder="이름"
              value={userInfo.name}
              name="name"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={phone} />
            </IconWrapper>
            <Input
              type="number"
              placeholder="휴대폰 번호"
              value={userInfo.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={phone} />
            </IconWrapper>
            <Input
              placeholder="주소"
              value={userInfo.addr}
              name="addr"
              onChange={handleInputChange}
            />
          </InputContainer>
          <FileInfo>
            나를 나타내는 프로필 사진과 닉네임으로 등록하면 이웃들이 안심할 수
            있어요.
          </FileInfo>
          <FileInputWrapper>
            <FileInput type="file" accept="image/*" name="img" />
          </FileInputWrapper>

          <InputNickname
            placeholder="닉네임"
            value={userInfo.nickname}
            name="nickname"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <SubmitButton disabled={!isVaild} onClick={submitSignup}>
          가입하기
        </SubmitButton>
      </Wrapper>
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  padding: 10px;
  font-weight: bold;
  font-size: 30px;
  margin: 58px;
  cursor: pointer;
`;

const Info = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 465px;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 104px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 463px;
  margin-bottom: 15px;
  border: 1px solid ${theme.border};
`;

const Input = styled.input`
  text-indent: 12px;
  border: none;
  &::placeholder {
    color: ${theme.placeholderText};
  }
`;

const InputNickname = styled.input`
  width: 463px;
  height: 43px;
  border: none;
  border-bottom: 1px solid ${theme.border};
  &::placeholder {
    color: ${theme.placeholderText};
  }
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

const FileInputWrapper = styled.div`
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
`;

const FileInfo = styled.div`
  font-size: 13px;
  color: ${theme.grayTextIcon};
  margin: 11px 0 36px 0;
`;

const FileInput = styled.input``;

const SubmitButton = styled.button`
  width: 100%;
  margin-bottom: 43px;
  max-width: 465px;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.mainColor};
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    background-color: "#F4F4F4";
    cursor: not-allowed;
  }
`;
