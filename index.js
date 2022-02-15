const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js');

// modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// team array
const newTeam = [];

// Initialize app and Inquirer
function createManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: 'managerName',
            message: "Please add a team manager",
            validate: managerName => /[a-z1-9]/.test(managerName)
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
            validate: managerID => /^[0-9]+$/.test(managerID)
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: managerEmail => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the manager's office number?",
            validate: officeNum => /^[0-9]+$/.test(officeNum)
        },
    ])
}