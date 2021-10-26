import { Container } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Container className="p-3 bg-light w-75">
        <LoginForm />
      </Container>
    </Container>
  );
}
