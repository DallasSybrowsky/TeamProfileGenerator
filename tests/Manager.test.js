const Manager = require("../lib/Manager");

describe("Testing Manager Class", () => {
    it ("should be able to create instance", () => {
        //data set up
        const employeeName = "Dallas";
        const id = 17;
        const email = "Dallas@gmail.com"
        const officeNumber = 101
        const role = "Manager"
        // create case
        const manager = new Manager(employeeName, id, email, officeNumber, role)
        // make assertion
        expect(manager.employeeName).toBe(employeeName);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNumber).toBe(officeNumber);
        expect(manager.getRole()).toBe("Manager");
    });

});