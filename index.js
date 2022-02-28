const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const http = require("http");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

firstPrompt();
let employees = [];
function engineerQ() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is the id of the employee?",
        type: "number",
      },
      {
        name: "email",
        message: "What is the employees email?",
        type: "input",
      },
      {
        name: "github",
        message: "What is their github?",
        type: "input",
      },
    ])
    .then((answer) => {
      // console.log(answer);
      let engineer = new Engineer();
      engineer.name = answer.name;
      engineer.id = answer.id;
      engineer.email = answer.email;
      engineer.github = answer.github;
      engineer.role = engineer.getRole();
      employees.push(engineer);
      //  console.log(employees);
    })
    .then(() => {
      promptAgain();
    });
}
function internQ() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is the id of the employee?",
        type: "number",
      },
      {
        name: "email",
        message: "What is the employees email?",
        type: "input",
      },
      {
        name: "school",
        message: "What is their school?",
        type: "input",
      },
    ])
    .then((answer) => {
      // console.log(answer);
      let intern = new Intern();
      intern.name = answer.name;
      intern.id = answer.id;
      intern.email = answer.email;
      intern.school = answer.school;
      intern.role = intern.getRole();
      employees.push(intern);
      // console.log(employees);
    })
    .then(() => {
      promptAgain();
    });
}
function managerQ() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is the id of the employee?",
        type: "number",
      },
      {
        name: "email",
        message: "What is the employees email?",
        type: "input",
      },
      {
        name: "officeNumber",
        message: "What is their office number?",
        type: "number",
      },
    ])
    .then((answer) => {
      // console.log(answer);
      let manager = new Manager();
      manager.name = answer.name;
      manager.id = answer.id;
      manager.email = answer.email;
      manager.officeNumber = answer.officeNumber;
      manager.role = manager.getRole();
      employees.push(manager);
      //console.log(employees);
    })
    .then(() => {
      promptAgain();
    });
}
function firstPrompt() {
  inquirer
    .prompt([
      {
        name: "role",
        message: "What is the role in the company?",
        type: "list",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((answer) => {
      let ans = answer;
      console.log(ans);

      if (Object.values(ans) == "Engineer") {
        engineerQ();
      } else if (Object.values(ans) == "Intern") {
        internQ();
      } else if (Object.values(ans) == "Manager") {
        managerQ();
      }
    });
}

function promptAgain() {
  inquirer
    .prompt([
      {
        name: "firstPrompt",
        message: "Would you like to add another team member?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (Object.values(answer) == "Yes") {
        firstPrompt();
      } else {
        cards = "";
        for (let i = 0; i < employees.length; i++) {
          cards += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${employees[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${employees[i].role}</h6>
    <p class="card-text" ID: ${employees[i].id}></p>
    <a href="mailto:${employees[i].email}" class="card-link">Email: ${employees[i].email}</a>\n`;

          if (employees[i].officeNumber) {
            cards += `<p class="card-text" Office Number:${employees[i].officeNumber}></p>`;
          } else if (employees[i].github) {
            cards += `<a href = "${employees[i].github}" target = _blank class = "card-link">Github: ${employees[i].github}</a> `;
          } else if (employees[i].school) {
            cards += `<p class="card-text"School: ${employees[i].school}></p>`;
          }
          cards += `</div>
            </div>`;
        }
        fs.writeFileSync(
          "./dist/index.html",
          `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <header><h1> Employee Roster </h1></header>
    <div class="app">
    ${cards}
</div>
    
</body>
</html>`
        );
      }
    });
}
