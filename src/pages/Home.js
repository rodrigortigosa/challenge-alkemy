import "../styles/App.css";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import TeamContext from "../contexts/TeamContext";

export function Home() {
  const teamData = useContext(TeamContext);
  const team = teamData.team;

  return (
    <Container className="w-auto">
      <Header />
      <Title text="Equipo" />
      <Heroes heroes={team} />
    </Container>
  );
}
