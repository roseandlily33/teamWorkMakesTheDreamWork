const db = require('../db/sc')

const addEmployee = () => {
    db.query('SELECT * FROM employeees', (req, res) => {

    })

}
const addDepartment = () => {
    db.query('SELECT * FROM departments', (req, res) => {

    })
}

const addRole = () => {
    db.query('SELECT * FROM roles', (req, res) => {
        
    })

}


module.exports = {addDepartment, addEmployee, addRole};