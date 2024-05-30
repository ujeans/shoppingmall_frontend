import React, { useState, useEffect } from "react";
import PaginationArea from "../../components/sellpage/PaginationArea";
import FilterArea from "../../components/sellpage/FilterArea";
import HeaderArea from "../../components/sellpage/HeaderArea";
import ProductArea from "../../components/sellpage/ProductArea";
import PageLayout from "../../components/commom/PageLayout";
import { Navigate } from "react-router-dom";
import Modal from "../../components/commom/Modal/Modal";

const SellPage = () => {
  const [pageData, setPageData] = useState([]);
  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterAreaData, setFilterAreaData] = useState(true);
  const Filerender = (data) => {
    setPageData(data);
  };

  useEffect(() => {
    //페이지 정보 관리
  }, [pageData]);

  // FilterArea로부터 값을 받는 콜백 함수
  const handleFilterClick = (data) => {
    setFilterAreaData(data);
  };
  useEffect(() => {
    //판매중 필터기능
  }, [filterAreaData]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToPage = () => {
    return <Navigate to="/sell" />;
  };
  const token = localStorage.getItem("login-token");

  if (!token) {
    console.log("토큰이 유효하지 않습니다. 로그인 페이지로 이동");
    return <Navigate to="/login" />;
  }

  return (
    <PageLayout>
      {isModalOpen == true && (
        <Modal
          onClose={closeModal}
          title="title"
          subText="subTextsubText"
          navigateToPage={navigateToPage}
        />
      )}
      <HeaderArea text="판매 내역" />
      <FilterArea onFilterClick={handleFilterClick} />
      <ProductArea ProductData={pageData} />
      <PaginationArea pageNum={2} Filerender={Filerender} />
    </PageLayout>
  );
};

export default SellPage;
