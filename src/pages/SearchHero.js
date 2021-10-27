import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Card,
} from "react-bootstrap";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

export function SearchHero() {
  const heroes = [
    {
      name: "Batman",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
    },
    {
      name: "Batman",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
    },
    {
      name: "Batman",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
    },
  ];
  return (
    <Container className="p-0 w-auto">
      <Header />
      <Title text="Buscar heroe" />
      <Container className="p-0 mt-3">
        <Form>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Form.Group controlId="formSearchHero">
                <InputGroup>
                  <Form.Control type="text" />
                  <Button variant="primary" type="submit">
                    Buscar
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container className="p-0 px-4 mt-3">
        <Row className="row-cols-1 row-cols-lg-3">
          {heroes.map((hero) => {
            return (
              <Col className="d-flex justify-content-center">
                <Card className="m-3 w-75">
                  <Card.Img variant="bottom" src={hero.image} />
                  <Card.Body>
                    <Card.Title>{hero.name}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Row className="justify-content-end">
                      <Col className="text-end" xs={12}>
                        <Button variant="primary">Agregar</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}
