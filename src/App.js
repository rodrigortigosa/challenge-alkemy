import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SEARCH, DETAILS, HOME, LOGIN } from "./config/router/paths";
import { SearchHero } from "./pages/SearchHero";
import { HeroDetails } from "./pages/HeroDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={SEARCH} component={SearchHero} exact />
          <Route path={DETAILS} component={HeroDetails} exact />
          <Route path={HOME} component={Home} exact />
          <Route path={LOGIN} component={Login} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
