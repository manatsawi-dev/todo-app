import TodoScreen from "./screens/todo";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
// import TestScreen from "./screens/test-screen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoScreen />
      {/* <TestScreen /> */}
    </ThemeProvider>
  );
}

export default App;
