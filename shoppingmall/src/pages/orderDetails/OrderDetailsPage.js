import { useLocation } from "react-router-dom";
// components
import ContentLayout from "../../components/commom/ContentLayout";
// styles
import EmptyContentLayout from "../../components/commom/EmptyContentLayout";
import OrderDetailsList from "../../components/orderDetails/OrderDetailsList";

const OrderDetailsPage = () => {
  const location = useLocation();
  const { orderItems } = location.state || { orderItems: [] };

  return (
    <ContentLayout title={"주문내역"} width="1000px">
      {orderItems.length === 0 ? (
        <EmptyContentLayout content={"주문내역에 상품이 없습니다."} />
      ) : (
        <OrderDetailsList orderItems={orderItems} />
      )}
    </ContentLayout>
  );
};

export default OrderDetailsPage;
