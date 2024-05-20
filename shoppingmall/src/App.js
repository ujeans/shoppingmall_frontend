import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Page from "./pages/Page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
