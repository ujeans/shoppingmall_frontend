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
}) => (
  <InputContainer>
    <IconWrapper>
      <Icon src={iconSrc} />
    </IconWrapper>
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
    />
  </InputContainer>
);

export default InputField;

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
  height: 56px;
  text-indent: 12px;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
    color: ${theme.placeholderText};
  }
`;
