import "../styles/App.css";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import TeamContext from "../contexts/TeamContext";
import { Row, Col, Button } from "react-bootstrap";
import { SEARCH } from "../config/router/paths";
import { Link } from "react-router-dom";
export function Home() {
  const { team } = useContext(TeamContext);
  useEffect(() => {}, [team]);
  return (
    <Container className="w-auto">
      <Header />
      <Title text="Equipo" />
      {team.length === 0 ? (
        <Row className="rows-cols-1 justify-content-center my-5 py-3">
          <Col className="text-center mb-5" xs={8}>
            <span>El equipo está vacío</span>
          </Col>
          <Col className="text-center mb-3" xs={8}>
            <Link to={SEARCH}>
              <Button>Buscar heroes</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Heroes />
      )}
    </Container>
  );
}
