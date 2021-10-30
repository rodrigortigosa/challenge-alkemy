import { Container, Row, Col, Badge } from "react-bootstrap";
import { Hero } from "./Hero";
import { useContext } from "react";
import TeamContext from "../contexts/TeamContext";

export function Heroes() {
  const { team } = useContext(TeamContext);
  const heroes = team;
  const totalPowerstats = [];

  let totalIntelligence = 0;
  let totalStrength = 0;
  let totalSpeed = 0;
  let totalDurability = 0;
  let totalPower = 0;
  let totalCombat = 0;

  for (let i = 0; i < heroes.length; i++) {
    totalIntelligence += parseInt(heroes[i].powerstats.intelligence);
    totalStrength += parseInt(heroes[i].powerstats.strength);
    totalSpeed += parseInt(heroes[i].powerstats.speed);
    totalDurability += parseInt(heroes[i].powerstats.durability);
    totalPower += parseInt(heroes[i].powerstats.power);
    totalCombat += parseInt(heroes[i].powerstats.combat);
  }

  totalPowerstats.push(totalIntelligence);
  totalPowerstats.push(totalStrength);
  totalPowerstats.push(totalSpeed);
  totalPowerstats.push(totalDurability);
  totalPowerstats.push(totalPower);
  totalPowerstats.push(totalCombat);

  /* totalPowerstats.sort((a, b) => a - b).reverse(); */

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
  const totals = [];
  const totalsNames = [
    "Inteligencia",
    "Fuerza",
    "Velocidad",
    "Durabilidad",
    "Poder",
    "Combate",
  ];

  for (let i = 0; i < props.totals.length; i++) {
    let totalsObject = {
      name: totalsNames[i],
      number: parseInt(props.totals[i]),
    };
    totals.push(totalsObject);
  }

  return (
    <>
      {totals.map((total) => {
        return (
          <Row
            className="justify-content-between mx-4 mt-3 mb-3 px-4"
            key={total.name}
          >
            <Col className="text-start">
              <h5 className="m-0">{total.name}</h5>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <h5 className="m-0">
                <Badge bg="primary">{total.number}</Badge>
              </h5>
            </Col>
          </Row>
        );
      })}
    </>
  );
}
