import { useState } from "react";
// components
import ContentLayout from "../../components/commom/ContentLayout";
// assets
import EmptyCart from "../../components/cart/EmptyCart";
import FilledCart from "../../components/cart/FilledCart";

const products = [
  { id: 1, name: "상품명1", price: "174,000", user: "아이디1" },
  { id: 2, name: "상품명2", price: "200,000", user: "아이디2" },
  { id: 3, name: "상품명3", price: "200,000", user: "아이디3" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(products);

  return (
    <ContentLayout title={"장바구니"} width="800px">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart cartItems={cartItems} />
      )}
    </ContentLayout>
  );
};

export default Cart;
