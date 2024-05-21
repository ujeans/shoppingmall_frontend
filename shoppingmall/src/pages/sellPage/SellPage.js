import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/LeftArrow.svg";
import ModifyIcon from "../../assets/Modify.svg";

const SellPage = () => {
  const productsPerRow = 4; // 한 줄에 나열할 제품 수

  const [products, setProducts] = useState([
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "제목입니다",
      price: "₩10000",
      description:
        "설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.설명란입니다.",
    },
    // 필요한 만큼 제품 추가
  ]);

  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  const [isSelling, setIsSelling] = useState(true);

  const toggleSellingStatus = () => {
    setIsSelling((prevStatus) => !prevStatus);
  };

  const handleArrowClick = () => {
    console.log("화살표 클릭 로직 구현");
  };

  return (
    <SellPageLayout>
      <SellPageContainer>
        <ArrowContainer onClick={handleArrowClick}>
          <CustomArrow src={LeftArrowIcon} alt="Left Arrow" />
        </ArrowContainer>
        <HeaderContainer>판매 내역</HeaderContainer>
        <ButtonContainer>
          <SellButton onClick={toggleSellingStatus} isSelling={isSelling}>
            {isSelling ? "판매중" : "판매종료"}
          </SellButton>
        </ButtonContainer>
        <ListContainer>
          {products.map((product, index) => (
            <ProductItem key={index} productsPerRow={productsPerRow}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductButton src={ModifyIcon} alt="수정"></ProductButton>
              </ProductInfo>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductItem>
          ))}
        </ListContainer>
        <PaginationContainer>
          <PageButton
            onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          >
            <ArrowIcon src={LeftArrowIcon} alt="Previous" />
          </PageButton>
          {pages.map((page, index) => (
            <PageButton
              key={index}
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PageButton>
          ))}
          <PageButton
            onClick={() =>
              onPageChange(
                currentPage < pages.length ? currentPage + 1 : pages.length
              )
            }
          >
            <ArrowIcon src={LeftArrowIcon} alt="Next" flipped />
          </PageButton>
        </PaginationContainer>
      </SellPageContainer>
    </SellPageLayout>
  );
};

export default SellPage;

const SellPageLayout = styled.div`
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px; /* 내부 여백 추가 */
`;

const SellPageContainer = styled.div`
  text-align: center;
  position: relative;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

const CustomArrow = styled.img`
  width: 20px;
  height: 20px;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 29.05px;
`;

const ButtonContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const SellButton = styled.button`
  background-color: ${(props) => (props.isSelling ? "#ffffff" : "#EB4646")};
  color: black;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #d1d4d8;
  width: 80px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductItem = styled.div`
  padding: 2px;
  margin: 10px;
  width: calc(100% / ${(props) => props.productsPerRow} - 20px);
  box-sizing: border-box;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
`;

const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  flex-grow: 1;
`;

const ProductButton = styled.img`
  padding: 10px;
  border: none;
  cursor: pointer;
  filter: brightness(1.8);
  &:hover {
    filter: brightness(1); /* 호버 시 밝기 조절 */
  }
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #333;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
`;

const ProductDescription = styled.p`
  font-size: 0.8em;
  color: #666;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const PageButton = styled.button`
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 18px;
  transform: ${(props) => (props.flipped ? "scaleX(-1)" : "none")};
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
