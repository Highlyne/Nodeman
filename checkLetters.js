// Need function that will check the letters guessed versus the random word selected.
function checkLetter(letter, word){

    // Check if the letter is in the word
    if(word.indexOf(letter) != -1){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  // Export the function
  module.exports = checkLetter;