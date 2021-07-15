class Employee {
    constructor(empName, empId, empEmail) {
        this.name = empName;
        this.id = empId; 
        this.email = empEmail;
    }

    getName(){
        console.log(empName);
        return empName
    }

    getId(){
        console.log(empId);
        return empId
    }

    getEmail(){
        console.log(empEmail);
        return empEmail
    }

    getRole(){
        console.log("Employee");
        return "Employee"
    }
}

module.exports = Employee;