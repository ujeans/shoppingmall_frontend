import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";

const Signup = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <Header>super24</Header>
        </Title>
        <Info>회원정보를 입력해주세요</Info>
        <InputWrapper>
          <InputContainer>
            <IconWrapper>
              <Icon src={email} />
            </IconWrapper>
            <Input placeholder="아이디(이메일)" type="email" required />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>
            <Input placeholder="비밀번호" type="password" required />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>
            <Input placeholder="비밀번호 확인" type="password" required />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={people} />
            </IconWrapper>
            <Input placeholder="이름" required />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={phone} />
            </IconWrapper>
            <Input placeholder="휴대폰 번호" required />
          </InputContainer>

          <FileInputWrapper>
            <FileInfo>나를 나타내는 프로필 사진을 등록해주세요</FileInfo>
            <Input type="file" accept="image/*" />
          </FileInputWrapper>
          <InputContainer>
            <Input placeholder="닉네임" required />
          </InputContainer>
          <SubmitButton>가입하기</SubmitButton>
        </InputWrapper>
      </Wrapper>
    </>
  );
};

export default Signup;

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

const Info = styled.h2`
  font-weight: 800;
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
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
  border: 1px solid #000000;
`;

const IconWrapper = styled.div`
  padding: 10px;
  height: 100%
  background-color: ${theme.grayBgColor};
  border-right: 1px solid #000000;
`;

const Icon = styled.img``;

const Input = styled.input`
  width: 100%;
  height: 62px;
  text-indent: 12px;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  &::placeholder {
    color: ${theme.placeholderText};
  }
`;

const FileInputWrapper = styled.div`
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
`;

const FileInfo = styled.span`
  display: flex;
  margin: 10px 0 10px 0;
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
`;
