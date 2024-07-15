import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Página Inicial</h1>
          <p className="text-center">Bem-vindo ao nosso aplicativo! Estamos felizes em tê-lo aqui. Explore nossos recursos e aproveite sua estadia.</p>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Sobre Nós</Card.Title>
              <Card.Text>
                Nosso aplicativo tem como objetivo fornecer os melhores serviços aos nossos usuários. Estamos constantemente inovando e atualizando nossos recursos para atender às suas necessidades.
              </Card.Text>
              <Button variant="primary">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
