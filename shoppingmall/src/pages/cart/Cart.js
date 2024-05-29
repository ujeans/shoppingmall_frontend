import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
// components
import ContentLayout from "../../components/commom/ContentLayout";
import EmptyContentLayout from "../../components/commom/EmptyContentLayout";
import FilledCart from "../../components/cart/FilledCart";
// styles
import { LoadingSpinner } from "../../style/CommonStyles";

const Cart = () => {
  const userId = 15;
  const cartUrl = `${process.env.REACT_APP_API_URL}/cart/${userId}`;
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allChecked, setAllChecked] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(cartUrl, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [cartUrl]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((acc, item) => {
        if (item.stock !== 0) {
          return acc + item.price * item.quantity;
        }
        return acc;
      }, 0);

      const totalCount = cartItems.reduce((acc, item) => {
        if (item.stock !== 0) {
          return acc + item.quantity;
        }
        return acc;
      }, 0);

      setTotalAmount(totalAmount);
      setTotalCount(totalCount);
    }
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
    setCartItems(prevItems => prevItems.filter(item => item.stock !== 0));
  };

  const handleDeleteItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== id));
  };

  const handleOrder = async () => {
    const selectedItems = cartItems.filter(item => item.checked);
    const orderedItems = [];

    console.log("Selected Items: ", selectedItems);
    for (const item of selectedItems) {
      console.log("item", item);
      const orderData = {
        cartItemId: item.cartItemId,
        quantity: item.quantity,
        price: item.price,
        productName: item.productName,
        imageUrl: item.imageUrl,
        totalPrice: item.price * item.quantity,
      };

      console.log("orderData before fetch: ", orderData);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/order/${item.cartItemId}`, // URL에 카트 아이템 ID 포함
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData), // JSON으로 변환하여 body에 담기
          }
        );

        const data = await response.json();
        console.log("Response data: ", data);
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} - ${data.message}`
          );
        }

        orderedItems.push(data);
      } catch (error) {
        console.error("Error placing order:", error);
        orderedItems.push({ message: error.message });
      }
    }
    console.log("orderedItems after fetch: ", orderedItems);
    return orderedItems;
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

  return (
    <ContentLayout title={"장바구니"} width="1000px">
      {cartItems.length === 0 ? (
        <EmptyContentLayout content={"장바구니에 담은 상품이 없습니다."} />
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
