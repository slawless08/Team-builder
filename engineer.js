const Employee = require('./employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, github) {
        super(empName, empId, empEmail);
        this.github = github;
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return "Engineer";
    };
};

module.exports = Engineer;