const inquirer = require('inquirer');
const db = require('../db/connection');

const addEmployee = () => {
    console.log('Adding an employee');
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employees First Name?',
            name: 'emName',
            validate: name => {
                name ? true : console.log('Add a name'); false;
            }
        },
        {
            type: 'input',
            message: 'Employees Last Name?',
            name: 'emLast',
            validate: lastName => {
                lastName ? true : console.log('Add a last name'); false;
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
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)', [emName, emLast, emName, emManager], (req, res) => {

    })

}
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the role?',
            name: 'roleName',
            validate: name => {
                name ? true : console.log('Add a role name'); false;
            }
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'roleSalary',
            validate: salary => {
                salary ? true : console.log('Add a salary'); false;
         }},
        {
            type: 'list',
            message: 'What department does this role go in?',
            name: 'roleDept',
            choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
        },
    ])
    db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)', [roleName, roleSalary, roleDept], (req, res) => {

    })
   
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'name',
            message: 'What is the department called?',
            name: 'deptName',
            validate: dept => {
                dept ? true : console.log('Add a valid department name '); false;
            }
        }
    ])
    db.query('INSERT INTO departments (first_name, last_name, role_id, manager_id) VALUES(?)', deptName, (req, res) => {

    })
}


module.exports = { addDepartment, addEmployee, addRole };