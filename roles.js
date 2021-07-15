const Employee = require('./employee');

class Manager extends Employee {
    constructor (officeNumber){
        this.officeNumber = officeNumber;
        super(empName, empId, empEmail);
    }
    getRole(){
        console.log("Manager");
        return "Manager"
    }
};

class Engineer extends Employee {
    constructor (github){
        this.github = github;
        super(empName, empId, empEmail);
    }
    getGithub(){
        console.log(github);
        return this.github;
    }
    getRole(){
        console.log("Engineer");
        return "Engineer"
    }
};

class Intern extends Employee {
    constructor (school){
        this.school = school;
        super(empName, empId, empEmail);
    }
    getRole(){
        console.log("Intern");
        return "Intern"
    }
    getSchool(){
        console.log(school);
        return school
    }
};