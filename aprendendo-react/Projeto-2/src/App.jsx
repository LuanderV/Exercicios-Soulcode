import React from 'react';
import ReactDOM from 'react-dom';
import CardAluno from './components/CardAluno';
import CardProduto from './components/CardProduto';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Exemplo de Card Aluno e Produto</h1>
      <CardAluno nome="João Silva" serie="3º Ano" media={8.5} />
      <CardAluno nome="Maria Souza" serie="2º Ano" media={6.4} />
      <CardProduto nome="Cadeira Gamer" precoUnitario={599.99} desconto={10} />
      <CardProduto nome="Mesa de Escritório" precoUnitario={299.99} desconto={5} />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
