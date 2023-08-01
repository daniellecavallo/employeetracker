const inquirer = require("inquirer")
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "Bean123!",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

function MainMenu(){
    inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'selection',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add employee', 'add role', 'add department', 'update employee']
    },
    
  ])
  .then((response) =>{
    switch (response.selection) {
        case "view all departments":     
        console.log("Departments selected")
        getdepartments();
        MainMenu();
        break;
        case "view all roles":     
        console.log("view all roles")
        break;
        case "view all employees":     
        console.log("view all employees")
        break;
        case "add employee":     
        console.log("add employee")
        break;
        case "add role":     
        console.log("add role")
        break;
        case "add department":     
        console.log("add department")
        break;
        case "update employee":     
        console.log("update employee")
        break;
        default:
        console.log("Please make a selection")
    }
});

}
async function getdepartments(){

    let query = "SELECT * from departments"
    const departments = await connection.query(query)

    console.table(departments)

}