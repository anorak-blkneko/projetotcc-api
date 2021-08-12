const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "Augusto",
    port: 5432,
    password: "super4848",
    database: "tccdb"
})

client.connect();

client.query('select * from usuarios', (err, res)=>{
    if(!err)
    console.log(res.rows);
    else
    console.log(err.message);
    
    client.end;
})