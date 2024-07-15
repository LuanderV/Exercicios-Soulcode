import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contato() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Contato</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                {...register('nome', { required: true })} 
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
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

            <Form.Group controlId="formFeedback" className="mt-3">
              <Form.Label>Feedback</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                {...register('feedback', { required: true })} 
                isInvalid={!!errors.feedback}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;
