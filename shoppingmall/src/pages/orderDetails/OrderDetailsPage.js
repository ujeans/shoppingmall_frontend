import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// components
import ContentLayout from "../../components/commom/ContentLayout";
// styles
import EmptyContentLayout from "../../components/commom/EmptyContentLayout";
import OrderDetailsList from "../../components/orderDetails/OrderDetailsList";
// hooks
import useFetchData from "../../hooks/useFetchData";
// styles
import { LoadingSpinner } from "../../style/CommonStyles";

const OrderDetailsPage = () => {
  const userId = 15;
  const orderUrl = `${process.env.REACT_APP_API_URL}/order/${userId}`;

  const { data: orderItems, loading, error } = useFetchData(orderUrl);

  const location = useLocation();
  const { orderItems: stateOrderItems = [] } = location.state || {
    orderItems: [],
  };

  if (loading) {
    return (
      <LoadingSpinner>
        <ClipLoader size={150} />
      </LoadingSpinner>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const itemsToDisplay =
    stateOrderItems.length > 0 ? stateOrderItems : orderItems;

  return (
    <ContentLayout title={"주문내역"} width="1000px">
      {itemsToDisplay.length === 0 ? (
        <EmptyContentLayout content={"주문내역에 상품이 없습니다."} />
      ) : (
        <OrderDetailsList orderItems={itemsToDisplay} />
      )}
    </ContentLayout>
  );
};

export default OrderDetailsPage;
