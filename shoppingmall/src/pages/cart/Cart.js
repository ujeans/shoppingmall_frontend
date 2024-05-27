import { useEffect, useState } from "react";
// components
import ContentLayout from "../../components/commom/ContentLayout";
// assets
import EmptyCart from "../../components/cart/EmptyCart";
import FilledCart from "../../components/cart/FilledCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          throw new TypeError(`Received non-JSON response: ${text}`);
        }

        const data = await response.json();
        setCartItems(data.map(item => ({ ...item, checked: false })));
        console.log(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce((acc, item) => {
      if (!item.soldOut) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);

    const totalCount = cartItems.reduce((acc, item) => {
      if (!item.soldOut) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);

    setTotalAmount(totalAmount);
    setTotalCount(totalCount);
  }, [cartItems]);

  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    setCartItems(prevItems =>
      prevItems.map(item => ({ ...item, checked: !allChecked }))
    );
  };

  const handleDeleteSelected = () => {
    setCartItems(prevItems => prevItems.filter(item => !item.checked));
  };

  const handleDeleteSoldOut = () => {
    setCartItems(prevItems => prevItems.filter(item => !item.soldOut));
  };

  const handleDeleteItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== id));
  };

  const handleOrder = () => {
    const selectedItems = cartItems.filter(item => item.checked);
    console.log("Selected items:", selectedItems); // 디버깅을 위해 추가
    return selectedItems;
  };

  return (
    <ContentLayout title={"장바구니"} width="800px">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cartItems={cartItems}
          allChecked={allChecked}
          totalAmount={totalAmount}
          totalCount={totalCount}
          setCartItems={setCartItems}
          onToggleAllChecked={handleAllChecked}
          onDeleteSelected={handleDeleteSelected}
          onDeleteSoldOut={handleDeleteSoldOut}
          onDeleteItem={handleDeleteItem}
          onOrder={handleOrder}
        />
      )}
    </ContentLayout>
  );
};

export default Cart;
