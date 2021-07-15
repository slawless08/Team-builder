const Employee = require('./employee');

class Manager extends Employee {
    constructor (empName, empId, empEmail, officeNumber){
        super(empName, empId, empEmail);
        this.officeNumber = officeNumber;
        
    };
    getRole(){
        return "Manager";
    };
    getOfficeNumber(){
        return this.officeNumber;
    }
};

module.exports = Manager;