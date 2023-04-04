const db = require('../db/connection');

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Getting departments');
            console.table(results);
        }
    })
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) { console.log(err) }
        else {
            console.log('Getting employees');
            console.table(results);
        }
    })
}

const viewAllRoles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        if (err) { console.log(err) }
        else {
            console.log('Getting roles');
            console.table(results);  
        }
    })
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees }; 