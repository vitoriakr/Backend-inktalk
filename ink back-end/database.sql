
CREATE DATABASE IF NOT EXISTS meu_projeto;
USE meu_projeto;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE diario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    data DATE,
    texto TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE calendario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    data DATE,
    cor VARCHAR(20),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
