import { Container, Row, Col, Badge } from "react-bootstrap";
import { Hero } from "./Hero";
import { useContext } from "react";
import TeamContext from "../contexts/TeamContext";

export function Heroes() {
  const { team } = useContext(TeamContext);
  const heroes = team;
  const totalPowerstats = [
    {
      powerstat: "Inteligencia",
      total: 0,
    },
    {
      powerstat: "Fuerza",
      total: 0,
    },
    {
      powerstat: "Velocidad",
      total: 0,
    },
    {
      powerstat: "Durabilidad",
      total: 0,
    },
    {
      powerstat: "Poder",
      total: 0,
    },
    {
      powerstat: "Combate",
      total: 0,
    },
  ];

  for (let i = 0; i < heroes.length; i++) {
    totalPowerstats[0].total += parseInt(heroes[i].powerstats.intelligence);
    totalPowerstats[1].total += parseInt(heroes[i].powerstats.strength);
    totalPowerstats[2].total += parseInt(heroes[i].powerstats.speed);
    totalPowerstats[3].total += parseInt(heroes[i].powerstats.durability);
    totalPowerstats[4].total += parseInt(heroes[i].powerstats.power);
    totalPowerstats[5].total += parseInt(heroes[i].powerstats.combat);
  }

  return (
    <Container className="p-0 w-auto">
      <TotalPowerstats totals={totalPowerstats} />
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

function TotalPowerstats(props) {
  const totals = props.totals;

  const totalsToShow = []
    .concat(totals)
    .sort((a, b) => a.total - b.total)
    .reverse()
    .map((item) => {
      return (
        <Row
          className="justify-content-between mx-4 mt-3 mb-3 px-4"
          key={item.powerstat}
        >
          <Col className="text-start">
            <h5 className="m-0">{item.powerstat}</h5>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <h5 className="m-0">
              <Badge bg="primary">{item.total}</Badge>
            </h5>
          </Col>
        </Row>
      );
    });

  return totalsToShow;
}
