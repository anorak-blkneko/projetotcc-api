const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "Augusto",
    port: 5432,
    password: "super4848",
    database: "tccdb"
})

module.exports = client