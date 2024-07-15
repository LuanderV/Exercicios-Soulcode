import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/"><img src={Logo} alt="Imagem da logo do cabeçalho" width="100px"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;