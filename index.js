// require html file generator
const generateHTML = require ('./src/generateHTML');
// require class
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');

// require node module
const fs = require('fs');
const inquirer = require ('inquirer');

const teamArray = [];

// manager inquirer
const addManager= ()=>{

    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        // validate property to check that the user provide value
        validate: (value)=>{
            if(value){return true;
            }else{
                console.log("Please enter a name");
                // return false;
            }
        }
        },
        {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: (value)=>{
            if(parseInt(value) >0 ){ 
                
                return true;
            }else{console.log("Please enter a possitive number greater than zero");
               return false;
                }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: (value)=>{
            if(value){return true;
            }else{
                console.log("Please enter email address");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: (value)=>{
            if(parseInt(value) >0 ){ 
                
                return true;
            }else{console.log("Please enter a possitive number greater than zero");
               return false;
                }
        }
        },
        
    ])
    .then(mangerInput =>{
        const {name, id, email, officeNumber} =  mangerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        teamArray.push(manager);
        console.log(manager)
    });
};


// employee inquirer
const addEmployee = ()=>{

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        // validate property to check that the user provide value
        validate: (value)=>{
            if(value){return true;
            }else{
                console.log("Please enter a name");
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'id',
        message: "What is the employee's id?",
        validate: (value)=>{
            if(parseInt(value) >0 ){ 
                
                return true;
            }else{console.log("Please enter a possitive number greater than zero");
               return false;
                }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: (value)=>{
            if(value){return true;
            }else{
                console.log("Please enter email address");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: "What is the employee's github?",
        when: (input)=>input.role === "Engineer",
        validate: (value)=>{
            if(value){return true;
            }else{
                console.log("Please enter github username");
                return false;
                }
        }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school?",
            when: (input) => input.role === "Intern",
            validate: (value) => {
                if(value){return true;
                }else{
                    console.log("Please enter school name");
                    return false;
                    }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])
   .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// generate html file for team profile
const writeFile = data =>{
    fs.writeFile('./dist/index.html', data, err =>{
        // 
        if(err){
            console.log(err);
            return;
        }else{
            console.log("team profile has been succesfully created!")
        }



    })
};

addManager()
    .then(addEmployee)
    .then(teamArray=>{
        return generateHTML(teamArray);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML)
    })
    .catch(err =>{
        console.log(err);
    })
