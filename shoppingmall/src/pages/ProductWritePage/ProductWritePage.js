import React from "react";
import ProductComponent from "../../components/productwritepage/ProductComponent";
import ContentLayout from "../../components/commom/ContentLayout";

const ProductRegistrationPage = () => {
  return (
    <ContentLayout title={"상품 등록"} width="1060px">
      <ProductComponent />
    </ContentLayout>
  );
};

export default ProductRegistrationPage;
