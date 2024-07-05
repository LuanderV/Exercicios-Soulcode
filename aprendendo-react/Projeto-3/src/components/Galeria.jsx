import React from 'react';
import Card from './Card';
import './Galeria.css';

// Importando as imagens locais da pasta assets
import cobraKai from '../assets/cobra-kai.png'
import casaDoDragao from '../assets/a-casa-do-dragao.png';
import gameOfThrones from '../assets/game-of-thrones.png';

const filmes = [
  {
    titulo: 'Cobra Kai',
    descricao: 'Serie de Kung Fu.',
    imagem: cobraKai
  },
  {
    titulo: 'A casa do Dragão',
    descricao: 'Serie de fantasia épica.',
    imagem: casaDoDragao
  },
  {
    titulo: 'Game of Thrones',
    descricao: 'Serie de fantasia épica.',
    imagem: gameOfThrones
  },
];

const Galeria = () => {
  return (
    <section className="galeria" id="galeria">
      {filmes.map((filme, index) => (
        <Card key={index} titulo={filme.titulo} descricao={filme.descricao} imagem={filme.imagem} />
      ))}
    </section>
  );
};

export default Galeria;
