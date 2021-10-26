import "../styles/App.css";
import { Header } from "../components/Header";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <Container className="w-auto">
      <Header />
      <div className="text-center my-2">
        <h2 className="mb-0">Equipo</h2>
      </div>
      <Heroes />
    </Container>
  );
}
