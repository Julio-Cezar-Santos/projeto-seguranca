-- Criar banco de dados
CREATE DATABASE meu_banco_de_dados;


-- Criar tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Inserir usuários
INSERT INTO usuarios (nome_usuario, senha) VALUES
    ('usuario1', 'senha1'),
    ('usuario2', 'senha2'),
    ('usuario3', 'senha3'),
    ('usuario4', 'senha4'),
    ('usuario5', 'senha5'),
    ('usuario6', 'senha6'),
    ('usuario7', 'senha7'),
    ('usuario8', 'senha8'),
    ('usuario9', 'senha9'),
    ('usuario10', 'senha10');