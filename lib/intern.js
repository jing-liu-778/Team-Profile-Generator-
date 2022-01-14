const Employee = require('./employee');

// create subclass for Intern
class Intern extends Employee{
    constructor(name, id, email, school){
          // calling employee constructor 
        super(name, id, email);
        this.school = school;

    }

    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;