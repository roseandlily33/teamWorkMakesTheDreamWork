const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'Collier$123', //process.env.DB_Password,
    database: 'company_db',
})

module.exports = db;