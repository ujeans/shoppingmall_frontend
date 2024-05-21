import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
//components
import AppLayout from "./components/commom/AppLayout";
// pages
import MyPage from "./pages/myPage/MyPage";
import SellPage from "./pages/sellPage/SellPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/settings" element={<MyPage />} />
          <Route path="/sell" element={<SellPage />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
