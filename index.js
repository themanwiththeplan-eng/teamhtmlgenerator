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
        for (let i = 0; i < employees.length; i++) {
          console.log(employees[i]);
        }
      }
    });
}

function makeServer() {
  http
    .createServer(function (req, res) {
      res.write("<html><head></head><body>");
      res.write();
      res.end("</body></html>");
    })
    .listen(1337);
}

//makeServer();

//open("http://localhost:1337", { app: "firefox" });
