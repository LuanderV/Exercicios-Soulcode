import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Banner from '../components/Banner';

import cobraKai from '../assets/cobra-kai.png';
import casaDoDragao from '../assets/a-casa-do-dragao.png';
import gameOfThrones from '../assets/game-of-thrones.png';

const filmes = [
  {
    titulo: 'Cobra Kai',
    descricao: 'Série de Kung Fu.',
    imagem: cobraKai
  },
  {
    titulo: 'A Casa do Dragão',
    descricao: 'Série de fantasia épica.',
    imagem: casaDoDragao
  },
  {
    titulo: 'Game of Thrones',
    descricao: 'Série de fantasia épica.',
    imagem: gameOfThrones
  },
];

const Galeria = () => {
  return (
    <>
      <Banner />
      <Container className="mt-5">
        
        <Row>
          {filmes.map((filme, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={filme.imagem} alt={filme.titulo} />
                <Card.Body>
                  <Card.Title>{filme.titulo}</Card.Title>
                  <Card.Text>{filme.descricao}</Card.Text>
                  <Button variant="primary">Ver Detalhes</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Galeria;
