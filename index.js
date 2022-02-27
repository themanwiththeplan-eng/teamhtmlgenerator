const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const http = require("http");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

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
        name: "Github",
        message: "What is their github?",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
    });
}

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
    }
  });

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
