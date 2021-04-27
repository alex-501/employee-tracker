const Employee_db = require('.');
const {prompt} = require('inquirer');
const {table} = require('table');
const cTable = require('console.table');
const inquirer = require('inquirer');
var requireStack = require('require-stack')
try{
  requireStack('.db/index.js')
}catch(e){
  console.log(e.stack)
}

var requireStack = require('require-stack')
try{
  requireStack('./server.js')
}catch(e){
  console.log(e.stack)
}


const startQuestion = [
    {
        type: 'list',
        name: 'startQuestion',
        message: 'What would you like to do?',
        choices: ['View Departments',
            'View Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Delete a Role',
            'Delete an Employee',
            'Exit ']
    }
];
//new dept
const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'Please enter the new department name:',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a department name");
              return false;
            }
        },
    }
]
    
//add employee
addEmployeeQuestions = (ids) => {
    return prompt(
        [  {   type: 'input',
                name: 'firstName',
                message: 'First name:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log("enter  first name:");
                      return false;  } },},
                        {   type: 'input',
                name: 'lastName',
                message: 'Last name:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log("enter  last name:");
                      return false;
                    }   }, },


                    
            { type: 'list',
                name: 'role',
                message: ' name employe role :',
                 choices: ids.employeerole },
            ] )}





//delete dept
const deleteDepartmentQuestion = (departments) => {
    return prompt([{
                type: 'list',
                name: 'department',
                message: " choose  department  to delete:",
                choices: departments
            }])}







//DELETE ROLE
const deleteRoleQuestion = (employeerole) => {
    return prompt(
        [
            {
                type: 'list',
                name: 'role',
                message: "choose the role to delete:",
                choices: employeerole
            }
        ]
    )
}



//DELETE EMPLOYEE
const deleteEmployeeQuestion = (employees) => {
    return prompt(
        [
            {
                type: 'list',
                name: 'employee',
                message: " choose the employee  to delete:",
                choices: employees
            }
        ]
    )
}



//view depts
const viewDepartments = () => {
    Employee_db.showDepartments()
    .then (([data]) => {
        const departments = data;
        console.log('\n');
        console.table(departments);
        console.log('\n')
    })
    .then ( () => {
        promptUser()
    })
}

//view employee function
const viewEmployees = () => {
    Employee_db.showEmployeesemployeeroleManagers()
    .then (([data]) => {
        const employees = data.map(employee => ({
            id: employee.id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            department: employee.department,
            salary: employee.salary,
        }))
        console.table(employees)
      
    })
    .then ( () => {
        promptUser()
    })
}



const addDepartment = () => {
    return prompt(addDepartmentQuestion)
    .then((res) => { 
        Employee_db.addDepartment(res.departmentName)
        console.log('\n\n Department: ' + `${res.departmentName}` + ' add SUCCESSFUL\n');
    })
    .then ( () => {
        promptUser()
    })
};

const addRole = () => {
    Employee_db.showDepartments()
    .then (([data]) => {
        const departments = data;
        return departments;
    })
    .then (departments =>{
        return addRoleQuestions(departments);
    })
    .then(answers => { 
         Employee_db.addRole(answers.roleName, parseInt(answers.salary), parseInt(answers.department))
         console.log('\n\nrole: ' + `${answers.roleName}` + ' add SUCCESS \n');
    })
    .then ( () => {
        promptUser()
    })
};

const addEmployee = () => {
    const ids = [];
    Employee_db.showemployeerole()
    .then (([data]) => {
        if (data) {
            ids.employeerole = data.map(role => ({
                value: role.id,
                name: role.title
            }));
        }
        return ids;
    })}


const deleteDepartment = () => {
    Employee_db.showDepartments()
    .then (([data]) => {
        let departmentArray = [];
        if (data) {
            departmentArray = data.map(department => ({
                value: department.id,
                name: department.department
            }));
        }
        return departmentArray;
    })
    .then (departments => {
        return deleteDepartmentQuestion(departments)
    })



    .then(answers => { 
        Employee_db.deleteDepartment(parseInt(answers.department))
        console.log(' department deleted. ');})
    .then ( () => {
        promptUser()
    })};







const deleteRole = () => {
    Employee_db.showemployeerole()
    .then (([data]) => {
        let roleArray = [];
        if (data) {
            roleArray = data.map(role => ({
                value: role.id,
                name: role.title
            }));
        }
        return roleArray; })
    .then (employeerole => {
        return deleteRoleQuestion(employeerole)})
    .then(answers => { 
        Employee_db.deleteRole(parseInt(answers.role))
        console.log('The role has been deleted. '); })
    .then ( () => {
        promptUser()
    })};





const deleteEmployee = () => {
    Employee_db.showEmployees()
    .then (([data]) => {
        let employeeArray = [];
        if (data) {
            employeeArray = data.map(employee => ({
                value: employee.id,
                name: employee.first_name + ' ' + employee.last_name
            }));
        }
        return employeeArray;
    })
    .then (employees => {
        return deleteEmployeeQuestion(employees)})
    .then(answers => { 
        Employee_db.deleteEmployee(parseInt(answers.employee))
        console.log(' employee  deleted. '); })
    .then ( () => {
        promptUser()
    })};


const promptUser = () => {
    console.log('\n')
    return prompt(startQuestion)
    .then(answer => { 
        console.clear()
        if   (`${answer.startQuestion}` === 'View All Departments') {
            




    
            viewDepartments()
        } else if (`${answer.startQuestion}` === 'View All employeerole') {
                viewemployeerole()



                 } else if (`${answer.startQuestion}` === 'View All Employees') {
            viewEmployees()



        } else if (`${answer.startQuestion}` === 'Add a Department') {
            addDepartment()


        } else if (`${answer.startQuestion}` === 'Add a Role') {
            addRole()


        } else if (`${answer.startQuestion}` === 'Add an Employee') {
            addEmployee()

            
            
        } else if (`${answer.startQuestion}` === 'Delete  Department') {
            deleteDepartment()


        } else if (`${answer.startQuestion}` === 'Delete employee Role') {
            deleteRole()


        } else if (`${answer.startQuestion}` === 'Delete Employee') {
            deleteEmployee()


            
        } else if (`${answer.startQuestion}` === 'Exit ') {
            console.log('\nprogram ended.\n');
            Employee_db.connection.end();
            return  } })





    .catch(err => {
        console.log(err);
    });
};

const start = () => {
    console.log('WELCOME TO EMPLOYEE TRACKER!')
    promptUser()
}

start()
