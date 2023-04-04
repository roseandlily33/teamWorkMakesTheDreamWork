const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'Collier$123',
    database: 'company_db',
})

module.exports = db;