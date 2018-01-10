// Link in the Inquirer Package
var inquirer = require('inquirer');
var WordsList = require('./words.js');

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

var game = {

    wordBank : guessWordList, // import a list of words
    guessesRemaining : 10, // per word
    currentWrd : null, // the word object
  
  
    startGame : function(){
      // make sure the user has 10 guesses
      this.guessesRemaining = 10;
  
      // get a random word from the array
      var j = Math.floor(Math.random() * this.wordBank.length);
      this.currentWrd = this.wordBank[j];
  
      // Inform User game has begun
      console.log('Figure out the Programming Language. Do you have what it takes, brah?');
  
      // Show the empty letters ( _ _ _ _ ) and guesses, etc.
      displayHangman = new lettersToDisplay(this.currentWrd);
      displayHangman.parseDisplay();
      console.log('Guesses Left: ' + game.guessesRemaining);
  
      // prompt for a letter
      keepPromptingUser();
    }
  
  };