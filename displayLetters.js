var showLetters = function(word, correctLetter) {

    this.gameWord = word;
    this.correctLetter = correctLetter;
    this.displayText = "_";
  
    // Function to display hangman word to user
    this.parseDisplay = function() {
  
      // Show a _ for each letter of the word until a correct letter is given. At start of game correctLetter is going to be undefined.
      if(this.correctLetter == undefined) {
       for(var i = 0; i < this.gameWord.length; i++){
          this.displayText += ' _ ';
            }
        } else if (this.correctLetter == "") {
        // checking to see what the game word letters are 
            for(var i = 0; i < this.gameWord.length; i++) {
        // Checking to see what the letters given by the user are
                for(var j = 0; j < this.goodLetters.length; j++){
            // If yes the letter
                    if(this.gameWord[i] == this.correctLetter[j]){
                    this.displayText += this.correctLetter[j];
                        }
                }
            }
        }
  
      // Remove first/last space and console log
      this.displayText = shown.trim();
      console.log(this.displayText);
  
      // Check to see if the game was won display text equals the gameword
      if(this.displayText == this.gameWord){
        this.winner = true;
      }
  
    }
  };
  
  // export to use in word.js
  module.exports = lettersToDisplay;
  