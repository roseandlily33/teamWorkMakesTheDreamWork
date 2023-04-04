const db = require('../db/sc');
const inquirer = require('inquirer');

const addEmployee = () => {
    console.log('Adding an employee');
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employees First Name?',
            name: 'emName',
            validate: name => {
                name ? true : false;
            }
        },
        {
            type: 'input',
            message: 'Employees Last Name?',
            name: 'emLast',
            validate: lastName => {
                lastName ? true : false;
            }

        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'emRole',
            choices: ['Account Manager', 'Sales Lead', 'Software Engineer', 'Accountant', 'Lawyer', 'Salesperson', 'Engineer'],
        }, {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'emManager',
            choices: ['null',]
        }

    ])


}
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the role?',
            name: 'roleName',
            validate: name => {
                name ? true : false;
            }
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'roleSalary',
            validate: salary => {
                salary ? true : false;
         }},
        {
            type: 'list',
            message: 'What department does this role go in?',
            name: 'roleDept',
            choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
        },
    ])
   
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'name',
            message: 'What is the department called?',
            name: 'deptName',
            validate: dept => {
                dept ? true : false;
            }
        }
    ])


}


module.exports = { addDepartment, addEmployee, addRole };