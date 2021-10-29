import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Loading } from "../components/Loading";
import heroesService from "../services/heroes";
import TeamContext from "../contexts/TeamContext";
import { useHistory } from "react-router";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function showResults(heroes, onClick, history) {
  if (heroes.length === 0) return <div>No hay resultados</div>;
  else {
    return (
      <Container className="p-0 px-4 mt-3">
        <Row className="row-cols-1 row-cols-lg-3">
          {heroes.map((hero) => {
            return (
              <Col className="d-flex justify-content-center" key={hero.id}>
                <Card className="m-3 w-75">
                  <Card.Img
                    variant="bottom"
                    src={hero.image}
                    alt={`Imagen de ${hero.name}`}
                  />
                  <Card.Body>
                    <Card.Title>{hero.name}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Row className="justify-content-end">
                      <Col className="text-end" xs={12}>
                        <Button
                          variant="primary"
                          onClick={() => onClick(hero, history)}
                        >
                          Agregar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export const Results = () => {
  const history = useHistory();
  console.log(history);

  let query = useQuery().get("search");
  const teamData = useContext(TeamContext);
  console.log(teamData.team);

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    heroesService
      .getHeroes(query)
      .then((heroesToShow) => {
        setHeroes(heroesToShow);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        showResults(heroes, teamData.handleCallback, history)
      )}
    </>
  );
};
