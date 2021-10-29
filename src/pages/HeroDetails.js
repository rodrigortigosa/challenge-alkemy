import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import heroesService from "../services/heroes";

export function HeroDetails() {
  const id = useParams().id;

  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    heroesService
      .getHeroDetails(id)
      .then((heroToShow) => {
        setHero(heroToShow);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Container className="p-0 w-auto">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Title text={`Detalles de ${hero.name}`} />
          <Row className="justify-content-center mx-4">
            <ListGroup className="my-3 p-0 w-75">
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Peso
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.weight}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Altura
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.height}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Nombre completo
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.fullName}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Alias
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.alias}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Color de ojos
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.eyeColor}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Color de cabello
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.hairColor}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6} className="text-start">
                    Lugar de trabajo
                  </Col>
                  <Col xs={6} className="text-end">
                    {hero.workplace}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </>
      )}
    </Container>
  );
}
