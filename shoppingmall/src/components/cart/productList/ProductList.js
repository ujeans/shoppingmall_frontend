import styled from "styled-components";
import { useEffect, useState } from "react";
// assets
import checkbox from "../../../assets/checkbox.svg";
import checkedbox from "../../../assets/checkedbox.svg";
// components
import Info from "./Info";
import Count from "./Count";
import OrderAmount from "./OrderAmount";

const ProductList = ({ cartItems, allChecked }) => {
  const [count, setCount] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.cart_item_id] = item.quantity;
      return acc;
    }, {})
  );

  const [checkedItems, setCheckedItems] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.cart_item_id] = false;
      return acc;
    }, {})
  );

  useEffect(() => {
    setCheckedItems(
      cartItems.reduce((acc, item) => {
        acc[item.cart_item_id] = allChecked;
        return acc;
      }, {})
    );
  }, [allChecked, cartItems]);

  const updateCount = (id, newCount) => {
    setCount(prevCounts => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

  const toggleCheck = id => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  return (
    <>
      {cartItems.map(product => {
        const totalPrice =
          parseInt(product.price.replace(/,/g, ""), 10) *
          count[product.cart_item_id];
        return (
          <Container key={product.cart_item_id}>
            <Wrapper>
              <Checkbox
                onClick={() => toggleCheck(product.cart_item_id)}
                checked={checkedItems[product.cart_item_id]}
              >
                {checkedItems[product.cart_item_id] ? (
                  <Icon src={checkedbox} />
                ) : (
                  <Icon src={checkbox} />
                )}
              </Checkbox>
              <Info product={product} />
              <Count
                quantity={count[product.cart_item_id]}
                onUpdateCount={newCount =>
                  updateCount(product.cart_item_id, newCount)
                }
              />
              <OrderAmount totalPrice={totalPrice} />
            </Wrapper>
          </Container>
        );
      })}
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
  border-bottom: 1px solid ${props => props.theme.border};
`;

const Checkbox = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
