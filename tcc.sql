DROP TABLE imagens;
DROP TABLE tutoriais;
DROP TABLE falas;
DROP TABLE usuarios;


--CREATE TABLE USUARIOS
CREATE TABLE usuarios (
	id_usuario INT PRIMARY KEY,
    nome_usuario VARCHAR(20) NOT NULL,
	senha_usuario VARCHAR(20) NOT NULL
);


--CREATE TABLE FALAS
CREATE TABLE falas (
	id_fala SERIAL PRIMARY KEY,
    text_fala VARCHAR(300) NOT NULL
);


--CREATE TABLE TUTORIAIS
CREATE TABLE tutoriais (
	id_tutorial SERIAL PRIMARY KEY,
	nome_tutorial VARCHAR(100) NOT NULL
);


--CREATE TABLE IMAGENS
CREATE TABLE imagens (
	id_img SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    img_link VARCHAR(300) NOT NULL
);

--CREATE TABLE FEEDBACK
CREATE TABLE feedback (
	id_fb SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    descricao VARCHAR(800) NOT NULL
);

--INSERÇÃO DE FEEDBACK
INSERT INTO feedback (id_tutorial, descricao) VALUES (1, 'Top do top');


--INSERÇÃO DE USUARIOS
INSERT INTO usuarios VALUES (1, 'augusto', 'super');
INSERT INTO usuarios VALUES (2, 'renan', 'rena');


--INSERÇÃO DE FALAS
INSERT INTO falas (text_fala) VALUES ('Olá, serei seu assistente virtual, o que gostaria de aprender hoje?');
INSERT INTO falas (text_fala) VALUES ('Posso recomendar estas duas opções:');
INSERT INTO falas (text_fala) VALUES ('Gmail, claro, sobre o que você quer saber?');
INSERT INTO falas (text_fala) VALUES ('Para enviar um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Primeiramente você precisa ter uma CONTA GOOGLE, para utilizar o Gmail, geralmente algo como "seunome@gmail.com"');
INSERT INTO falas (text_fala) VALUES ('Em seguida entrar na sua conta colocando o email, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('E então colocar a senha do seu email, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Agora que entramos no email, basta clicar no botão "ESCREVER", como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Uma janela deve aparecer, onde vc irá inserir para QUEM vc vai enviar o email, o assunto do email e no campo grande você irá escrever o email, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Quando estiver tudo feito, basta clicar em enviar que seu email será enviado.');


--INSERÇÃO DE TUTORIAIS
INSERT INTO tutoriais (nome_tutorial) VALUES ('Enviar email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Anexar arquivo email');


--INSERÇÃO DE IMAGENS
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/uRlpC5p.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/IY7RX5l.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/wrBcZR3.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/2ZqMdf1.png');


--SELECTS
SELECT * FROM usuarios;
SELECT * FROM falas;
SELECT * FROM imagens;
SELECT * FROM tutoriais;
SELECT * FROM feedback;


--PGADMIN BUGADOOOO