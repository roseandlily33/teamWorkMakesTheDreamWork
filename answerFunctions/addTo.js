const inquirer = require('inquirer');
const db = require('../db/connection');

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
            choices: empRoles,
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

        }])
        .then(answer => {
        let selectedParams = [answer.roleName, answer.roleSalary];
        db.query(`SELECT dept_name, id FROM department`, function(err, results){
            if(err){console.log(err);}
            else {
                console.log(results);
                const dept = results.map(({dept_name, id})=> ({name: dept_name, value: id}));
                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'What role does the department match?',
                        name: 'roleDept',
                        choices: dept
                    }
                ])
                selectedParams.push(answer.dept);
            }
        })})
        //Throwing an error that selectedParams are not defined. 
        .then(answer => {
            db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)', selectedParams, function (err, results) {
                if (err) { console.log(err); 
                   } else {
                    console.log(answer + 'I am here');
                    console.table(results);
                    init();
                }
            })
        })
        .catch(err => console.error(err));
}

//This is officially done and working!
const addDepartment = (init) => {
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
                    console.log(`Added ${answers.deptName} to the table`);
                    init();
                }
            })
        })
        .catch(err => console.error(err));
}

module.exports = { addDepartment, addEmployee, addRole};