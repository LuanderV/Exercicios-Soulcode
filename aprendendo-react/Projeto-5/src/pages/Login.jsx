import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                {...register('email', { required: true })} 
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                type="password" 
                {...register('senha', { required: true })} 
                isInvalid={!!errors.senha}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
