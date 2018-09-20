//Variables

var state = {
    words: ["hello",
    "hi",
    "escape",
    "transit",
    "I like that energy"],
    maxtries: 10,
    wins: 0,
    winSpan : document.getElementById("totalWins"),
    asteriskSpan : document.getElementById("asterisks"),
    triesSpan : document.getElementById("tries"),

    win: function(){
        alert("You win!");
        this.wins = this.wins +1;
        state.winSpan.innerText = state.wins;
    },
    chooseRandomWord: function(){
        var asterisksWord = "";
for (var i = 0; i < random.length; i++) {
    asterisksWord += "*";
state.asteriskSpan.innerText = asterisksWord;
    }},
    gameStart: function(){
        var asterisksWord = "";
        for (var i = 0; i < random.length; i++) {
            asterisksWord += "*";
        state.asteriskSpan.innerText = asterisksWord;
            }
        state.winSpan.innerText = state.wins;
        console.log(state.wins);
        state.triesSpan.innerHTML = state.maxtries;
        console.log(state.maxtries);

    },
    wrongGuess: function(){
        this.maxtries = this.maxtries -1;
        this.triesSpan.innerText = state.maxtries;
    }
};
var random = state.words[Math.floor(Math.random()*state.words.length)];
console.log(random);
//Functions
function updateScore(){

}

//Game Logic
document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
//game start logic 
    if (letter === "1" ){
        state.gameStart();
        console.log();
    }

    if (letter === "a"){
        state.win();
        state.chooseRandomWord();
    }
    if (letter == "s"){
        state.wrongGuess();
    }
}

function reset() {
    return {
        maxtrie: 10,
        chosenWord: chooseRandomWord()
    }
    };