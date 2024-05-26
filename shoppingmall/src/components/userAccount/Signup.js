import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { isValidEmail, isValidPassword, isValidPhone } from "./Vaildators";
import InputField from "./InputField";
import Navigation from "../nav/Navigation";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";
import home from "../../assets/home.svg";
import userCircle from "../../assets/userCircle.svg";

const Signup = () => {
  //유저 정보
  const [user, setUser] = useState({
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
  const [preview, setPreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  //유효성 검사

  const isValid =
    isValidEmail &&
    isValidPassword &&
    isValidPhone &&
    user.name &&
    user.addr &&
    user.nickname &&
    user.password === user.passwordCheck;

  //회원가입
  const submitSignup = async () => {
    console.log(user);
    try {
      await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          name: user.name,
          phone: user.phone,
          addr: user.addr,
          nickname: user.nickname,
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

  //이미지 파일 처리
  const fileInputRef = React.createRef();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setUser((user) => ({
        ...user,
        img: file,
      }));
    }
  };

  //navigate
  const { moveToHome, moveToLogin } = Navigation();

  return (
    <>
      <Wrapper>
        <Title onClick={moveToHome}>super24</Title>
        <Info>회원정보를 입력해주세요</Info>
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
          <InputField
            iconSrc={password}
            placeholder="비밀번호 확인"
            type="password"
            value={user.passwordCheck}
            name="passwordCheck"
            onChange={handleInputChange}
          />
          <InputField
            iconSrc={people}
            placeholder="이름"
            value={user.name}
            name="name"
            onChange={handleInputChange}
          />
          <InputField
            iconSrc={phone}
            placeholder="휴대폰 번호"
            value={user.phone}
            name="phone"
            onChange={handleInputChange}
          />
          <InputField
            iconSrc={home}
            placeholder="주소"
            value={user.addr}
            name="addr"
            onChange={handleInputChange}
          />
          <FileInfo>
            나를 나타내는 프로필 사진과 닉네임으로 등록하면 이웃들이 안심할 수
            있어요.
          </FileInfo>
          <FileInputWrapper>
            <FileInput
              type="file"
              accept="image/*"
              name="img"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {preview ? (
              <PreviewImage
                src={preview}
                alt="미리보기 이미지"
                onClick={handleImageClick}
              />
            ) : (
              <ImageButton
                src={userCircle}
                alt="파일 선택 버튼"
                onClick={handleImageClick}
              />
            )}
          </FileInputWrapper>

          <InputNickname
            placeholder="닉네임"
            value={user.nickname}
            name="nickname"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <SubmitButton disabled={!isValid} onClick={submitSignup}>
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

const InputNickname = styled.input`
  width: 463px;
  height: 43px;
  text-indent: 12px;
  border: none;
  border-bottom: 1px solid ${theme.border};
  &::placeholder {
    color: ${theme.placeholderText};
  }
`;

const FileInputWrapper = styled.div`
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileInfo = styled.div`
  font-size: 13px;
  color: ${theme.grayTextIcon};
  margin: 11px 0 36px 0;
`;

const FileInput = styled.input`
  display: none;
`;

const ImageButton = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

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
