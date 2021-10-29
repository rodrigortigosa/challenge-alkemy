import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RESULTS, SEARCH, DETAILS, HOME, LOGIN } from "./config/router/paths";
import { Results } from "./pages/Results";
import { SearchHero } from "./pages/SearchHero";
import { HeroDetails } from "./pages/HeroDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useState } from "react";
import { TeamProvider } from "./contexts/TeamContext";
import { Navbar } from "./components/Navbar";

function App() {
  const initialTeam = [
    {
      id: 70,
      name: "Batman",
      powerstats: {
        intelligence: 100,
        strength: 26,
        speed: 27,
        durability: 50,
        power: 47,
        combat: 100,
      },
      alignment: "good",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    },
    {
      id: 620,
      name: "Spider-Man",
      powerstats: {
        intelligence: 90,
        strength: 55,
        speed: 67,
        durability: 75,
        power: 74,
        combat: 85,
      },
      alignment: "good",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg",
    },
    {
      id: 687,
      name: "Venom",
      powerstats: {
        intelligence: 75,
        strength: 57,
        speed: 65,
        durability: 84,
        power: 86,
        combat: 84,
      },
      alignment: "bad",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg",
    },
    {
      id: 370,
      name: "Joker",
      powerstats: {
        intelligence: 100,
        strength: 10,
        speed: 12,
        durability: 60,
        power: 43,
        combat: 70,
      },
      alignment: "bad",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg",
    },
    {
      id: 208,
      name: "Darth Vader",
      powerstats: {
        intelligence: 69,
        strength: 48,
        speed: 33,
        durability: 35,
        power: 100,
        combat: 100,
      },
      alignment: "bad",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg",
    },
    {
      id: 644,
      name: "Superman",
      powerstats: {
        intelligence: 94,
        strength: 100,
        speed: 100,
        durability: 100,
        power: 100,
        combat: 85,
      },
      alignment: "good",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
    },
  ];
  const [team, setTeam] = useState(initialTeam);

  function handleShowResults(hero, history) {
    if (team.length === 6) alert("El equipo está completo");
    else {
      setTeam((prevTeam) => prevTeam.concat(hero));
      history.push(`${HOME}`);
    }
  }

  const teamValue = {
    team: team,
    handleShowResults: handleShowResults,
  };

  return (
    <>
      <TeamProvider value={teamValue}>
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
