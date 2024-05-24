import React from "react";
import HeaderArea from "../../components/sellpage/HeaderArea";
import ProductComponent from "../../components/productwritepage/ProductComponent";
import CompletedButton from "../../components/productwritepage/CompletedButton";
import PageLayout from "../../components/commom/PageLayout";

const ProductRegistrationPage = () => {
  return (
    <PageLayout>
      <HeaderArea text="상품 등록" />
      <ProductComponent />
      <CompletedButton text="작성 완료" />
    </PageLayout>
  );
};

export default ProductRegistrationPage;
