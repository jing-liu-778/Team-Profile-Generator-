class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }
    // return name from input 
    getName(){
        return this.name;

    }
    getId(){
        return this.id;

    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee'
    }
};

module.exports = Employee;

