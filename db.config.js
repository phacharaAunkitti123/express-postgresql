const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'p@ssw0rd',
    port:'8000',
})
 
module.exports = pool;