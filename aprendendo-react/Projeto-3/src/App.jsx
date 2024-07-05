import React from 'react';
import Cabecalho from './components/Cabecalho';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Rodape from './components/Rodape';
import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Galeria />
      <Rodape />
    </>
  );
};

export default App;
