CREATE DATABASE Livraria;
USE Livraria;

CREATE TABLE autor (
    idAutor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(50)
);

CREATE TABLE editora (
    idEditora INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(150)
);

CREATE TABLE livro (
    idLivro INT AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(13),
    titulo VARCHAR(150),
    anoPublicacao INT,
    genero VARCHAR(50),
    idEditora INT,
    FOREIGN KEY (idEditora) REFERENCES editora(idEditora)
);

CREATE TABLE cliente (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(15)
);

CREATE TABLE compras (
    idCompra INT AUTO_INCREMENT PRIMARY KEY,
    dataCompra DATE,
    idCliente INT,
    idLivro INT,
    FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
    FOREIGN KEY (idLivro) REFERENCES livro(idLivro)
);

CREATE TABLE autor_livro (
    idAutor INT,
    idLivro INT,
    PRIMARY KEY (idAutor, idLivro),
    FOREIGN KEY (idAutor) REFERENCES autor(idAutor),
    FOREIGN KEY (idLivro) REFERENCES livro(idLivro)
);

-- Inserir autores
INSERT INTO autor (nome, nacionalidade) VALUES 
('Autor A', 'Brasileira'),
('Autor B', 'Americana'),
('Autor C', 'Britânica');

-- Inserir editoras
INSERT INTO editora (nome, endereco) VALUES 
('Editora X', 'Rua A, 123'),
('Editora Y', 'Avenida B, 456'),
('Editora Z', 'Praça C, 789');

-- Inserir livros
INSERT INTO livro (ISBN, titulo, anoPublicacao, genero, idEditora) VALUES 
('9781234567890', 'Livro 1', 2021, 'Ficção', 1),
('9781234567891', 'Livro 2', 2020, 'Ficção', 1),
('9781234567892', 'Livro 3', 2022, 'História', 2),
('9781234567893', 'Livro 4', 2023, 'Ciência', 3),
('9781234567894', 'Livro 5', 2019, 'Tecnologia', 3);

-- Inserir clientes
INSERT INTO cliente (nome, email, telefone) VALUES 
('Cliente 1', 'cliente1@example.com', '123456789'),
('Cliente 2', 'cliente2@example.com', '987654321'),
('Cliente 3', 'cliente3@example.com', '456123789'),
('Cliente 4', 'cliente4@example.com', '789123456');

-- Inserir compras
INSERT INTO compras (dataCompra, idCliente, idLivro) VALUES 
('2023-07-01', 1, 1),
('2023-07-02', 2, 2),
('2023-07-03', 3, 3),
('2023-07-04', 4, 4),
('2023-07-05', 1, 5),
('2023-07-06', 2, 1);

-- Inserir relacionamentos autor-livro
INSERT INTO autor_livro (idAutor, idLivro) VALUES 
(1, 1),
(2, 2),
(3, 3),
(1, 4),
(2, 5);

-- Atualizar o endereço de uma editora específica
UPDATE editora 
SET endereco = 'Nova Rua, 123' 
WHERE nome = 'Editora X';

-- Excluir um livro específico
DELETE FROM livro 
WHERE titulo = 'Livro 2';

-- Liste todos os livros publicados por uma determinada editora
SELECT * 
FROM livro 
WHERE idEditora = 1;

-- Liste todos os livros de um autor específico
SELECT l.*
FROM livro l
JOIN autor_livro al ON l.idLivro = al.idLivro
JOIN autor a ON al.idAutor = a.idAutor
WHERE a.nome = 'Autor A';

-- Liste todos os clientes que compraram um livro específico
SELECT c.*
FROM cliente c
JOIN compras cp ON c.idCliente = cp.idCliente
WHERE cp.idLivro = 1;

-- Liste todas as compras realizadas em uma data específica
SELECT * 
FROM compras 
WHERE dataCompra = '2023-07-01';

-- Retorne os nomes dos clientes e os títulos dos livros que eles compraram
SELECT c.nome AS Cliente, l.titulo AS Livro
FROM cliente c
JOIN compras cp ON c.idCliente = cp.idCliente
JOIN livro l ON cp.idLivro = l.idLivro;

-- Liste todos os livros em ordem alfabética pelo título
SELECT * 
FROM livro 
ORDER BY titulo;

-- Liste todas as compras com informações dos clientes e dos livros comprados
SELECT cp.*, c.nome AS Cliente, l.titulo AS Livro
FROM compras cp
JOIN cliente c ON cp.idCliente = c.idCliente
JOIN livro l ON cp.idLivro = l.idLivro;

-- Adicionar uma nova coluna preco na tabela livro
ALTER TABLE livro 
ADD COLUMN preco DECIMAL(10, 2);

-- Atualizar os preços dos livros já inseridos
UPDATE livro 
SET preco = 29.90 
WHERE idLivro = 1;

UPDATE livro 
SET preco = 39.90 
WHERE idLivro = 3;

UPDATE livro 
SET preco = 49.90 
WHERE idLivro = 4;

UPDATE livro 
SET preco = 19.90 
WHERE idLivro = 5;
