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
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.dept_name, roles.salary FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN roles ON roles.id = employee.role_id
    INNER JOIN department ON department.id = roles.department_id
    ORDER BY employee.id;`, function (err, results) {
        if (err) { console.log(err) }
        else {
            console.log('Getting employees');
            console.table(results);
        }
    })
}
//Complete
const viewAllRoles = () => {
    db.query(`SELECT roles.id, roles.title, roles.salary, department.dept_name FROM roles
    LEFT JOIN department ON department.id = roles.department_id
    ORDER BY roles.id;
    
    `, function (err, results) {
        if (err) { console.log(err) }
        else {
            console.log('Getting roles');
            console.table(results);  
        }
    })
}


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees }; 