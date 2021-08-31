CREATE TABLE usuarios (
	id_usuario int primary key, 
    nome_usuario varchar(20) not null,
	senha_usuario varchar(20) not null
);

INSERT INTO usuarios VALUES (1, 'augusto', 'super');
INSERT INTO usuarios VALUES (2, 'renan', 'rena');

CREATE TABLE falas (
	id_fala SERIAL PRIMARY KEY,
    text_fala varchar(300) NOT NULL
);

INSERT INTO falas (text_fala) VALUES ('Olá, serei seu assistente virtual, o que gostaria de aprender hoje?');
INSERT INTO falas (text_fala) VALUES ('Posso recomendar estas duas opções:');
INSERT INTO falas (text_fala) VALUES ('Gmail, claro, sobre o que você quer saber?');
INSERT INTO falas (text_fala) VALUES ('Para enviar um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Primeiramente você precisa ter uma CONTA GOOGLE, para utilizar o Gmail, geralmente algo como "seunome@gmail.com"');
INSERT INTO falas (text_fala) VALUES ('Em seguida entrar na sua conta colocando o email, como mostrado na imagem a seguir:');
--INSERT INTO falas (text_fala) VALUES ('"<img src="./gmail1.jpg" alt="">"');
INSERT INTO falas (text_fala) VALUES ('E então colocar a senha do seu email, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Agora que entramos no email, basta clicar no botão "ESCREVER", como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Uma janela deve aparecer, onde vc irá inserir para QUEM vc vai enviar o email, o assunto do email e no campo grande você irá escrever o email, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Quando estiver tudo feito, basta clicar em enviar que seu email será enviado.');






DROP TABLE falas


SELECT * FROM usuarios
SELECT * FROM falas