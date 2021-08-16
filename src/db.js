
async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        //connectionString: 'postgres://fyazuind:r34WG7VcdfJvN4WplbWYHEk-hfyYELv1@isilo.db.elephantsql.com:5432/fyazuind'
        host: "localhost",
        user: "Augusto",
        port: 5432,
        password: "super4848",
        database: "tccdb"
    });
 
    

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM usuarios');
    return res.rows;
}



 
module.exports = { selectCustomers }
