import React from 'react';

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
