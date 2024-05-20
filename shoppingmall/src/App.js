import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Page from "./pages/Page";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;
