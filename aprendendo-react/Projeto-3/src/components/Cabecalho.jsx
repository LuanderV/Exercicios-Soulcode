import React from 'react';
import './Cabecalho.css';
import logo from '../assets/logo.png';

const Cabecalho = () => {
  const handleLogin = () => {
    alert('Faça Login!');
  };

  return (
    <header className="cabecalho">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="logo-text">Galeria de Series</div>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
      <button onClick={handleLogin}>Entrar</button>
    </header>
  );
};

export default Cabecalho;