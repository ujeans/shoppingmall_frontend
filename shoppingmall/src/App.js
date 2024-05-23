import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
//components
import AppLayout from "./components/commom/AppLayout";
// pages
import MyPage from "./pages/myPage/MyPage";
import ProductListPage from "./pages/productPage/ProductListPage";
import Login from "../src/components/userAccount/Login";
import Signup from "./components/userAccount/Signup";
import Sell from "./pages/sellPage/SellPage";
import ProductRegistration from "./pages/ProductRegistrationPage/ProductRegistrationPage";
import ProductDetailPage from "./pages/productPage/ProductDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/settings" element={<MyPage />} />
          <Route path="/" element={<ProductListPage />} />
          <Route path="/write" element={<ProductWritePage />} />
          <Route path="/" element={<ProductListPage/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/PR" element={<ProductRegistration />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
