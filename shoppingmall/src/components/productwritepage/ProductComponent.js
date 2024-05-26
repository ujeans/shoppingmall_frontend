import React, { useState } from "react";
import styled from "styled-components";
import dateIcon from "../../assets/date.svg";
import plusIcon from "../../assets/plus.svg";
import deleteIcon from "../../assets/delete.svg";

const ProductComponent = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImages.push(e.target.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const renderImages = () => {
    if (images.length === 0) {
      return (
        <div
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            background: "#f4f4f4",
          }}
        />
      );
    }

    return images.map((image, index) => (
      <img key={index} src={image} alt={`Image ${index + 1}`} />
    ));
  };

  const maxImages = 10;
  const remainingImages = maxImages - images.length;

  return (
    <Wrapper>
      <Container>
        <Row>
          <Title>제목</Title>
          <Input type="text" placeholder="제목" />
        </Row>
        <Row>
          <Title>가격</Title>
          <Input type="text" placeholder="₩ 가격을 입력해주세요." />
        </Row>
        <Row>
          <Title>판매 기간</Title>
          <Datecontainer>
            <DateIcon />
            <DateInput />
            <Datetext>~</Datetext>
            <DateIcon />
            <DateInput />
          </Datecontainer>
        </Row>
        <Row>
          <Title>카테고리</Title>
        </Row>
        <Row>
          <Title>상세 설명</Title>
          <TextArea placeholder="게시글 내용을 작성해주세요." />
        </Row>
        <Row>
          <Title>이미지</Title>
          <ImageInputWrapper>
            <ImageInput
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <ImageButton>
              <PlusIcon />
              <ImageCounter>
                {images.length}/{maxImages}
              </ImageCounter>
            </ImageButton>
            <ImagePreview>
              {renderImages()}
              <DeleteButton />
            </ImagePreview>
          </ImageInputWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ProductComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d1d4d8;
  border-radius: 10px;
  max-width: 1090px;
  margin: 46px 271px 0 271px;
`;

const Container = styled.div`
  width: 548px;
  height: 650px;
`;

const Row = styled.div`
  display: flex;
  align-items: start;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 105px;
  height: 67px;
  margin: 21px 0 21px 18px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.15px;
  text-align: left;
`;

const Input = styled.input`
  display: block;
  width: 416px;
  height: 36px;
  margin: 12px 27px 0 0;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;

const DateInput = styled(Input)`
  width: 153px;
  height: 36px;
`;
const DateIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-top: 17px;
  background-image: url(${dateIcon});
  background-size: cover;
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
  margin: 23px 6px 0 -14px;
`;
const TextArea = styled.textarea`
  width: 416px;
  height: 220px;
  margin: 17px 27px 29px 0;
  padding: 5px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
`;

const ImageInputWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 17px 27px 0 0;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  color: #ccc;
  cursor: pointer;
`;

const ImageCounter = styled.div`
  font-size: 12px;
`;

const PlusIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${plusIcon});
  background-size: cover;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  margin-left: 23px;
  img {
    width: 80px;
    height: 80px;
  }
`;

const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -9px;
  right: -9px;
  background-color: transparent;
  background-image: url(${deleteIcon});
  background-size: cover;
  cursor: pointer;
  border: none;
`;
