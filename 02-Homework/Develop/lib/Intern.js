// TOconst Employee = require("./Employee");DO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(email, name, id, school){
        super(email, name, id, school)
        this.school = school;
            }
    getRole(){return "Intern"
    }
        }
        module.exports = Intern; 