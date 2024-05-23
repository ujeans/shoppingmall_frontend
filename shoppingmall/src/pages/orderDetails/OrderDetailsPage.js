// components
import ContentLayout from "../../components/commom/ContentLayout";
// styles
import { Container } from "../../style/CommonStyles";
import OrderDetailsList from "../../components/orderDetails/OrderDetailsList";

const OrderDetailsPage = () => {
  return (
    <ContentLayout title={"주문내역"} width="1000px">
      <Container borderBottom={false}>
        <OrderDetailsList />
      </Container>
    </ContentLayout>
  );
};

export default OrderDetailsPage;
