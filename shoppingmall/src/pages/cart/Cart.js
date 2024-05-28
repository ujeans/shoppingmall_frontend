import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
// components
import ContentLayout from "../../components/commom/ContentLayout";
import EmptyContentLayout from "../../components/commom/EmptyContentLayout";
import FilledCart from "../../components/cart/FilledCart";
// hooks
import useFetchData from "../../hooks/useFetchData";
import { LoadingSpinner } from "../../style/CommonStyles";

const Cart = () => {
  const userId = 15;
  const cartUrl = `${process.env.REACT_APP_API_URL}/cart/${userId}`;

  const {
    data: cartItems,
    loading,
    error,
    setData: setCartItems,
  } = useFetchData(cartUrl);

  const [allChecked, setAllChecked] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

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

  const handleOrder = () => {
    const selectedItems = cartItems.filter(item => item.checked);
    console.log("Selected items:", selectedItems);
    return selectedItems;
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
