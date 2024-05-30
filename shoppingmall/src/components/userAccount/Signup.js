import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import phone from "../../assets/phone.svg";
import home from "../../assets/home.svg";
import userCircle from "../../assets/userCircle.svg";
import defaultImage from "../../assets/defaultImage.jpg";

//components
import { BlackBtn } from "../../style/CommonStyles";
import Modal from "../commom/Modal/Modal";
import { isValidEmail, isValidPassword, isValidPhone } from "./Vaildators";
import InputField from "./InputField";
import Navigation from "../nav/Navigation";

const Signup = () => {
  //유저 정보
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    phone: "",
    addr: "",
    nickname: "",
    img: "",
  });

  const [preview, setPreview] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    phone: false,
    addr: false,
    nickname: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
    setFieldErrors((errors) => ({
      ...errors,
      [name]: false,
    }));
  };

  //유효성 검사
  const validateFields = () => {
    const errors = {
      email: !user.email || !isValidEmail(user.email),
      password: !user.password || !isValidPassword(user.password),
      passwordCheck:
        !user.passwordCheck || user.password !== user.passwordCheck,
      phone: !user.phone || !isValidPhone(user.phone),
      addr: !user.addr,
      nickname: !user.nickname,
    };
    setFieldErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  //회원가입
  const submitSignup = async () => {
    if (!validateFields()) {
      return;
    }

    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("addr", user.addr);
    formData.append("nickname", user.nickname);

    if (user.img) {
      formData.append("userImg", user.img);
    } else {
      const response = await fetch(defaultImage);
      const blob = await response.blob();
      formData.append("userImg", blob, "defaultImage.jpg");
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        body: formData,
      });

      const responseBody = await response.json();
      console.log("body", responseBody);
      console.log(user.img);

      if (!response.ok) {
        throw new Error("회원가입에 실패하였습니다.");
      }
      console.log(response);
      setModalMessage("회원가입에 성공하였습니다.");
      setIsModalOpen(true);
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

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
            error={fieldErrors.email}
            errorMessage={"유효한 이메일을 입력해주세요. ( 이메일 형식 )"}
          />
          <InputField
            iconSrc={password}
            placeholder="비밀번호 ( 8자 이상 20자 이하 영문자 숫자 조합 )"
            type="password"
            value={user.password}
            name="password"
            onChange={handleInputChange}
            error={fieldErrors.password}
            errorMessage={
              "유효한 비밀번호를 입력해주세요. ( 8자 이상 20자 이하 영문자 숫자 조합 )"
            }
          />
          <InputField
            iconSrc={password}
            placeholder="비밀번호 확인"
            type="password"
            value={user.passwordCheck}
            name="passwordCheck"
            onChange={handleInputChange}
            error={fieldErrors.passwordCheck}
            errorMessage={"비밀번호가 일치하지 않습니다."}
          />

          <InputField
            iconSrc={phone}
            placeholder="휴대폰 번호 ( - 포함) "
            value={user.phone}
            name="phone"
            onChange={handleInputChange}
            error={fieldErrors.phone}
            errorMessage={"유효한 휴대폰 번호를 입력해주세요 ( - 포함 )"}
          />

          <InputField
            iconSrc={home}
            placeholder="주소"
            value={user.addr}
            name="addr"
            onChange={handleInputChange}
            error={fieldErrors.addr}
            errorMessage={"주소를 입력해주세요"}
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
            error={fieldErrors.nickname}
            errorMessage={"닉네임을 입력해주세요"}
          />
        </InputWrapper>
        <SubmitButton disabled={!validateFields} onClick={submitSignup}>
          가입하기
        </SubmitButton>
      </Wrapper>
      {isModalOpen && (
        <Modal
          onClose={moveToLogin}
          title="회원가입"
          subText={modalMessage}
          navigateToPage={moveToLogin}
        />
      )}
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
  padding-bottom: 104px;
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

const SubmitButton = styled(BlackBtn)`
  width: 100%;
  margin-bottom: 43px;
  max-width: 465px;
  height: 45px;
  font-weight: 700;
  cursor: pointer;
  S &:disabled {
    cursor: not-allowed;
  }
`;
