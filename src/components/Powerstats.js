import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";

function Powerstat(props) {
  return (
    <ListGroupItem>
      <Row>
        <Col xs={8} className="text-start">
          {props.text}
        </Col>
        <Col xs={4} className="text-end">
          {props.number}
        </Col>
      </Row>
    </ListGroupItem>
  );
}

export function PowerStats(props) {
  const powerstats = props.stats;
  return (
    <ListGroup className="list-group-flush">
      <Powerstat text="Inteligencia" number={powerstats.intelligence} />
      <Powerstat text="Fuerza" number={powerstats.strength} />
      <Powerstat text="Velocidad" number={powerstats.speed} />
      <Powerstat text="Durabilidad" number={powerstats.durability} />
      <Powerstat text="Poder" number={powerstats.power} />
      <Powerstat text="Combate" number={powerstats.combat} />
    </ListGroup>
  );
}
