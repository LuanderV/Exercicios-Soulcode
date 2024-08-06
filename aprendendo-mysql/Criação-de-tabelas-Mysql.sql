CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE venda (
    idVenda INT AUTO_INCREMENT PRIMARY KEY,
    fkProduto INT NOT NULL,
    quantidade INT NOT NULL,
    dataVenda DATE NOT NULL,
    FOREIGN KEY (fkProduto) REFERENCES produto(idProduto)
);

INSERT INTO produto (nome, descricao, preco, estoque) VALUES
('Notebook', 'Notebook Dell Inspiron', 3000.00, 10),
('Smartphone', 'Smartphone Samsung Galaxy', 1500.00, 20),
('Mouse', 'Mouse Logitech', 100.00, 50);

INSERT INTO venda (fkProduto, quantidade, dataVenda) VALUES
(1, 2, '2024-07-01'),
(2, 1, '2024-07-02'),
(3, 5, '2024-07-03');

SELECT * FROM produto;

SELECT * FROM venda;

SHOW TABLES;

DESCRIBE produto;

DESCRIBE venda;

DROP TABLE venda;
DROP TABLE produto;

DROP DATABASE ecommerce_db;

CREATE DATABASE pedidos_db;
USE pedidos_db;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    dataNascimento DATE
);

CREATE TABLE pedido (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT NOT NULL,
    dataPedido DATE NOT NULL,
    valorTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario (nome, email, dataNascimento) VALUES
('Ana Silva', 'ana.silva@example.com', '1990-01-15'),
('Carlos Santos', 'carlos.santos@example.com', '1985-05-20');

INSERT INTO pedido (fkUsuario, dataPedido, valorTotal) VALUES
(1, '2024-07-10', 200.00),
(2, '2024-07-11', 300.00);

SELECT * FROM usuario;

SELECT * FROM pedido;

SHOW TABLES;

DESCRIBE usuario;

DESCRIBE pedido;

DROP TABLE pedido;
DROP TABLE usuario;

DROP DATABASE pedidos_db;

USE empresa_db;

CREATE TABLE dependente (
    idDependente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    fkColaborador INT NOT NULL,
    FOREIGN KEY (fkColaborador) REFERENCES colaborador(idColaborador)
);

INSERT INTO dependente (nome, idade, fkColaborador) VALUES
('Pedro Silva', 10, 1),
('Mariana Souza', 8, 2);

SELECT * FROM dependente;