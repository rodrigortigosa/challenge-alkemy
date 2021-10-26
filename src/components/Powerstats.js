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

export function PowerStats() {
  return (
    <ListGroup className="list-group-flush">
      <Powerstat text="Fuerza" number="40" />
      <Powerstat text="Velocidad" number="29" />
      <Powerstat text="Durabilidad" number="55" />
      <Powerstat text="Poder" number="63" />
      <Powerstat text="Combate" number="90" />
    </ListGroup>
  );
}
