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

    .then(addNewEmployees => {
        const { managerName, managerID, managerEmail, officeNum } = addNewEmployees;
        const mgmt = new Manager(managerName, managerID, managerEmail, officeNum)
        newTeam.push(mgmt)

        console.log(mgmt);

    })
};
// createManager();
createManager()
.then(createEmployee)


console.log("newTeam");

//  adding new employees to team
function createEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: 'employeeRole',
            message: "Please select a role",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: 'employeeName',
            message: "What is the employee's name?",
            validate: employeeName => /[a-z1-9]/.test(employeeName)

        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the employee's ID?",
            validate: employeeID => /^[0-9]+$/.test(employeeID)
        },
        {
            type: "input",
            name: "Github",
            message: "What is this employee's GitHub username?",
            when: (input) => input.employeeRole === "Engineer",
            validate: GitHub => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(GitHub)
        },
        {
            type: "input",
            name: "education",
            message: "What school is this intern attending?",
            when: (input) => input.employeeRole === "Intern",
            validate: education => /[a-z1-9]/.test(education)
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the employee's email?",
            validate: employeeEmail => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)
        },
        {
            type: "confirm",
            name: "yesAdd",
            message: "Would you like to add a new employee?",
            default: true,
        },
    ])
    .then(addNewEmployees => {
        var { employeeName, employeeID, GitHub, education, employeeEmail } = addNewEmployees;
        var employee;
    })
}