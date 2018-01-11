// Link in the required items
var inquirer = require('inquirer');
var WordsList = require('./words.js');
var checkLetter = require('./checkLetters.js');
var prompt = require("prompt");

// Set up variables
var wordBank = [
  "baked alaska",
  "baked apple", 
  "banana split",
  "waffle",
  "bread pudding",
  "brownie",
  "butterscotch",
  "marshmallow",
  "milkshake",
  "mousse",
  "cake"]; 

  // Pull a random word from the wordBank
var currentWrd = wordBank[Math.floor(Math.random() * wordBank.length)];
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

function Word(chosenWord, spaceHolder, lettersInWordLength, letterGuessed, lettersInWord) {
    this.currentWrd = currentWrd;
    this.spaceHolder = spaceHolder;
    this.lettersInWordLength = lettersInWordLength;
    this.lettersInWord = lettersInWord;
    this.letterGuessed = letterGuessed; 
};

var word = new Word(currentWrd, letterGuessed, lettersInWord);

// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {
  // based on # of letters in chosenWord.
  for (var i = 0; i < lettersInWordLength; i++) {
      spaceHolder.push("__");
      //spaceHolder.toString();
  }
  console.log(spaceHolder.join(" ")); // supposed to 'join' the "__" in word array
};
// Call the placeHolder function to show _ for the length of the word to be guessed
word.placeHolder();

var gameStart = function() {
    inquirer.prompt([
  {name: "letter",
    type: "value",
    message: "Let's play! Pick a Letter and hit enter.",

    validate: function(value) {
      if (isNaN(value) === true) {
        console.log('true');
        return true;
      }
      console.log('false');
      return false;
    }

  }]).then(function(userInput) {
     
    console.log("res: ", res);
    letterGuessed = res.currentguess;
    var lengthOfWord = word.lettersInWordLength.length;
    var wordArray = word.lettersInWordLength;
    var letterInWord = checkForLetter(inputLetter, game.currentWrd);

    console.log("currentWrd: ", currentWrd); 
    console.log("letterGuessed: ", letterGuessed) 
    console.log("wordArray: ", wordArray);
    console.log("lettersInWord: ", lettersInWord)
    console.log("lengthOfWord: ", lengthOfWord);
    console.log("Number of Guesses: ", numberOfGuesses); 
    console.log("Hangman Word: ", spaceHolder);
   
      for (var i = 0; i < lettersInWord.length; i++)  // lettersInWord shows hangman letter in spaceholder NOT wordArray
        {   
          if (lettersInWord[i] === letterGuessed) 
          {
              spaceHolder[i] = letterGuessed;
              console.log(letterGuessed + " you got!"); 
            
            } else {
              console.log(letterGuessed + " try again!");
              }    
            }
          numberOfGuesses--;
          console.log("Your Hangman: ", spaceHolder.join(' '))
          console.log(numberOfGuesses + "number of guesses remaining!");
          gameStart();
          gameEnd();
          })
        }

  var gameEnd = function() {

    if (spaceHolder.toString() === lettersInWord.toString()) 
      {
        console.log(spaceHolder.toString(), lettersInWord.toString()) 
        console.log("You win! Let's play again!");
        gameStart();
  
    } else if (numberOfGuesses === 0) 
      {
      // run inquirer to ask user if they want to start a new game after guesses run out
      inquirer.prompt([{
          type: 'input',
          message: 'Sorry! Do you want to play again?',
          name: "confirm",
          default: true
      }, ])
      .then(function(res) {
  
          if (res.confirm) {
              console.log("\nOkay, here we go!\n");
              // Restart the game
              gameStart();
          } else {
              console.log("\nThanks for playing!\n");
          }
      });
    }
  }
  
  gameStart();
  gameEnd();