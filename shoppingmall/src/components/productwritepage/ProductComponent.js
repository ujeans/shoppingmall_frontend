import React, { useState, useRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import dateIcon from "../../assets/date.svg";
import plusIcon from "../../assets/plus.svg";
import deleteIcon from "../../assets/delete.svg";

import { Container } from "../../style/CommonStyles";

const ProductComponent = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [images, setImages] = useState([]);

  const fileInputRef = useRef(null);
  const maxImages = 10;
  const remainingImages = maxImages - images.length;

  const handleImageChange = (e) => {
    const files = e.target.files;

    const promises = Array.from(files).map((file) => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = (e) => {
          resolve(e.target.result);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((results) => {
        setImages((prevImages) => {
          const newImages = [...prevImages, ...results];
          if (newImages.length > 10) {
            return newImages.slice(newImages.length - 10);
          }
          return newImages;
        });
      })
      .catch((error) => {
        console.error("이미지를 읽는 동안 오류가 발생했습니다.", error);
      });
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <ImagePreview key={index}>
        <img src={image} alt={`Image ${index + 1}`} />
        <DeleteButton onClick={() => handleDeleteImage(index)} />
      </ImagePreview>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      price,
      count,
      description,
      startDate,
      endDate,
      images,
    };
    console.log("제출:", formData);
    // 여기서 폼 데이터를 서버로 전송하는 작업을 수행할 수 있습니다.
  };

  const handleSDateIconClick = () => {
    document.getElementById("Sdate").focus();
  };

  const handleEDateIconClick = () => {
    document.getElementById("Edate").focus();
  };

  return (
    <Wrapper>
      <Container borderBottom="true">
        <Content>
          <MainWrapper>
            <Title>상품명</Title>
            <TitleInput
              type="text"
              placeholder="상품명을 입력해주세요."
              onChange={(e) => setTitle(e.target.value)}
            />
            <ContentWrapper>
              <ImageWrapper>
                <Title>이미지</Title>
                <MainImage>
                  {images.length > 0 && (
                    <img src={images[0]} alt="Main Image" />
                  )}
                </MainImage>
                <ImageInputWrapper>
                  <ImageButton>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      disabled={remainingImages <= 0}
                    />
                    <PlusIcon />
                    <ImageCounter>
                      {images.length}/{maxImages}
                    </ImageCounter>
                  </ImageButton>
                  <ImagePreviewWrapper>{renderImages()}</ImagePreviewWrapper>
                </ImageInputWrapper>
              </ImageWrapper>
              <SubContentWrapper>
                <Title>가격</Title>
                <Input
                  type="text"
                  placeholder="₩ 가격을 입력해주세요."
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Title>판매 기간</Title>
                <DateContainer>
                  <DateIcon onClick={handleSDateIconClick} />
                  <StyledDatePicker
                    id="Sdate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="시작 날짜를 선택하세요."
                  />
                  <Datetext>~</Datetext>
                  <DateIcon onClick={handleEDateIconClick} />
                  <StyledDatePicker
                    id="Edate"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="종료 날짜를 선택하세요."
                  />
                </DateContainer>
                <Title>재고</Title>
                <Input
                  type="text"
                  placeholder="재고수량을 입력해주세요."
                  onChange={(e) => setCount(e.target.value)}
                />
                <Title>상세 설명</Title>
                <TextArea
                  placeholder="게시글 내용을 작성해주세요."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </SubContentWrapper>
            </ContentWrapper>
            <Title>카테고리</Title>
            <DevBox />
          </MainWrapper>
        </Content>
      </Container>
      <FooterWrapper>
        <ComppletedButton onClick={handleSubmit}>작성 완료</ComppletedButton>
      </FooterWrapper>
    </Wrapper>
  );
};
export default ProductComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MainWrapper = styled.div`
  max-width: 1030px;
  max-height: 830px;
  // overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 1030px;
  max-height: 830px;
  border: 1px solid #d1d4d8;
  border-radius: 2px;
  padding: 15px;
  margin-top: 0px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1030px;
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
  width: 1019px;
  height: 36px;
  padding-left: 7px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  display: block;
  width: 554px;
  height: 36px;
  padding-left: 7px;
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

const StyledDatePicker = styled(DatePicker)`
  width: 231px;
  height: 36px;
  padding-left: 7px;
  position: relative;

  background-color: #f4f4f4;
  border: 1px solid #ccc;
`;

const DateContainer = styled.div`
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
  width: 549px;
  height: 195px;
  padding: 7px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 405px;
  height: 80px;
  padding: 10px 0 10px 0;
  overflow-x: scroll;
`;

const ImagePreviewWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
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
  display: flex;
  position: relative;
  width: 55px;
  height: 55px;
  border: 1px solid #ccc;
  margin-left: 7px;
  background-color: #f4f4f4;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MainImage = styled.div`
  position: relative;

  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 7px;
  background-color: #f4f4f4;
  img {
    width: 400px;
    height: 400px;
  }
`;

const DevBox = styled.div`
  position: relative;

  width: 1028px;
  height: 130px;
  border: 1px solid #ccc;
`;

const ComppletedButton = styled.button`
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  background: black;
  color: white;
  border: 1px solid black;
  margin: 120px 0 45px 0;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;

const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -7px;
  right: -7px;
  background-color: transparent;
  background-image: url(${deleteIcon});
  background-size: cover;
  cursor: pointer;
  border: none;
`;
