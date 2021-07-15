const Engineer = require('../engineer');

describe("Engineer", () => {
    describe("getName function", () => {
        it("prints name", () => {
            const workerName = "Sam";
            const worker = new Engineer("Sam", 1, "s@mail.com", "my git");
            expect(worker.getName()).toBe(workerName);
        });
    });

    describe("getId function", () => {
        it("prints empID", () => {
            const workerId = 1;
            const worker = new Engineer("Sam", 1, "s@mail.com", "my git");
            expect(worker.getId()).toBe(workerId);
        });
    });

    describe("getEmail function", () => {
        it("prints email", () => {
            const workerEmail = "s@mail.com";
            const worker = new Engineer("Sam", 1, "s@mail.com", "my git");
            expect(worker.getEmail()).toBe(workerEmail);
        });
    });

    describe("getRole function", () => {
        it("prints role", () => {
            const worker = new Engineer("Sam", 1, "s@mail.com", "my git");
            expect(worker.getRole()).toBe("Engineer");
        });
    });

    describe("getGithub function", () => {
        it("prints github", () => {
            const worker = new Engineer("Sam", 1, "s@mail.com", "my git");
            expect(worker.getGithub()).toBe("my git");
        });
    });
    
});