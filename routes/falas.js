const express = require('express');
const router = express.Router();

//RETORNA TODOS OS FALAS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: "Usando GET para falas"
    });
});

//RETORNA O FALAS NO ID
router.get('/:id_usuario', (req, res, next) =>{
    const id = req.param.id_usuario
    res.status(200).send({
        mensagem: "Usando GET para falas com ID",
        ID: id
    });
});

//INSERI UM FALAS
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando POST para falas"
    });
});

//ALTERA 
router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando PATCH para falas"
    });
});

//DELETA
router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando DELETE para falas"
    });
});


module.exports = router;
