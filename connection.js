const {Client} = require('pg')

const client = new Client({
    /*
    host: "localhost",
    user: "Augusto",
    port: 5432,
    password: "super4848",
    database: "tccdb"
    */
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false
      }
})

module.exports = client