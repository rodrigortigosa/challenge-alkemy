import { RESULTS } from "../config/router/paths";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

export function SearchForm(props) {
  const { history } = props;

  const initialValues = {
    hero: "",
  };

  const validationSchema = Yup.object().shape({
    hero: Yup.string().required("Por favor complete este campo"),
  });

  const onSubmit = (values) => {
    history.push(`${RESULTS}?search=${values.hero}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Form.Group controlId="formSearchHero">
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="hero"
                    value={values.hero}
                    onChange={handleChange}
                    isInvalid={!!errors.hero}
                    required
                  />
                  <Button variant="primary" type="submit">
                    Buscar
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.hero}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
