import axios from "axios";
import { useEffect, useState } from "react";
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
  const [heroes, setHeroes] = useState([]);

  const obtenerDatos = () => {
    const baseUrl = "https://superheroapi.com/api/10223121061088645";
    axios.get(`${baseUrl}/search/batman`).then((response) => {
      let heroesToShow = [];
      if (response.data.results.length === 0) return [];
      else {
        heroesToShow = response.data.results.map((heroToShow) => {
          let hero = {
            id: heroToShow.id,
            name: heroToShow.name,
            powerstats: {
              intelligence: heroToShow.powerstats.intelligence,
              strength: heroToShow.powerstats.strength,
              speed: heroToShow.powerstats.speed,
              durability: heroToShow.powerstats.durability,
              power: heroToShow.powerstats.power,
              combat: heroToShow.powerstats.combat,
            },
            image: heroToShow.image.url,
          };
          return hero;
        });
        setHeroes(heroesToShow);
      }
    });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

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
              <Col className="d-flex justify-content-center" key={hero.id}>
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
