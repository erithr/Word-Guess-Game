var words = [
    "BOP",
    "Crispy",
    "I Like That Energy"
];
// chose a random word
    var chosenWord = words[1];
// display one asterik per letter on the screen
// for a specific word
// select the elemetn from the DOM
// using document 
var asteriskSpan = document.getElementById("asterisks");
var asterisksWord = "";
for (var i = 0; i < chosenWord.length; i++) {
    asterisksWord += "*";
asteriskSpan.innerText = asterisksWord
}

function chooseRandomWord() {
     words[random]
}

function reset() {
    return {
        guessesLeft: 9,
        lettersLeft: 3,
        chosenWord: chooseRandomWord()
    };
}

var state = reset();
//take user input and check it against 
// the specific word