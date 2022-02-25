const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
