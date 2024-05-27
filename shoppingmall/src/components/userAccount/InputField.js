import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const InputField = ({
  iconSrc,
  placeholder,
  type = "text",
  value,
  name,
  onChange,
  error,
  errorMessage,
}) => (
  <Wrapper>
    <InputContainer error={error}>
      <IconWrapper>
        <Icon src={iconSrc} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
      />
    </InputContainer>
    {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

export default InputField;
const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 463px;
  border: 1px solid ${theme.border};
  ${({ error }) => error && `border-color:red;`}
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
  height: 56px;
  text-indent: 12px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
    color: ${theme.placeholderText};
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  text-indent: 47px;
  padding-top: 5px;
  width: 465px;
  text-align: left;
`;
