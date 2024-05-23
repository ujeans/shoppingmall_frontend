import styled from "styled-components";
// assets
import checkbox from "../../../assets/checkbox.svg";
// components
import Info from "./Info";
import Count from "./Count";
import OrderAmount from "./OrderAmount";

const ProductList = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((product, idx) => (
        <Container key={product.id}>
          <Wrapper>
            <Checkbox>
              <Icon src={checkbox} />
            </Checkbox>
            <Info product={product} />
            <Count />
            <OrderAmount product={product} />
          </Wrapper>
        </Container>
      ))}
    </>
  );
};

export default ProductList;

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #d1d4d8;
`;

const Checkbox = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;

  &.x-circle {
    margin: 25px 15px 0 0;
    margin-bottom: auto;
  }
`;
