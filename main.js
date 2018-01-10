// Link in the Inquirer Package
var inquirer = require('inquirer');

inquirer.prompt([
    {
      type: "value",
      name: "letter",
      message: "Guess a Letter: "
    }]);