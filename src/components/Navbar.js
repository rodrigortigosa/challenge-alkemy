import { Navbar as NavbarBootstrap, Nav, Container } from "react-bootstrap";
import { SEARCH, HOME } from "../config/router/paths";

export function Navbar() {
  return (
    <NavbarBootstrap
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <NavbarBootstrap.Brand href={HOME}>Heroes</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={HOME}>Mi equipo</Nav.Link>
            <Nav.Link href={SEARCH}>Buscar heroe</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
