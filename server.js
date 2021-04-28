const mysql = require("mysql");
const {prompt} = require('inquirer');
const {table} = require('table');
const cTable = require('console.table');
const inquirer = require('inquirer');
var requireStack = require('require-stack')

// connect/ create to db - remember password
const  connection = mysql.createConnection({
    host: 'localhost',
    port: `3306`,
    user: 'root',
    password: '$$Yumaaz1996$$',
    database: 'employee_db'
});


connection.connect(function (err) {
    if (err) throw err;
    mainMenu();
//how to connect db 
});

//inquirer prompts
function mainMenu() {
    inquirer
        .prompt({
            type: "rawlist",
            name: "action",
            message: "What would you like to do?",
            choices: ["View Employees",
                "View Departments",
                "View Roles",
                "Add Department",
                 "Add Role",
                "Add Employee",
               
            
                "Exit"
            ]
        })
        //////////////////////////////////////////
        .then(function (answer) {
            switch (answer.action) { case "View Employees":
                    viewEmployee();
                    break;


                case "View Departments":
                    viewDepartment();
                    break;
               
                case "View Roles":
                    viewRole();
                    break;


                case "Add Department":
                    addDepartment();
                    break;


                case "Add Role":
                    addRole();
                    break;


                case "Add Employee":
                    addEmployee();
                    
                    
                    case "Exit":
                    connection.end()  }  }) }
/////////////////////

function viewEmployee() {

    const query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu() })}
//////
function viewRole() {

    const query = "SELECT * FROM employeerole"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })}
////////////////////
function viewDepartment() {

    const query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })}

///////////////////////
function addRole() {
    var query = "SELECT * FROM department";
    var department = [];
    connection.query(query, function (err,res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            department.push({name:res[i].name, value:res[i].id})
        }})




/////////////secondary prompts
    
    inquirer .prompt([ {
        type: "input",
        name: "title",
     message: "What Role Would you like to add?",},
        {
            type:"input",
            name: "salary",
            message: " What is the salary?",},
        {
            type: "list",
            name: "department",
            message: "What department ID does this belong to?",
            choices: department },
       
    ]).then(function(answer) {
        var query = "INSERT INTO employeerole SET ?";
        connection.query(query, {employeerole:answer["title"], department_id:answer["department"], salary:answer["salary"]}, function(err, res){
            if (err) throw err;
            console.log("title has been added");
            mainMenu();
        })
    }) 

}
///////////////////
function addDepartment () {
    inquirer
    .prompt({
        type: "input",
        name: "departments",
        message: "Name of Dept to be added?",
    }).then(function(answer) {
        var query = "INSERT INTO department SET ?";
        connection.query(query, {name:answer["departments"]}, function (err, res){
            if (err) throw err;
            console.log("Succesfully added");
            mainMenu();
        })
    })
}

