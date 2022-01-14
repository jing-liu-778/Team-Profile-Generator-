const Employee = require('./employee');

// create subclass for manager
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        // calling employee constructor 
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;