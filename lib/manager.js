const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
