import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rodape = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2024 Minha Aplicação
          </Col>
          <Col className="text-center py-3">
            <Link to="/politicas" className="text-white">Políticas de Privacidade</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Rodape;
