import React from 'react';
import './Card.css';

const Card = ({ titulo, descricao, imagem }) => {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

export default Card;
