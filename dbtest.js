const {Client} = require('pg')

const client = new Client({
    host: "ec2-34-194-14-176.compute-1.amazonaws.com",
    user: "hecmxnzjhazbkg",
    port: 5432,
    password: "03af4b68119a39d25edd446beb9b9936d7f6514f9a3007288de4695a3f7868f4",
    database: "deqq0ftmbleo61",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false
      }

    
})

client.connect();

client.query('select * from usuarios', (err, res)=>{
    if(!err)
    console.log(res.rows);
    else
    console.log(err.message);
    
    client.end;
})