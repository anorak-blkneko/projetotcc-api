const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//GET DE TUDO
router.get('/', (req, res, next) =>{

    client.query(`Select * from feedback`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//GET ID ESPECIFICO
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from feedback where id_fb=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERT
router.post('/', (req, res, next) =>{
    
    const feedbacks = req.body;
    let insertQuery = `insert into feedback("id_tutorial", "descricao") values(${feedbacks.id_tutorial}, '${feedbacks.descricao}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(feedbacks.descricao)}
    })
    client.end;

});

//ALTER
router.patch('/:id', (req, res, next) =>{
    
    let feedbacks = req.body;
    let updateQuery = `update feedback set id_fb = ${feedbacks.id}  id_tutorial = ${feedbacks.id_tutorial}, descricao = '${feedbacks.descricao}' where id_fb = ${req.params.id}`

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
    
    let insertQuery = `delete from feedback where id_fb=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
