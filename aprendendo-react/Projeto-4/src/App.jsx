import React from 'react';
import Post from './components/Post';
import ConversorTemperatura from './components/ConversorTemperatura';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Meu Aplicativo</h1>
            <Post titulo="Meu Primeiro Post" descricao="Esta é a descrição do meu primeiro post." />
            <ConversorTemperatura />
        </div>
    );
};

export default App;
