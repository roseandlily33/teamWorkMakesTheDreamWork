const inquirer = require('inquirer');
const fs = require('fs');
const sql = require('mysql2');
const {} = require('./answerFunctions/addTo');
const {} = require('./answerFunctions/update');
const {} = require('./answerFunctions/viewAll');

const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        type: 'action',
        value: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Role', 'Add Department', 'Update And Employee']
    }
];

function init(){
inquirer.prompt(question)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err);
})}

init();