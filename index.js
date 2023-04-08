const inquirer = require('inquirer');

const {addEmployee , addRole, addDepartment} = require('./answerFunctions/addTo');
//const {updateEmployee} = require('./answerFunctions/update');
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
        case 'View All Employees': viewAllEmployees(init);break;
        case 'View All Roles': viewAllRoles(init) ; break;
        case 'View All Departments': viewAllDepartments(init) ; break;
        case 'Add Employee': addEmployee(init) ; break;
        case 'Add Role': addRole(init) ; break;
        case 'Add Department': addDepartment(init) ; break;
        //case 'Update A Employee': updateEmployee(init); break;
        case 'Quit': process.exit(); break; 
        default: console.log('This is not a valid action'); break;
    }
})
.catch(err => {
    console.log(err);
})}

init();

