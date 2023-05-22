/**
    MYSQL: "INTEGER AUTO_INCREMENT PRIMARY KEY"
    POSTGRES "id serial primary key"
*/

CREATE TABLE aluno(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    matricula VARCHAR(20) UNIQUE,
    data_nascimento date,
    pontuação INTEGER
);

CREATE TABLE atividade(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    aluno_id integer,
    FOREIGN KEY(aluno_id) REFERENCES aluno(id),
    nome VARCHAR(100),
    disciplina VARCHAR(100),
    nota DECIMAL(10,2),
    obs VARCHAR(255)
);

INSERT INTO aluno VALUES
(default, 'Wesley  Cardozo', '20233080', '2004-04-01',0),
(default, 'Alessandra Ferreira', '20237085', '2004-02-18',0),
(default, 'Robert Alan', '20234090', '2004-08-05',0),
(default, 'Mayara Emellyn', '20232050', '2004-07-01',0);