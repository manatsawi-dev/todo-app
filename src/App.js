import AppBar from "./views/app-bar";
import { GlobalStyle } from "./styles/global-style";
import PublicRoutes from "./routes/public-routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppBar />
      <Switch>
        <Route exact component={PublicRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
