function init() {
   
const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./src/markdown');

const endGenerate = require('./src/endMarkdown');
const cssGenerate = require('./src/cssMarkdown');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managers = [];
const engineers = [];
const interns = [];



createManager();

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome! Please enter the team MANAGER'S name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter team MANAGER'S ID#:",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter team MANAGER'S email (format || email@host.com):",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter team MANAGER'S Office#:",
            name: "officeNumber",
        }
    ])
    .then(({name, id, email, officeNumber}) =>{


        const manager = new Manager(name, id, email, officeNumber);

        managers.push(manager);

        addEmployee();
    });
};

function addEmployee() {
    

    inquirer.prompt([
        {
            type: "list",
            message: "Congratulations! Your team has been created. What would you like to do next?",
            choices: ["* Add Engineer *", "* Add Intern *", "|| TEAM COMPLETE ||"],
            name: "newMember",
        },
    ])
    .then((response) => {

      /*  const managerGenerate = require('./src/managerMarkdown');
        const engineerGenerate = require('./src/engineerMarkdown');
        const internGenerate = require('./src/internMarkdown'); */

        var choice = response.newMember
        if (choice === "* Add Engineer *") {
            addEngineer();
        }
        if (choice === "* Add Intern *") {
            addIntern();
        }
        if (choice === "|| TEAM COMPLETE ||") {
            
                    
        }
    })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome! Please enter the ENGINEER'S name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the ENGINEER'S ID#:",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the ENGINEER'S email (format || email@host.com):",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the ENGINEER'S GitHub username:",
            name: "github",
        }
    ])
    .then(({name, id, email, github}) =>{

        const engineer = new Engineer(name, id, email, github);

        engineers.push(engineer);
    
        addEmployee(engineer);
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome! Please enter the INTERN'S name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the INTERN'S ID#:",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the INTERN'S email (format || email@host.com):",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the INTERN'S School:",
            name: "school",
        }
    ])
    .then(({name, id, email, school}) =>{

        const intern = new Intern(name, id, email, school);
        
        interns.push(intern);

        addEmployee();
    })

    

    
}   


}




init();