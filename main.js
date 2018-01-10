// Link in the Inquirer Package
var inquirer = require('inquirer');

function playGame() {
    inquirer.prompt([
    {
      type: "value",
      name: "letter",
      message: "Guess a Letter and hit enter: "
    }
    ]).then(function(userInput){

    // Take in user input and make sure it's lowercase
    var inputLetter = userInput.letter.toLowerCase();
    console.log("You picked " + inputLetter);
    })
}

playGame ();