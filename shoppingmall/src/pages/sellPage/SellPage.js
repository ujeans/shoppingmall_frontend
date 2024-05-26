import React from "react";
import PaginationArea from "../../components/sellpage/PaginationArea";
import FilterArea from "../../components/sellpage/FilterArea";
import HeaderArea from "../../components/sellpage/HeaderArea";
import ProductArea from "../../components/sellpage/ProductArea";
import PageLayout from "../../components/commom/PageLayout";

const SellPage = () => {
  return (
    <PageLayout>
      <HeaderArea text="판매 내역" />
      <FilterArea />
      <ProductArea />
      <PaginationArea />
    </PageLayout>
  );
};

export default SellPage;
