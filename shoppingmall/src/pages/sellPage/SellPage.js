import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../../components/commom/Pagination";
import SellFilter from "../../components/commom/SellFilter";
import ArrowButton from "../../components/commom/ArrowButton";
import HeaderText from "../../components/commom/HeaderText";
import ProductItem from "../../components/commom/ProductItem";

const SellPage = () => {
  const productsPerRow = 3;

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
    // 필요한 만큼 제품 추가
  ]);

  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  const toggleSellingStatus = () => {
    setIsActive((prevStatus) => !prevStatus);
    console.log("판매중 필터 클릭 ");
  };

  const handleArrowClick = () => {
    console.log("화살표 클릭 로직 구현");
  };

  return (
    <SellPageLayout>
      <SellPageContainer>
        <ArrowButton onClick={handleArrowClick} />
        <HeaderText text="판매 내역" />
        <SellFilter
          toggleSellingStatus={toggleSellingStatus}
          isActive={isActive}
        />
        <ListContainer>
          {products.map((product, index) => (
            <ProductItem
              key={index}
              product={product} // product 전달
              productsPerRow={productsPerRow}
            />
          ))}
        </ListContainer>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </SellPageContainer>
    </SellPageLayout>
  );
};

export default SellPage;

const SellPageLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SellPageContainer = styled.div`
  text-align: center;
  position: relative;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
