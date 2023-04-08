const inquirer = require('inquirer');
const { result } = require('lodash');
const db = require('../db/connection');

const addEmployee = (init) => {
    console.log('Adding an employee');
    var selectedParams = [];
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
       
    ])
    .then(answer => {
        db.query('SELECT title, department_id FROM roles', function(err, result) {
            if (err) { console.log(err) }
            else {
                selectedParams.push(answer.emName);
                selectedParams.push(answer.emLast);
                const roles = 
                result.map(({title, department_id}) => ({name: title, value: department_id}));
                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'What is the employees role?',
                        name: 'emRole',
                        choices: roles,
                    }
                ])
            }
        })  })
        .then(answer => {
            selectedParams.push(answer.emRole);
            db.query('SELECT * FROM employee WHERE manager_id = "null"', function(err, result) {
                if (err) { console.log(err) }
                else {
                    const managers = result.map(({first_name, manager_id}) => 
                    ({name: first_name, value: manager_id}))
                    inquirer.prompt([
                        {
                            type: 'list',
                            message: 'Who is the employees manager?',
                            name: 'emManager',
                            choices: managers,
                        }
                    ])
                }
            })  }) 
            .then(answers => {
                selectedParams.push(answers.emManager);
                db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)', selectedParams, function (err, results) {
                    if (err) { console.log(err) }
                    else {
                        console.table(results);
                        init();
                    }
                }) })
           // }) }) })
        .catch(err => console.error(err));
}
//This is done and working
const addRole = (init) => {
    let selectedParams = [];
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
        db.query(`SELECT dept_name, id FROM department`, function(err, results){
            if(err){console.log(err);}

            selectedParams.push(answer.roleName);
            selectedParams.push(answer.roleSalary);
                const dept = results.map(({dept_name, id})=> ({name: dept_name, value: id}));

                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'What role does the department match?',
                        name: 'roleDept',
                        choices: dept
                    }
                ])
                .then(answer => {
                selectedParams.push(answer.roleDept);
                db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)', selectedParams, function (err, results) {
                    if (err) { console.log(err); 
                       } else {
                        console.log(answer + 'I am here');
                        console.table(results);
                       init();
                    }
                })  })
        })}) 
        .catch(err => console.error(err));
}

//This is done and working!
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