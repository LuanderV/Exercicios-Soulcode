import React from 'react';
import './CardProduto.css';

const CardProduto = ({ nome, precoUnitario, desconto }) => {
  const temDesconto = desconto > 0;
  const precoDescontado = precoUnitario - (precoUnitario * desconto / 100);

  return (
    <div className="card-produto">
      <h2>{nome}</h2>
      {temDesconto ? (
        <>
          <p className="preco-original">R$ {precoUnitario.toFixed(2)}</p>
          <p className="preco-descontado">R$ {precoDescontado.toFixed(2)}</p>
          <p className="desconto">{desconto}% OFF</p>
        </>
      ) : (
        <p className="preco-sem-desconto">R$ {precoUnitario.toFixed(2)}</p>
      )}
    </div>
  );
};

export default CardProduto;