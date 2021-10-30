import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RESULTS, SEARCH, DETAILS, HOME, LOGIN } from "./config/router/paths";
import { Results } from "./pages/Results";
import { SearchHero } from "./pages/SearchHero";
import { HeroDetails } from "./pages/HeroDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TeamProvider } from "./contexts/TeamContext";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <TeamProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path={RESULTS} component={Results} />
            <Route path={SEARCH} component={SearchHero} exact />
            <Route path={DETAILS} component={HeroDetails} exact />
            <Route path={HOME} component={Home} exact />
            <Route path={LOGIN} component={Login} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </TeamProvider>
    </>
  );
}

export default App;
