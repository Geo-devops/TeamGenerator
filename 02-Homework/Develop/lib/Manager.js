// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(email, name, id, officeNmumber){
        super(email, name, id, officeNmumber)
        this.officeNmumber = officeNmumber;
            }
    getRole(){return "Manager"
    }
        }
        module.exports = Manager; 