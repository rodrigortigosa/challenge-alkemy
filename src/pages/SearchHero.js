import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { RESULTS } from "../config/router/paths";

export function SearchHero() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`${RESULTS}?search=${event.target["query"].value}`);
    event.target["query"].value = "";
  };

  return (
    <Container className="p-0 w-auto">
      <Header />
      <Title text="Buscar heroe" />
      <Container className="p-0 mt-3">
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Form.Group controlId="formSearchHero">
                <InputGroup>
                  <Form.Control type="text" name="query" />
                  <Button variant="primary" type="submit">
                    Buscar
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}
