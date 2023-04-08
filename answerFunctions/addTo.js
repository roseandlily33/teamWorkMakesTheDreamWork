const inquirer = require("inquirer");
const db = require("../db/connection");

const addEmployee = async (init) => {
  try {
    console.log("Adding an employee");
    var selectedParams = [];

    const dbRoles = await db
      .promise()
      .query("SELECT title, department_id FROM roles");

    var roles = dbRoles[0].map(({ title, department_id }) => ({
      name: title,
      value: department_id,
    }));

    const dbManagers = await db
      .promise()
      .query("SELECT first_name, id FROM employee WHERE manager_id IS NULL");

    var managers = dbManagers[0].map(({ first_name, id }) => ({
      name: first_name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "input",
          message: "Employees First Name?",
          name: "emName",
        },
        {
          type: "input",
          message: "Employees Last Name",
          name: "emLast",
        },
        {
          type: "list",
          message: "What is the employees role?",
          name: "emRoles",
          choices: roles,
        },
        {
          type: "list",
          message: "Who is the employees manager?",
          name: "emManager",
          choices: managers,
        },
      ])
      .then((answer) => {
        selectedParams.push(answer.emName);
        selectedParams.push(answer.emLast);
        selectedParams.push(answer.emRole);
        selectedParams.push(answer.emManager);

        db.query(
          `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`,
          selectedParams,
          function (err, result) {
            if (err) {
              console.log(err);
            }
            console.log(`${answer.emName} has been inserted into employees`);
            init();
          }
        );
      });
  } catch (err) {
    console.error(err);
  }
};

const addRole = (init) => {
  let selectedParams = [];
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "roleSalary",
      },
    ])
    .then((answer) => {
      db.query(`SELECT dept_name, id FROM department`, function (err, results) {
        if (err) {
          console.log(err);
        }
        selectedParams.push(answer.roleName);
        selectedParams.push(answer.roleSalary);

        const dept = results.map(({ dept_name, id }) => ({
          name: dept_name,
          value: id,
        }));
        inquirer
          .prompt([
            {
              type: "list",
              message: "What role does the department match?",
              name: "roleDept",
              choices: dept,
            },
          ])
          .then((answer) => {
            selectedParams.push(answer.roleDept);
            db.query(
              "INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)",
              selectedParams,
              function (err, results) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(`${selectedParams} has been added into roles`);
                  init();
                }
              }
            );
          });
      });
    })
    .catch((err) => console.error(err));
};

const addDepartment = (init) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the department called?",
        name: "deptName",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO department (dept_name) VALUES(?)",
        [answers.deptName],
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(`Added ${answers.deptName} to the table`);
            init();
          }
        }
      );
    })
    .catch((err) => console.error(err));
};

module.exports = { addDepartment, addEmployee, addRole };
