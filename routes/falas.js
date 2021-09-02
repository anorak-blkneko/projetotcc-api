const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS FALAS
router.get('/', (req, res, next) =>{

    client.query(`Select * from falas`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O FALAS NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from falas where id_fala=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM FALAS
router.post('/', (req, res, next) =>{
    
    const usuarios = req.body;
    var textfala = req.body.text_fala;
    let insertQuery = `insert into falas("text_fala") 
                       values('${textfala}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(textfala)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update falas set
                       text_fala = '${user.text_fala}'
                       where id_fala = ${req.params.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});

//DELETA
router.delete('/:id', (req, res, next) =>{
    
    let insertQuery = `delete from falas where id_fala=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
