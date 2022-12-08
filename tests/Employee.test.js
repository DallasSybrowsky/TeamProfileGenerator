const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
    it ("should be able to create instance", () => {
        //data set up
        const employeeName = "Dallas";
        const id = 77;
        const email = "Dallas@gmail.com"
        // create case
        const employee = new Employee(employeeName, id, email)
        // make assertion
        expect(employee.employeeName).toBe(employeeName);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });
});