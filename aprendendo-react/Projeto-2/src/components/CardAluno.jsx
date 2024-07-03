import React from 'react';
import './CardAluno.css';

const CardAluno = ({ nome, serie, media }) => {
  const status = media >= 7 ? 'Aprovado!' : 'Reprovado!';
  const statusClass = media >= 7 ? 'aprovado' : 'reprovado';

  return (
    <div className={`card-aluno ${statusClass}`}>
      <h2>Nome: {nome}</h2>
      <p>Série: {serie}</p>
      <p>Média: {media}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CardAluno;
