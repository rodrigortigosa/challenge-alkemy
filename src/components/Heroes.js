import { Container, Row, Col } from "react-bootstrap";
import { Hero } from "./Hero";

export function Heroes(props) {
  const heroes = props.heroes;
  return (
    <Container className="p-0 w-auto">
      <Row className="row-cols-1 row-cols-lg-3">
        {heroes.map((hero) => {
          return (
            <Col className="d-flex justify-content-center" key={hero.id}>
              <Hero hero={hero} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
