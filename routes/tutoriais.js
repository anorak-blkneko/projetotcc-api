const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//GET DE TUDO
router.get('/', (req, res, next) =>{

    client.query(`Select * from tutoriais`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//GET ID ESPECIFICO
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from tutoriais where id_tutorial=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERT
router.post('/', (req, res, next) =>{
    
    const tutoriais = req.body;
    let insertQuery = `insert into tutoriais("nome_tutorial") values('${tutoriais.nome_tutorial}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(tutoriais.nome_tutorial)}
    })
    client.end;

});

//ALTER
router.patch('/:id', (req, res, next) =>{
    
    let tutoriais = req.body;
    let updateQuery = `update tutoriais set id_tutorial = ${tutoriais.id}, nome_tutorial = '${tutoriais.nome_tutorial}' where id_tutorial = ${tutoriais.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});

//DELETE
router.delete('/:id', (req, res, next) =>{
    
    let insertQuery = `delete from tutoriais where id_tutorial=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
