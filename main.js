// Link in the required items
var inquirer = require('inquirer');
var WordsList = require('./words.js');
var checkLetter = require('./checkLetters.js');
var prompt = require("prompt");

// Set up variables
var wordBank = WordsList; 

  // Pull a random word from the wordBank
var currentWrd = WordsList[Math.floor(Math.random() * WordsList.length)];
// Split out the letters in the current word that needs to be guessed
var lettersInWord = currentWrd.split("");
// Variable to hold the dashes for the word that needs to be guessed
var spaceHolder = [];

var lettersWithPlaceholders = [];
// Variable for the letters the user have picked
var letterGuessed = "";
// letters in word length
var lettersInWordLength = lettersInWord.length;
var numberOfGuesses = lettersInWordLength;
// constructor function used to create objects

var gameStart = function() {
    inquirer.prompt([
  {name: "letter",
    type: "value",
    message: "Let's play! Pick a Letter and hit enter.",
    }

  ]).then(function(userInput) {
     
    console.log("res: ", userInput);
    
          })
        }

  gameStart();