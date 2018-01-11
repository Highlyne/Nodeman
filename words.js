// Game will randomly select a word from the list below.

var WordsList = [
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
    "cake",
    "cannoli",
    "caramel",
    "carrot cake",
    "cheesecake",
    "chocolate",
    "churro",
    "cobbler",
    "cookie",
    "crepe",
    "cupcake",
    "custard",
    "gelatin",
    "gelato",
    "gingersnaps",
    "gingerbread",
    "honey",
    "ice cream",
    "jam",
    "jelly",
  ];
  
  // Export the list of words
  module.exports = WordsList;

// Need function that will check the letters guessed versus the random word selected.
  function checkForLetter(letter, word){

    // Check if the letter is in the word
    if(word.indexOf(letter) != -1){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  // Export the function
  module.exports = checkForLetter;