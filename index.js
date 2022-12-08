// bring inquirer
const inquirer = require("inquirer");
const fs = require("fs");

// employee = [{Manager}, {Engineer}, {Intern} ]
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeList = [];

const employeeQuery = [
  {
    type: "list",
    message: "Please choose what type of team member you are adding:",
    name: "employeeType",
    choices: ["Engineer", "Intern", "I am done adding team members."],
  },
];

const managerQuery = [
  {
    type: "input",
    message: "Please enter the Manager's name: ",
    name: "employeeName",
  },
  {
    type: "number",
    message: "Please enter the Manager's Employee ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the Manager's email address:",
    name: "email",
  },
  {
    type: "number",
    message: "Please enter the Manager's office number:",
    name: "officeNumber",
  },
];

const engineerQuery = [
  {
    type: "input",
    message: "Please enter the Engineer's name: ",
    name: "employeeName",
  },
  {
    type: "number",
    message: "Please enter the Engineer's Employee ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the Engineer's email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the Engineer's GitHub username:",
    name: "gitHub",
  },
];

const internQuery = [
  {
    type: "input",
    message: "Please enter the Intern's name: ",
    name: "employeeName",
  },
  {
    type: "number",
    message: "Please enter the Intern's Employee ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the Intern's email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the Intern's university name:",
    name: "schoolName",
  },
];

// create a function that run inquirer prompt questions .then(() => inquirer.prompt()then) // chain promises

const teamQueries = () => {
  return managerPrompt().then(() => {
    return employeePrompt();
  });
};

const managerPrompt = () => {
  return inquirer.prompt(managerQuery).then((res) => {
    employeeList.push(
      new Manager(res.employeeName, res.id, res.email, res.officeNumber)
    );
  });
};

const engineerPrompt = () => {
  return inquirer.prompt(engineerQuery).then((res) => {
    employeeList.push(
      new Engineer(res.employeeName, res.id, res.email, res.gitHub)
    );
  });
};

const internPrompt = () => {
  return inquirer.prompt(internQuery).then((res) => {
    employeeList.push(
      new Intern(res.employeeName, res.id, res.email, res.schoolName)
    );
  });
};

const employeePrompt = () => {
  return inquirer.prompt(employeeQuery).then((res) => {
    console.log(res);
    if (res.employeeType === "I am done adding team members.") {
      console.log(employeeList);
      return employeeList;
    }
    if (res.employeeType === "Engineer") {
      return engineerPrompt().then(() => {
        return employeePrompt();
      });
    }
    if (res.employeeType === "Intern") {
      return internPrompt().then(() => {
        return employeePrompt();
      });
    }
  });
};

managerTemplate = () => {
  let template = "";
  employeeList.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      template += `<div class="employee-box">
    <div class="title-box">
      <h3 class="employee-name">${employee.employeeName}</h3>
      <h4 class="job-title"><span class="icon"><ion-icon name="cafe-outline"></ion-icon></span> Manager</h4>
    </div>
    <div class="employee-data">
      <h6 class="id">ID: ${employee.id}</h6>
      <h6 class="email-tag">Email: 
        <a href="mailto: ${employee.email}">
          <span class="employee-email">${employee.email}
        </a>
      </h6>
      <h6 class="office">Office Number: ${employee.officeNumber}</h6>
    </div>
  </div>`;
    }
  });
  return template;
};
engineerTemplate = () => {
  let template = "";
  let engineerPool = [];
  employeeList.forEach((employee) => {
    if (employee.getRole() === "Engineer") {
      engineerPool.push(employee);
    }
  });
  for (let i = 0; i < engineerPool.length; i++) {
    template += `<div class="employee-box">
    <div class="title-box">
      <h3 class="employee-name">${engineerPool[i].employeeName}</h3>
      <h4 class="job-title"><span class="icon"><ion-icon name="glasses-outline"></ion-icon></span> Engineer</h4>
    </div>
    <div class="employee-data">
      <h6 class="id">ID: ${engineerPool[i].id}</h6>
      <h6 class="email-tag">Email: 
        <a href="mailto: ${engineerPool[i].email}">
          <span class="employee-email">${engineerPool[i].email}</a>
      </h6>
      <h6 class="gitHub-tag">GitHub: 
        <a href="https://github.com/${engineerPool[i].gitHub}">
          <span class="gitHub">${engineerPool[i].gitHub}</a>
      </h6>
    </div>
  </div>`;
  }
  return template;
};
internTemplate = () => {
  let template = "";
  let internPool = [];
  employeeList.forEach((intern) => {
    if (intern.getRole() === "Intern") {
      internPool.push(intern);
    }
  });
  for (let i = 0; i < internPool.length; i++) {
    template += `<div class="employee-box">
    <div class="title-box">
      <h3 class="employee-name">${internPool[i].employeeName}</h3>
      <h4 class="job-title"><span class="icon"><ion-icon name="school-outline"></ion-icon></span> Intern</h4>
    </div>
    <div class="employee-data">
      <h6 class="id">ID: ${internPool[i].id}</h6>
      <h6 class="email-tag">Email: 
        <a href="mailto: ${internPool[i].email}">
          <span class="employee-email">${internPool[i].email}
        </a>
      </h6>
      <h6 class="school">School: ${internPool[i].schoolName}</h6>
    </div>
  </div>`;
  }
  return template;
};
const pageGenerate = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Organization Chart</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header class="header">
        <h3>My Team</h3>
      </header>
      <div class="org-container">
        ${managerTemplate()}
        ${engineerTemplate()}
        ${internTemplate()}
      </div>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  </body>
</html>`;
};
// Function to close inquirer and generate HTML
teamQueries().then(() => {
  const htmlPageData = pageGenerate();
  // console.log(htmlPageData);
  fs.writeFile("./dist/index.html", htmlPageData, (err) =>
    err ? console.log(err) : console.log("Your org chart has been created!")
  );
});
// end point = loop employee array = convert into html
