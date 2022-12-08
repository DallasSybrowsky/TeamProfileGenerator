const Engineer = require("../lib/Engineer");

describe("Testing Engineer Class", () => {
    it ("should be able to create instance", () => {
        //data set up
        const name = "Dallas";
        const id = 77;
        const email = "dallas@gmail.com"
        const gitHub = "username.gitHub.com"
        const role = "Engineer"
        // create case
        const engineer = new Engineer(name, id, email, gitHub, role)
        // make assertion
        expect(engineer.employeeName).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.gitHub).toBe(gitHub);
        expect(engineer.getRole()).toBe("Engineer");
    });
});
