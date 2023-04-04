const inquirer = require('inquirer');

const {addEmployee , addRole, addDepartment} = require('./answerFunctions/addTo');
const {updateEmployee} = require('./answerFunctions/update');
const {viewAllDepartments, viewAllEmployees, viewAllRoles} = require('./answerFunctions/viewAll');

const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Role', 'Add Department', 'Update A Employee', 'Quit']
    }
];

function init(){
inquirer.prompt(question)
.then(response => {
    const {action} = response;
    switch(action){
        case 'View All Employees': viewAllEmployees() ;break;
        case 'View All Roles': viewAllRoles() ; break;
        case 'View All Departments': viewAllDepartments() ; break;
        case 'Add Employee': addEmployee() ; break;
        case 'Add Role': addRole() ; break;
        case 'Add Department': addDepartment() ; break;
        case 'Update A Employee': updateEmployee(); break;
        case 'Quit': prompt.exit(); break; 
        default: console.log('This is not a valid action'); break;
    }
})
.catch(err => {
    console.log(err);
})}

init();
