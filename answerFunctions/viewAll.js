const cTable = require('console.table');

const viewAllDepartments = () => {
    db.query('SELECT * FROM departments', (req, res) => {
        console.log('Getting departments table' + req);
        cTable.getTable(res);
    })
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employeees', (req, res) => {
        console.log('Getting employees table' + req);
        cTable.getTable(res);
    })
}

const viewAllRoles =() => {
    db.query('SELECT * FROM roles', (req, res) => {
        console.log('Getting roles table' + req);
        cTable.getTable(res);
    })
}

module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees}; 