import AppBar from "./views/app-bar";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";
import PublicRoutes from "./routes/public-routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { navigationRef } from "./utils/navigation-services";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router ref={navigationRef}>
          <GlobalStyle />
          <AppBar />
          <Switch>
            <Route exact component={PublicRoutes} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
