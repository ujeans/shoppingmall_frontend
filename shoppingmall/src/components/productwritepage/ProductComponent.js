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
            width: "55px",
            height: "55px",
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
      <Content>
        <Title>상품명</Title>
        <TitleInput type="text" placeholder="제목" />
        <ContentWrapper>
          <ImageWrapper>
            <Title>이미지</Title>
            <MainImage />
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
          </ImageWrapper>
          <SubContentWrapper>
            <Title>가격</Title>
            <Input type="text" placeholder="₩ 가격을 입력해주세요." />
            <Title>판매 기간</Title>
            <Datecontainer>
              <DateIcon />
              <DateInput />
              <Datetext>~</Datetext>
              <DateIcon />
              <DateInput />
            </Datecontainer>
            <Title>카테고리</Title>
            <DevBox />
          </SubContentWrapper>
        </ContentWrapper>

        <Title>상세 설명</Title>
        <TextArea placeholder="게시글 내용을 작성해주세요." />
      </Content>
    </Wrapper>
  );
};

export default ProductComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 1030px;
  height: 830px;
  border: 1px solid #d1d4d8;
  border-radius: 2px;
  padding: 15px;
  margin-top: 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`;

const SubContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 60px;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 70px;
  height: 30px;
  margin-top: 20px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.15px;
  text-align: left;
`;

const TitleInput = styled.input`
  display: block;
  width: 1025px;
  height: 36px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  display: block;
  width: 562px;
  height: 36px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;

const DateInput = styled.div`
  width: 237px;
  height: 36px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;
const DateIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-top: 6px;
  background-image: url(${dateIcon});
  background-size: cover;
  cursor: pointer;
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
  margin: 7px 6px 6px 5px;
`;
const TextArea = styled.textarea`
  width: 1018px;
  height: 140px;
  padding: 5px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

const ImageInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 55px;
  height: 55px;
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
  width: 55px;
  height: 55px;
  border: 1px solid #ccc;
  margin-left: 5px;
  img {
    width: 55px;
    height: 55px;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 7px;
  img {
    width: 400px;
    height: 400px;
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

const DevBox = styled.div`
  position: relative;
  width: 566px;
  height: 279px;
  border: 1px solid #ccc;
`;
