const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();



app.get('/usuarios', (req, res)=>{
    client.query(`Select * from usuarios`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})



app.get('/usuarios/:id', (req, res)=>{
    client.query(`Select * from usuarios where id_usuario=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.post('/usuarios', (req, res)=> {
    const usuarios = req.body;
    var iduser = req.body.id_usuario;
    var nomeuser = req.body.nome_usuario;
    var senhauser = req.body.senha_usuario;
    let insertQuery = `insert into usuarios("id_usuario", "nome_usuario", "senha_usuario") 
                       values(${iduser}, '${nomeuser}', '${senhauser}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(iduser), console.log(nomeuser) , console.log(senhauser)}
    })
    client.end;
})


app.put('/usuarios/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update usuarios
                       set id_usuario = '${user.id_usuario}',
                       nome_usuario = '${user.nome_usuario}',
                       senha_usuario = '${user.senha_usuario}'
                       where id_usuario = ${user.id_usuario}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/usuarios/:id', (req, res)=> {
    let insertQuery = `delete from usuarios where id_usuario=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})