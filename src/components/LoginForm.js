import { Form, Button } from "react-bootstrap";

export function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="challenge@alkemy.org"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" required />
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
}
