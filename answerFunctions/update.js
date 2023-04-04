const db = require('../db/connection');
const inquirer = require('inquirer');

const updateEmployee = () => {
    console.log('Updating an employee')
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees id you would like to update?',
            name: 'upId',
        },{
            type: 'input',
            message: 'What is the role you would like to change to?',
            name: 'upRole',
        }
    ])
    .then(answer => {
    db.query('UPDATE employee SET role_id = (?) WHERE id = (?)', [answer.upRole, answer.upId], function(err, results){
        if(err){console.log(err)}
         else {
            console.table(results);
        }
 }) })
 .catch(err => console.error(err));
}

module.exports = {updateEmployee};