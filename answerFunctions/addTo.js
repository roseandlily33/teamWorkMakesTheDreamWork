const inquirer = require('inquirer');
const db = require('../db/connection');

const deptArray = ['Sales', 'Engineering', 'Finance', 'Legal'];
const  managerArray = ['Blake', 'Dylan', 'Veronica', 'Max'];
const empRoles = ['Account Manager', 'Sales Lead', 'Software Engineer', 'Accountant', 'Lawyer', 'Salesperson', 'Engineer'];

const addEmployee = (init) => {
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
            choices: empRoles ,
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'emManager',
            choices: managerArray,
        }

    ])
        .then(answers => {
            db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)', [answers.emName, answers.emLast, answers.emRole, answers.emManager], function (err, results) {
                if (err) { console.log(err) }
                else {
                    console.table(results);
                    init();
                }
            })
        })
        .catch(err => console.error(err));
}
const addRole = (init) => {
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
            choices: deptArray,
        },
    ])
        .then(answers => {
            db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)', [answers.roleName, answers.roleSalary, answers.roleDept], function (err, results) {
                if (err) { console.log(err); 
                } 
                else{
                   switch(answers.roleDept){
                    case 'Sales' : db.query('')
                   }
                    console.table(results);
                    init();
                }
            })
        })
        .catch(err => console.error(err));
}
//May have to add department name and value sepeartley
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the department called?',
            name: 'deptName',
        }
    ])
        .then(answers => {
            db.query('INSERT INTO department (dept_name) VALUES(?)', [answers.deptName], function (err, results) {
                if (err) { console.log(err) }
                else {
                    deptArray.push(answers.deptName);
                    console.log(`Added ${answers.deptName} to the table`)
                }
            })
        })
        .catch(err => console.error(err));
}

module.exports = { addDepartment, addEmployee, addRole, empRoles};