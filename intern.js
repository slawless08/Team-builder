const Employee = require('./employee');

class Intern extends Employee {
    constructor (school){
        super(empName, empId, empEmail);
        this.school = school;
        
    };
    getRole(){
        return "Intern";
    };
    getSchool(){
        return this.school;
    };
};


module.exports = Intern;