const Intern = require("../lib/Intern");

describe("Testing Intern Class", () => {
    it ("should be able to create instance", () => {
        //data set up
        const employeeName = "Dallas";
        const id = 157;
        const email = "Dallas@gmail.com"
        const school = "UCSD"
        const role = "Intern"
        // create case
        const intern = new Intern(employeeName, id, email, school, role)
        // make assertion
        expect(intern.employeeName).toBe(employeeName);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.getSchoolName()).toBe(school);
        expect(intern.getRole()).toBe("Intern");
    });
});
