const cTable = require('console.table');
const db = require('../db/connection');

const viewAllDepartments = () => {
    db.query('SELECT * FROM departments', (req, res) => {
       console.log(req +'req');
       console.log(res+ 'res');
       console.log('Getting departments table' + res+ req);
       cTable.getTable(res);
        
        //cTable.getTable(req);
    })
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employeees', (req, res) => {
        console.log('Getting employees table' + req);
        cTable.getTable(req);
    })
}

const viewAllRoles =() => {
    db.query('SELECT * FROM roles', (req, res) => {
        console.log('Getting roles table' + res);
        cTable.getTable(req);
    })
}

module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees}; 