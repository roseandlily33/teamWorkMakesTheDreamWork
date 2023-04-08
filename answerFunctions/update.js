const db = require('../db/connection');
const inquirer = require('inquirer');
const { empRoles } = require('./addTo');

const empArray = ['Cameron', 'Blake', 'Veronica', 'Nicolas', 'Gwen', 'Dylan', 'Madison'];

const updateEmployee = (init) => {
    console.log('Updating an employee');
    db.query(`SELECT roles.id, roles.title, roles.salary, department.dept_name FROM roles
    LEFT JOIN department ON department.id = roles.department_id
    ORDER BY roles.id;`, function (err, results) {
        if (err) { console.log(err) }
        else {
            console.log('Getting roles');
            return results;
        }
    })

   .then (answer => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which Employee would you like to update?',
            name: 'upId',
            choices: 
            rows.map (answer => { return {name: title, value: id }})
        
        },
        {
            type: 'list',
            message: 'What is the role you would like to change to?',
            name: 'upRole',
            choices: empRoles,
        }
    ]) })
   
}

module.exports = {updateEmployee};

db.query('UPDATE employee SET role = (?) WHERE id = (?)', roleParams, function(err, results){   
    if(err){console.log(err)}
     else {
        console.table(results);
        init();
    }
})