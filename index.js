const inquirer = require('inquirer');
const fs = require('fs');
const sql = require('mysql2');
const cTable = require('console.table');
const {addEmployee , addRole, addDepartment} = require('./answerFunctions/addTo');
const {updateEmployee} = require('./answerFunctions/update');
const {viewAllDepartments, viewAllEmployees, viewAllRoles} = require('./answerFunctions/viewAll');

const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Role', 'Add Department', 'Update A Employee', 'Quit'],
    }
];

function init(){
inquirer.prompt(question)
.then(response => {
    console.log(response);
    switch(response){
        case 'View All Employees': viewAllEmployees() ;break;
        case 'View All Roles': viewAllRoles() ; break;
        case 'View All Departments': viewAllDepartments() ; break;
        case 'Add Employee': addEmployee() ; break;
        case 'Add Role': addRole() ; break;
        case 'Add Department': addDepartment() ; break;
        case 'Update A Employee': updateEmployee(); break;
        case 'Quit': break;
        default: console.log('This is not a valid action'); break;
    }
})

.then(inquirer.prompt(question))

.catch(err => {
    console.log(err);
})}

init();

console.table([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);