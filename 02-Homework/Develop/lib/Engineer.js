// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require

const Engineer extends Employee{
    constructor(email, name, id, githubUsername){
        super(email, name, id);
        this.github = githubUsername;
    }
     getRole(){
         return "Engineer"
}

}
module.exports = Engineer; 