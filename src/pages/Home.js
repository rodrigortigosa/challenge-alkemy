import "../styles/App.css";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import TeamContext from "../contexts/TeamContext";

export function Home() {
  const { team } = useContext(TeamContext);
  useEffect(() => {}, [team]);
  return (
    <Container className="w-auto">
      <Header />
      <Title text="Equipo" />
      {team.length === 0 ? <div>Buscar heroes</div> : <Heroes />}
    </Container>
  );
}
