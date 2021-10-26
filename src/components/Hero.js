import { Row, Col, Card, Button } from "react-bootstrap";
import { PowerStats } from "./Powerstats";

export function Hero() {
  return (
    <Card className="m-3">
      <Card.Img
        variant="bottom"
        src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
      />
      <Card.Body>
        <Card.Title>Batman</Card.Title>
      </Card.Body>
      <PowerStats />
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
