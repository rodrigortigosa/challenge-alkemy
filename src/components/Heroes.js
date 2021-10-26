import { Container, Row, Col } from "react-bootstrap";
import { Hero } from "./Hero";

export function Heroes() {
  return (
    <Container className="p-0 w-auto">
      <Row className="row-cols-1 row-cols-lg-3">
        <Col>
          <Hero />
        </Col>
        <Col>
          <Hero />
        </Col>
        <Col>
          <Hero />
        </Col>
        <Col>
          <Hero />
        </Col>
        <Col>
          <Hero />
        </Col>
        <Col>
          <Hero />
        </Col>
      </Row>
    </Container>
  );
}
