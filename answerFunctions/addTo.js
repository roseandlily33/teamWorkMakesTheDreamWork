const inquirer = require('inquirer');
const db = require('../db/connection');

const addEmployee = () => {
    console.log('Adding an employee');
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employees First Name?',
            name: 'emName',
        },
        {
            type: 'input',
            message: 'Employees Last Name?',
            name: 'emLast',
           
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'emRole',
            choices: [1, 2, 3, 4],
        }, 
        {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'emManager',
            choices: [1, 2, 3, 'null'],
        }

    ])
    .then( answers => {
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)', answers.emName, answers.emLast, answers.emRole, answers.emManager, function(err, results) {
        if(err){console.log(err)} else {
            console.table(results);
        }
    })})
    .catch(err => console.error(err));
}
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the role?',
            name: 'roleName',
            
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'roleSalary',
            
         },
        {
            type: 'list',
            message: 'What department does this role go in?',
            name: 'roleDept',
            choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
        },
    ])
    .then(answers => {
    db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)', [answers.roleName, answers.roleSalary, answers.roleDept], function(err, results) {
     
    })})
    .catch(err => console.error(err));
   
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'name',
            message: 'What is the department called?',
            name: 'deptName',
        }
    ])
    .then(answers =>{
    db.query('INSERT INTO departments (first_name, last_name, role_id, manager_id) VALUES(?)', answers.deptName, function(err, results){

    })})
    .catch(err => console.error(err));
}


module.exports = { addDepartment, addEmployee, addRole };