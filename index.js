const inquirer = require("inquirer")

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
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

}