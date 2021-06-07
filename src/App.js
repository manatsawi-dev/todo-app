import TodoScreen from "./screens/todo";
import AppBar from "./views/app-bar";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <TodoScreen />
    </>
  );
}

export default App;
