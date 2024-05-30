import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import dateIcon from "../../assets/date.svg";
import plusIcon from "../../assets/plus.svg";
import deleteIcon from "../../assets/delete.svg";
import Modal from "../commom/Modal/Modal";
import { BlackBtn } from "../../style/CommonStyles";

import { Container } from "../../style/CommonStyles";

const ProductComponent = ({ event }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [files, setFiles] = useState([]);
  const [rawFiles, setRawFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [productData, setProductData] = useState({});
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState();
  const [userpassword, setUserpassword] = useState();
  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToPage = (e) => {
    if (event == 0) {
      // 유효성 검사
      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      const productOption = "임시옵션";

      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const formattedStartDate = startDate ? formatDate(startDate) : null;
      const formattedEndDate = endDate ? formatDate(endDate) : null;

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", parseFloat(price));
      formData.append("stock", parseFloat(stock));
      formData.append("productOption", productOption);
      formData.append("startDate", formattedStartDate);
      formData.append("endDate", formattedEndDate);
      formData.append("description", description);
      const maxSize = 10 * 1024 * 1024; // 10MB
      rawFiles.forEach((file) => {
        if (file.size > maxSize) {
          alert("파일 크기는 10MB를 초과할 수 없습니다.");
          throw new Error("파일 크기 초과");
        }
        formData.append(`files`, file);
        console.log("파일 크기: ", file.size);
      });

      for (let [key, value] of formData.entries()) {
        console.log(key + ", " + value);
      }

      const url = `${process.env.REACT_APP_API_URL}/products/register`;
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data, url);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (event == 1) {
      // 수정 처리

      // 유효성 검사
      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      const productOption = "임시옵션";

      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const formattedStartDate = startDate ? formatDate(startDate) : null;
      const formattedEndDate = endDate ? formatDate(endDate) : null;
      const productId = localStorage.getItem("productId");

      const url = `${process.env.REACT_APP_API_URL}/products/${productId}`;
      const formData = new FormData();
      formData.append("productId", productId);
      formData.append("productName", productName);
      formData.append("price", parseFloat(price));
      formData.append("stock", parseFloat(stock));
      formData.append("productOption", productOption);
      formData.append("startDate", formattedStartDate);
      formData.append("endDate", formattedEndDate);
      formData.append("description", description);
      formData.append("email", email);
      formData.append("password", "zero123456");
      const maxSize = 10 * 1024 * 1024; // 10MB
      rawFiles.forEach((file) => {
        if (file.size > maxSize) {
          alert("파일 크기는 10MB를 초과할 수 없습니다.");
          throw new Error("파일 크기 초과");
        }
        formData.append(`files`, file);
      });

      for (let [key, value] of formData.entries()) {
        console.log(key + ", " + value);
      }

      const options = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // 성공적으로 처리된 경우 사용자에게 알림 등을 추가할 수 있습니다.
        })
        .catch((error) => {
          console.error("Error:", error);
          // 오류 발생 시 사용자에게 알림 등을 추가할 수 있습니다.
        });
    }
    // setIsModalOpen(false);
    // setSuccess(false);
  };

  const fileInputRef = useRef(null);
  const token = localStorage.getItem("login-token");

  useEffect(() => {
    if (event == 1) {
      const userId = localStorage.getItem("user_Id");
      const userurl = `${process.env.REACT_APP_API_URL}/users/${userId}`;
      const useroptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(userurl, useroptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("유저 정보를 가져오는데 실패했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data); // 데이터를 제대로 가져왔는지 확인
          setEmail(data.email);
          setUserpassword(data.password);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      const productId = localStorage.getItem("productId");
      const url = `${process.env.REACT_APP_API_URL}/product/${productId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("상품 정보를 가져오는데 실패했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data); // 데이터를 제대로 가져왔는지 확인
          const imagesArray = data.base64images.map((imageBase64) => ({
            image: `data:image/jpeg;base64,${imageBase64}`,
          }));
          setImages(imagesArray);

          const productInfo = {
            title: data.productName,
            price: data.price,
            files: data.base64images,
            startDate: data.startDate,
            endDate: data.endDate,
            stock: data.stock,
            description: data.description,
          };
          setProductData(productInfo);

          const imageInfo = [];
          imagesArray.forEach((item) => {
            imageInfo.push(item.image);
          });

          setFiles(imageInfo);
        })

        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  if (!token) {
    console.log("토큰이 유효하지 않습니다. 로그인 페이지로 이동");
    return <Navigate to="/login" />;
  }

  if (!success) {
    return <Navigate to="/sell" />;
  }

  const maxfiles = 10;
  const remainingfiles = maxfiles - files.length;

  const handleImageChange = (e) => {
    const files = e.target.files;

    const maxSize = 10 * 1024 * 1024; // 10MB

    const formData = new FormData();
    const newRawFiles = []; // 새로운 인코딩되지 않은 원본 파일을 저장하는 배열

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > maxSize) {
        alert("파일 크기는 10MB를 초과할 수 없습니다.");
        return;
      }
      formData.append("files", file); // FormData에는 인코딩된 파일을 추가
      newRawFiles.push(file); // newRawFiles 배열에는 인코딩되지 않은 원본 파일을 추가
    }

    setRawFiles((prevRawFiles) => [...prevRawFiles, ...newRawFiles]);

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
        setFiles((prevfiles) => {
          const newfiles = [...prevfiles, ...results];
          if (newfiles.length > 10) {
            return newfiles.slice(newfiles.length - 10);
          }

          return newfiles;
        });
        fileInputRef.current.value = null;
      })
      .catch((error) => {
        console.error("이미지를 읽는 동안 오류가 발생했습니다.", error);
      });
  };

  const handleDeleteImage = (index) => {
    const newFiles = [...files];
    const newRawFiles = [...rawFiles]; // rawFiles 복사
    newFiles.splice(index, 1); // 파일 삭제
    newRawFiles.splice(index, 1); // rawFiles에서도 삭제
    setFiles(newFiles); // 파일 상태 업데이트
    setRawFiles(newRawFiles); // rawFiles 상태 업데이트
  };

  const renderfiles = () => {
    return files.map((image, index) => (
      <ImagePreview key={index}>
        <img src={image} alt={`Uploaded file ${index + 1}`} />
        <DeleteButton onClick={() => handleDeleteImage(index)} />
      </ImagePreview>
    ));
  };

  const handleSubmit = (e) => {
    // 유효성 검사
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    setIsModalOpen(true);
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
      {isModalOpen == true && (
        <Modal
          onClose={closeModal}
          title="상품을 등록 하시겠습니까?"
          subText="확인 버튼을 클릭해주세요"
          navigateToPage={navigateToPage}
        />
      )}
      <Container borderBottom="true">
        <Content>
          <MainWrapper>
            <ProductName>상품명</ProductName>

            <ProductNameInput
              type="text"
              placeholder="상품명을 입력해주세요."
              defaultValue={productData.title}
              onChange={(e) => setProductName(e.target.value)}
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
                  defaultValue={productData.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <ProductName>판매 기간</ProductName>
                <DateContainer>
                  <DateIcon onClick={handleSDateIconClick} />
                  <StyledDatePicker
                    id="Sdate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="시작 날짜를 선택하세요."
                    defaultValue={productData.startDate}
                  />
                  <Datetext>~</Datetext>
                  <DateIcon onClick={handleEDateIconClick} />
                  <StyledDatePicker
                    id="Edate"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="종료 날짜를 선택하세요."
                    defaultValue={productData.endDate}
                  />
                </DateContainer>
                <ProductName>재고</ProductName>
                <Input
                  type="text"
                  placeholder="재고수량을 입력해주세요."
                  defaultValue={productData.stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                <ProductName>상세 설명</ProductName>
                <TextArea
                  placeholder="게시글 내용을 작성해주세요."
                  defaultValue={productData.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </SubContentWrapper>
            </ContentWrapper>
            <ProductName>카테고리</ProductName>
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
