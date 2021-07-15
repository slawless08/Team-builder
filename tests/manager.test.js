const Manager = require('../manager');

describe("Manager", () => {
    describe("getName function", () => {
        it("prints name", () => {
            const workerName = "Sam";
            const worker = new Manager("Sam", 1, "s@mail.com", 7);
            expect(worker.getName()).toBe(workerName);
        });
    });

    describe("getId function", () => {
        it("prints empID", () => {
            const workerId = 1;
            const worker = new Manager("Sam", 1, "s@mail.com", 7);
            expect(worker.getId()).toBe(workerId);
        });
    });

    describe("getEmail function", () => {
        it("prints email", () => {
            const workerEmail = "s@mail.com";
            const worker = new Manager("Sam", 1, "s@mail.com", 7);
            expect(worker.getEmail()).toBe(workerEmail);
        });
    });

    describe("getRole function", () => {
        it("prints role", () => {
            const worker = new Manager("Sam", 1, "s@mail.com", 7);
            expect(worker.getRole()).toBe("Manager");
        });
    });

    describe("getGithub function", () => {
        it("prints school ", () => {
            const worker = new Manager("Sam", 1, "s@mail.com", 7);
            expect(worker.getOfficeNumber()).toBe(7);
        });
    });
    
});