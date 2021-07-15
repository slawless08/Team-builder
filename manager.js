const Employee = require('./employee');

class Manager extends Employee {
    constructor (officeNumber){
        super(empName, empId, empEmail);
        this.officeNumber = officeNumber;
        
    };
    getRole(){
        console.log("Manager");
        return "Manager";
    };
};

module.exports = Manager;