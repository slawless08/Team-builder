const Employee = require("../employee");

describe("Employee", () => {
    describe("getName function", () => {
        it("prints name", () => {
            const workerName = "Sam";
            const worker = new Employee("Sam", 1, "s@mail.com");
            worker.getName();
            expect(worker.empName).toBe(workerName);
        });
    });

    describe("getId function", () => {
        it("prints empID", () => {
            const workerId = 1;
            const worker = new Employee("Sam", 1, "s@mail.com");
            worker.getId();
            expect(worker.empId).toBe(workerId);
        });
    });

    describe("getEmail function", () => {
        it("prints email", () => {
            const workerEmail = "s@mail.com";
            const worker = new Employee("Sam", 1, "s@mail.com");
            worker.getEmail();
            expect(worker.empEmail).toBe(workerEmail);
        });
    });

    describe("getRole function", () => {
        it("prints role", () => {
            const workerRole = "Sam";
            const worker = new Employee("Sam", 1, "s@mail.com");
            worker.getRole();
            expect(worker.getRole()).toBe("Employee");
        });
    });
});