import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
//components
import AppLayout from "./components/commom/AppLayout";
// pages
import ProductListPage from "./pages/productPage/ProductListPage";
import Login from "../src/components/userAccount/Login";
import Signup from "./components/userAccount/Signup";
import Cart from "./pages/cart/Cart";
import MyPage from "./pages/myPage/MyPage";
import Sell from "./pages/sellPage/SellPage";
import ProductRegistration from "./pages/ProductRegistrationPage/ProductRegistrationPage";
import ProductDetailPage from "./pages/productPage/ProductDetailPage";
import OrderDetailsPage from "./pages/orderDetails/OrderDetailsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/" element={<ProductListPage />} />
          {/* <Route path="/write" element={<ProductWritePage />} /> */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/PR" element={<ProductRegistration />} />
          <Route path="/order-details" element={<OrderDetailsPage />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
