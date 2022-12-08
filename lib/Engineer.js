const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(employeeName, id, email, gitHub) {
    super(employeeName, id, email);
    this.gitHub = gitHub;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
