const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What\'s your team member\'s name?',
        type: 'name',
    }, {
        type: 'input',
        message: 'Employee ID',
        type: 'id',
    },
    {
        type: 'input',
        message: 'Email Address',
        type: 'email',
    },
    {
        type: 'input',
        message: 'Office Number',
        type: 'office',
    },
    {
        type: 'list',
        message: 'Select your role',
        type: 'role',
        choices: ['Engineer'],
    },{
        type: 'list',
        message: 'Select your role',
        type: 'role',
        choices: ['Engineer', 'Intern', 'Finished Building'],
    },
];
//Intern: name, ID, email and school then taken back to menu
//Engineer: name, ID, email, github username, taken back to menu
//Finished building: HTML is generated
function init(){
inquirer.prompt(questions)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err);
})}

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        this.name = name;
    }
    getId(){
        this.id = id;
    }
    getEmail(){
        this.email = email;
    }
    getRole(){
        return 'Employee';
    }
}
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //get office number?
    getRole(){
        return 'Manager';
    }
}
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        //return or no return
        return this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
}
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        //return?
        return this.school = school;
    }
    getRole(){
        return 'Intern';
    }
}