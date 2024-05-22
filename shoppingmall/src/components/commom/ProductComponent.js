import React from "react";
import styled from "styled-components";
import dateIcon from "../../assets/date.svg";

const ProductComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Title>제목</Title>
          <Input type="text" />
        </Row>
        <Row>
          <Title>가격</Title>
          <Input type="text" />
        </Row>
        <Row>
          <Title>판매 기간</Title>
          <Datecontainer>
            <DateIcon />
            <DateInput type="date" /> <Datetext>~</Datetext> <DateIcon />
            <DateInput type="date" />
          </Datecontainer>
        </Row>
        <Row>
          <Title>카테고리</Title>
          <Input type="text" />
        </Row>
        <Row>
          <Title>상세 설명</Title>
          <TextArea />
        </Row>
        <Row>
          <Title>이미지</Title>
          <Button>+</Button>
          {/* 이미지들을 나열하는 로직을 추가 */}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ProductComponent;

const Wrapper = styled.div`
  border: 1px solid #d1d4d8;
  border-radius: 10px;
  width: 548px;
  height: 626px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 10px;
  width: 548px;
  height: 626px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Input = styled.input`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 380px;
  height: 36px;
  border: 1px 0px 0px 0px;
`;

const DateInput = styled(Input)`
  width: 150px;
`;

const TextArea = styled.textarea`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 373px;
  height: 100px;
  padding: 5px;
  resize: none;
  font-family: inherit;
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;

  background-color: #f4f4f4;
  color: #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const DateIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${dateIcon});
  background-size: cover;
  margin-right: 5px;
  margin-top: 8px;
`;

const Datecontainer = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.15px;
  text-align: left;
`;

const Datetext = styled.div`
  margin-top: 8px;
  padding: 0 10px 0 10px;
`;
