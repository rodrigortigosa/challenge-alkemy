import "../styles/App.css";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <Container className="w-auto">
      <Header />
      <Title text="Equipo" />
      <Heroes />
    </Container>
  );
}
