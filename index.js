const inquirer = require('inquirer');
const fs = require('fs');

const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        type: 'action',
        value: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Role', 'Add Department', 'Update And Employee']
    }
];
//Intern: name, ID, email and school then taken back to menu
//Engineer: name, ID, email, github username, taken back to menu
//Finished building: HTML is generated
function init(){
inquirer.prompt(question)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err);
})}

init();