import { Row, Col, Card, Button } from "react-bootstrap";
import { PowerStats } from "./Powerstats";

export function Hero(props) {
  const hero = props.hero;
  return (
    <Card className="m-3 w-75">
      <Card.Img variant="bottom" src={hero.image} />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
      </Card.Body>
      <PowerStats stats={hero.powerstats} />
      <Card.Body>
        <Row className="row-cols-1 row-cols-sm-2 justify-content-between">
          <Col className="text-center mb-2 mb-sm-0">
            <Button variant="primary">Ver detalle</Button>
          </Col>
          <Col className="text-center">
            <Button variant="danger">Eliminar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
