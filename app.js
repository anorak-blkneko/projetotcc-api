const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const rotaUsuarios = require('./routes/usuarios');
const rotaFalas = require('./routes/falas');
const rotaImagens = require('./routes/imagens');
const rotaTutoriais = require('./routes/tutoriais');
const rotaFeedback = require('./routes/feedback');
const rotaVideos = require('./routes/videos');


//app.use(bodyParser.urlencoded({extended: false})); 
//app.use(bodyParser.json()); 

app.use(express.json()) //JSON DE ENTRADA DO BODY
app.use(express.urlencoded({ extended: false})) //APENAS DADOS SIMPLES

//PERMIÇÃO DO CORS

app.use(cors());

/* 
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header', 'Content-Type, Origin, X-Requested-With, Authorization, Accept');
    res.header('Access-Control-Allow-Credentials',  true);
    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

    // if(req.method === 'OPTIONS'){
    //    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
   //     return res.status(200).send({});
   // } 

    app.use(cors());
    next();
})

 */

app.use(morgan('dev'));

app.use('/usuarios', rotaUsuarios);
app.use('/falas', rotaFalas);
app.use('/imagens', rotaImagens);
app.use('/tutoriais', rotaTutoriais);
app.use('/feedbacks', rotaFeedback);
app.use('/videos', rotaVideos);

//teste for loading


app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;