const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//GET DE TUDO
router.get('/', (req, res, next) =>{

    client.query(`Select * from imagens`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//GET ID ESPECIFICO
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from imagens where id_img=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERT
router.post('/', (req, res, next) =>{
    
    const imagens = req.body;
    let insertQuery = `insert into imagens("id_tutorial", "img_link") values(${imagens.id_tutorial}, '${imagens.img_link}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(imagens.img_link)}
    })
    client.end;

});

//ALTER
router.patch('/:id', (req, res, next) =>{
    
    let imagens = req.body;
    let updateQuery = `update imagens
                       id_tutorial = ${imagens.id_tutorial},
                       img_link = '${imagens.img_link}'
                       where id_img = ${req.params.id}`

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
    
    let insertQuery = `delete from imagens where id_img=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
