const Intern = require('../intern');

describe("Intern", () => {
    describe("getName function", () => {
        it("prints name", () => {
            const workerName = "Sam";
            const worker = new Intern("Sam", 1, "s@mail.com", "osu");
            expect(worker.getName()).toBe(workerName);
        });
    });

    describe("getId function", () => {
        it("prints empID", () => {
            const workerId = 1;
            const worker = new Intern("Sam", 1, "s@mail.com", "osu");
            expect(worker.getId()).toBe(workerId);
        });
    });

    describe("getEmail function", () => {
        it("prints email", () => {
            const workerEmail = "s@mail.com";
            const worker = new Intern("Sam", 1, "s@mail.com", "osu");
            expect(worker.getEmail()).toBe(workerEmail);
        });
    });

    describe("getRole function", () => {
        it("prints role", () => {
            const worker = new Intern("Sam", 1, "s@mail.com", "osu");
            expect(worker.getRole()).toBe("Intern");
        });
    });

    describe("getGithub function", () => {
        it("prints school ", () => {
            const worker = new Intern("Sam", 1, "s@mail.com", "osu");
            expect(worker.getSchool()).toBe("osu");
        });
    });
    
});