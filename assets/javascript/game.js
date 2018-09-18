//make an array of random words
var words = [
    "hello",
    "hi",
    "escape",
    "transit",
    "I like that energy"
 ];
// max tries variable for later use
 var maxTries = 10;
 var wins = 0;
 
// chose a random word 
var random = words[Math.floor(Math.random()*words.length)];
 


// all my editable code inputs for later use
var winsSpan = document.getElementById("totalWins")
var asteriskSpan = document.getElementById("asterisks");
var guessSpan = document.getElementById("guessedLetters");
var triesSpan = document.getElementById("tries");

// display one asterik per letter on the screen
// for a specific word
// select the element from the DOM
// using document 
var asterisksWord = "";
for (var i = 0; i < random.length; i++) {
    asterisksWord += "*";
asteriskSpan.innerText = asterisksWord
}
//take user input and check it against



//and display the guesses on screen
document.onkeyup = function(event) {
    guessSpan.innerText += event.key + "-";

}
//display default guesses remaning
triesSpan.innerHTML = maxTries;

//display dafault win state to be reference in later code
winsSpan.innerText = wins;


// if user inputs a letter it checks to see if it is correct and then it appears. 



    
    
        // -if false the letter appears and an asterisk appears user index of for letters contained
        // 
// the specific word

 //set variable for guesses ie 9 guess
 //start count loop for number of guesses
 //Loop
 //take user input
 //check input to see if it correct
 //------>// if yes, fill a letter
 //------>//if no, fail
 //then state guesses
 // no guesses left they lost-- reset use OBJECT
 
 //
 
 
//  document.activeElement
 
 
 //if they press the correct letter-- it appears, look for letter function (indexOf!!!!)
 //loop over the string, replace asteriks with letter, if not correct then put letter on to
 
 
 //win or lose
 //numbewr of guesses
 //need to

//  var words =

// function chooseRandomWord() {
//    words[random]
// }

// function reset() {
//    return {
//        guessesLeft: 9,
//        lettersLeft: 3,
//        chosenWord: chooseRandomWord()
//    };
// }

// var state = reset();



