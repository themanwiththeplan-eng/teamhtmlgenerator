const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super();
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
