const db = require("../db/connection");
const inquirer = require("inquirer");

const updateEmployee = async (init) => {
  try {
    console.log("Updating an employee");
    var selectedParams = [];

    const dbEmployee = await db
      .promise()
      .query("SELECT id, first_name, last_name FROM employee");

    var employeeList = dbEmployee[0].map((employee) => ({
      name: employee.first_name + " " + employee.last_name,
      value: employee.id,
    }));

    const dbRoles = await db
      .promise()
      .query("SELECT title, department_id FROM roles");

    var rolesList = dbRoles[0].map(({ title, department_id }) => ({
      name: title,
      value: department_id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          message: "Which Employee would you like to update?",
          name: "upId",
          choices: employeeList,
        },
        {
          type: "list",
          message: "What is the role you would like to change to?",
          name: "upRole",
          choices: rolesList,
        },
      ])
      .then((answer) => {
        selectedParams.push(answer.upRole);
        selectedParams.push(answer.upId);
        db.query(
          "UPDATE employee SET role_id = (?) WHERE id = (?)",
          selectedParams,
          function (err, result) {
            if (err) {
              console.log(err);
            }
            console.log(`Your employee's role has been updated`);
            init();
          }
        );
      });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { updateEmployee };
