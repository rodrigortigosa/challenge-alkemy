import { Container, Row, Col } from "react-bootstrap";
import { Heroe } from "./Heroe";

export function Heroes() {
  return (
    <Container className="p-0 w-auto">
      <Row className="row-cols-1 row-cols-lg-3">
        <Col>
          <Heroe />
        </Col>
        <Col>
          <Heroe />
        </Col>
        <Col>
          <Heroe />
        </Col>
        <Col>
          <Heroe />
        </Col>
        <Col>
          <Heroe />
        </Col>
        <Col>
          <Heroe />
        </Col>
      </Row>
    </Container>
  );
}
