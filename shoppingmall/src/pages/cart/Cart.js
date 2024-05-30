import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
// components
import ContentLayout from "../../components/commom/ContentLayout";
import EmptyContentLayout from "../../components/commom/EmptyContentLayout";
import FilledCart from "../../components/cart/FilledCart";
// styles
import { LoadingSpinner } from "../../style/CommonStyles";

const Cart = () => {
  const token = localStorage.getItem("login-token");
  const userId = localStorage.getItem("user_Id");
  const cartUrl = `${process.env.REACT_APP_API_URL}/cart/${userId}`;

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
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const itemsWithImages = data.map(item => ({
          ...item,
          imageUrl: `data:image/jpeg;base64,${item.imageBase64}`,
        }));

        setCartItems(itemsWithImages);
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

  const handleDeleteItem = async id => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("상품 삭제에 실패했습니다.");
      }

      setCartItems(prevItems =>
        prevItems.filter(item => item.cartItemId !== id)
      );
    } catch (error) {
      console.error("상품 삭제 중 오류가 발생했습니다:", error);
    }
  };

  const handleDeleteSelected = async () => {
    const selectedItems = cartItems.filter(item => item.checked);
    await Promise.all(
      selectedItems.map(item => handleDeleteItem(item.cartItemId))
    );
    setCartItems(prevItems => prevItems.filter(item => !item.checked));
  };

  const handleDeleteSoldOut = () => {
    setCartItems(prevItems => prevItems.filter(item => item.stock !== 0));
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
        />
      )}
    </ContentLayout>
  );
};

export default Cart;
