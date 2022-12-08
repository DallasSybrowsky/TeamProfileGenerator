const Employee = require("./Employee");

class Intern extends Employee {
  constructor(employeeName, id, email, schoolName) {
    super(employeeName, id, email);
    this.schoolName = schoolName;
  }
  getSchoolName() {
    return this.schoolName;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
