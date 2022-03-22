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
var pageTop = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Employee Card Template</title>
                    <link rel="stylesheet" href="teamPage.css">
                </head>
                <body>
                <header class="title"> My Team Page</header>
                <div class="teamMembers">`
var pageClose = `</div>
                </body>
                </html>`


createManager();

function createManager() {
    fs.writeFile('./destination/teamPage.html', pageTop, function (err) {
        if (err) throw err;
      });
    fs.writeFile('./destination/teamPage.css', cssGenerate(), function (err) {
        if (err) throw err;
      });
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

        fs.appendFile('./destination/teamPage.html', manager.managerGenerate(), function (err) {
            if (err) throw err;
          });

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
            
            fs.appendFile('./destination/teamPage.html', pageClose, function (err) {
                if (err) throw err;
              });
            console.log("__Team HTML page has been successfully generated__");
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

        fs.appendFile('./destination/teamPage.html', engineer.engineerGenerate(), function (err) {
            if (err) throw err;
          });

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

        fs.appendFile('./destination/teamPage.html', intern.internGenerate(), function (err) {
            if (err) throw err;
          });
        
        interns.push(intern);

        addEmployee();
    })    
}   

function createTeam() {
    
    fs.readFile('./destination/teamPage.html',)
    
}

}




init();