import { Row, Col, Card, Button } from "react-bootstrap";
import { PowerStats } from "./Powerstats";
import { generatePath } from "react-router";
import { DETAILS } from "../config/router/paths";
import { Link } from "react-router-dom";

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
            <Link to={generatePath(DETAILS, { id: hero.id })}>
              <Button variant="primary">Ver detalle</Button>
            </Link>
          </Col>
          <Col className="text-center">
            <Button variant="danger">Eliminar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
