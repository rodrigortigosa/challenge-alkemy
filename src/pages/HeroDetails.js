import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

export function HeroDetails() {
  return (
    <Container className="p-0 w-auto">
      <Header />
      <Title text="Detalles de Batman" />
      <ListGroup className="my-3">
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Peso
            </Col>
            <Col xs={6} className="text-end">
              77 kg
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Altura
            </Col>
            <Col xs={6} className="text-end">
              178 cm
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Nombre completo
            </Col>
            <Col xs={6} className="text-end">
              Terry McGinnis
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Color de ojos
            </Col>
            <Col xs={6} className="text-end">
              Azul
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Color de cabello
            </Col>
            <Col xs={6} className="text-end">
              Negro
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} className="text-start">
              Lugar de trabajo
            </Col>
            <Col xs={6} className="text-end">
              21st Century Gotham City
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
