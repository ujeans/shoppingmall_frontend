import React, { useState, useRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import dateIcon from "../../assets/date.svg";
import plusIcon from "../../assets/plus.svg";
import deleteIcon from "../../assets/delete.svg";

import { BlackBtn, Container } from "../../style/CommonStyles";

const ProductComponent = Route => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);
  const maxfiles = 10;
  const remainingfiles = maxfiles - files.length;

  const handleImageChange = e => {
    const files = e.target.files;

    const promises = Array.from(files).map(file => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = e => {
          resolve(e.target.result);
        };

        reader.onerror = error => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then(results => {
        setFiles(prevfiles => {
          const newfiles = [...prevfiles, ...results];
          if (newfiles.length > 10) {
            return newfiles.slice(newfiles.length - 10);
          }
          return newfiles;
        });
        fileInputRef.current.value = null;
      })
      .catch(error => {
        console.error("이미지를 읽는 동안 오류가 발생했습니다.", error);
      });
  };

  const handleDeleteImage = index => {
    const newfiles = [...files];
    newfiles.splice(index, 1);
    setFiles(newfiles);
  };

  const renderfiles = () => {
    return files.map((image, index) => (
      <ImagePreview key={index}>
        <img src={image} alt={`Uploaded file ${index + 1}`} />
        <DeleteButton onClick={() => handleDeleteImage(index)} />
      </ImagePreview>
    ));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 유효성 검사
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    const formData = {
      productName,
      price,
      stock,
      description,
      startDate,
      endDate,
      files,
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

  // 유효성 검사 함수
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // 상품명 검사
    if (productName.length < 3 || productName.length > 20) {
      errors.productName = "상품명은 3자 이상 20자 이하여야 합니다.";
      isValid = false;
    }

    // 가격 검사
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue < 1) {
      errors.price = "가격은 1 이상 숫자만 입력 가능합니다.";
      isValid = false;
    }

    // 시작 날짜가 존재하지 않으면 오류
    if (!startDate) {
      errors.startDate = "시작 날짜를 선택해주세요.";
      isValid = false;
    }

    // 종료 날짜가 존재하지 않으면 오류
    if (!endDate) {
      errors.endDate = "종료 날짜를 선택해주세요.";
      isValid = false;
    }

    // 시작 날짜가 종료 날짜보다 늦으면 오류
    if (startDate && endDate && startDate > endDate) {
      errors.startDate = "시작 날짜는 종료 날짜보다 먼저여야 합니다.";
      isValid = false;
    }

    // 재고 검사
    const stockValue = parseFloat(stock);
    if (isNaN(stockValue) || stockValue < 1) {
      errors.stock = "재고는 1 이상 숫자만 입력 가능합니다.";
      isValid = false;
    }

    // 상세 설명 검사
    if (description.length < 10) {
      errors.description = "상세 설명은 10자 이상 입력해주세요.";
      isValid = false;
    }

    // 이미지 수 검사
    if (files.length < 1) {
      errors.files = "이미지는 최소 1개 이상 등록해야 합니다.";
      isValid = false;
    }

    // 에러가 있으면 메시지 출력
    if (!isValid) {
      console.log("유효성 검사 실패:", errors);
      // 여기에 모달로 메시지 출력하거나 다른 방식으로 사용자에게 알림
    }

    return isValid;
  };

  return (
    <Wrapper>
      <Container borderBottom="true">
        <Content>
          <MainWrapper>
            <ProductName>상품명</ProductName>
            <ProductNameInput
              type="text"
              placeholder="상품명을 입력해주세요."
              onChange={e => setProductName(e.target.value)}
            />
            <ContentWrapper>
              <ImageWrapper>
                <ProductName>이미지</ProductName>
                <MainImage>
                  {files.length > 0 && (
                    <img src={files[0]} alt="Main product" />
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
                      disabled={remainingfiles <= 0}
                    />
                    <PlusIcon />
                    <div>
                      {files.length}/{maxfiles}
                    </div>
                  </ImageButton>
                  <ImagePreviewWrapper>{renderfiles()}</ImagePreviewWrapper>
                </ImageInputWrapper>
              </ImageWrapper>
              <SubContentWrapper>
                <ProductName>가격</ProductName>
                <Input
                  type="text"
                  placeholder="₩ 가격을 입력해주세요."
                  onChange={e => setPrice(e.target.value)}
                />
                <ProductName>판매 기간</ProductName>
                <DateContainer>
                  <DateIcon onClick={handleSDateIconClick} />
                  <StyledDatePicker
                    id="Sdate"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="시작 날짜를 선택하세요."
                  />
                  <Datetext>~</Datetext>
                  <DateIcon onClick={handleEDateIconClick} />
                  <StyledDatePicker
                    id="Edate"
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="종료 날짜를 선택하세요."
                  />
                </DateContainer>
                <ProductName>재고</ProductName>
                <Input
                  type="text"
                  placeholder="재고수량을 입력해주세요."
                  onChange={e => setStock(e.target.value)}
                />
                <ProductName>상세 설명</ProductName>
                <TextArea
                  placeholder="게시글 내용을 작성해주세요."
                  onChange={e => setDescription(e.target.value)}
                />
              </SubContentWrapper>
            </ContentWrapper>
            <ProductName>카테고리</ProductName>
            <DevBox />
          </MainWrapper>
        </Content>
      </Container>
      <FooterWrapper>
        <ComppletedButton
          padding="15px 170px"
          fontSize="20px"
          onClick={handleSubmit}
        >
          작성 완료
        </ComppletedButton>
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
  border-radius: 2px;
  padding-bottom: 20px;
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

const ProductName = styled.div`
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

const ProductNameInput = styled.input`
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

const ComppletedButton = styled(BlackBtn)`
  /* width: 250px;
  height: 40px; */
  font-size: 16px;
  font-weight: bold;
  background: black;
  color: white;
  border: 1px solid black;
  margin: 120px 0 45px 0;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.mainColor};
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
