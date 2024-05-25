import { useState } from "react";
// components
import ContentLayout from "../../components/commom/ContentLayout";
// assets
import EmptyCart from "../../components/cart/EmptyCart";
import FilledCart from "../../components/cart/FilledCart";

const products = [
  {
    cart_item_id: 1,
    product_id: 1,
    quantity: 1,
    name: "상품명1",
    price: "174,000",
    user: "아이디1",
  },
  {
    cart_item_id: 2,
    product_id: 2,
    quantity: 1,
    name: "상품명2",
    price: "200,000",
    user: "아이디2",
  },
  {
    cart_item_id: 3,
    product_id: 3,
    quantity: 1,
    name: "상품명3",
    price: "200,000",
    user: "아이디3",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(products);
  const [allChecked, setAllChecked] = useState(false);

  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    setCartItems(prevItems =>
      prevItems.map(item => ({ ...item, checked: !allChecked }))
    );
  };

  const handleDeleteSelected = () => {
    setCartItems(prevItems => prevItems.filter(item => !item.checked));
  };

  return (
    <ContentLayout title={"장바구니"} width="800px">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          allChecked={allChecked}
          onToggleAllChecked={handleAllChecked}
          onDeleteSelected={handleDeleteSelected}
        />
      )}
    </ContentLayout>
  );
};

export default Cart;
