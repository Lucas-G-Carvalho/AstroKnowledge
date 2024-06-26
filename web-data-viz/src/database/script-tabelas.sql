-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE astroknowledge;

USE astroknowledge;

CREATE TABLE quiz (
idQuiz int primary key auto_increment
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


create table Pontuacao (
	idPontuacao int primary key auto_increment,
    qtdacertos int,
    datahora datetime,
	fkUsuario int,
    foreign key (fkUsuario)references usuario(idUsuario),
    fkQuiz int
);
