const db = require('../db/connection');
const inquirer = require('inquirer');
const { empRoles } = require('./addTo');

const empArray = ['Cameron', 'Blake', 'Veronica', 'Nicolas', 'Gwen', 'Dylan', 'Madison'];

const updateEmployee = (init) => {
    console.log('Updating an employee')
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which Employee would you like to update?',
            name: 'upId',
            choices: empArray,
        },
        {
            type: 'list',
            message: 'What is the role you would like to change to?',
            name: 'upRole',
            choices: empRoles,
        }
    ])
    .then(answer => {
    const roleParams = [answer.upId, answer.upRole];
    roleParams.map()
    db.query('UPDATE employee SET role = (?) WHERE id = (?)', roleParams, function(err, results){   
        if(err){console.log(err)}
         else {
            console.table(results);
            init();
        }
 })

})
 .catch(err => console.error(err));
}

module.exports = {updateEmployee};