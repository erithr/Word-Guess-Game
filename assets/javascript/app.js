//Variables

var asterisksWord = "";
var asterisksWordArr = [];
var state = {
    words: ["HELLO",
    "HI",
    "ESCAPE",
    "TRANSIT"],
    maxtries: 10,
    wins: 0,
    wordArr: [],
    winSpan : document.getElementById("totalWins"),
    asteriskSpan : document.getElementById("asterisks"),
    triesSpan : document.getElementById("tries"),

    win: function(){
        alert("You win!");
        this.wins = this.wins +1;
        state.winSpan.innerText = state.wins;
    },
    chooseRandomWord: function(){
        for (var i = 0; i < random.length; i++) {
            asterisksWordArr[i] = "*";
            state.asteriskSpan.innerText = asterisksWordArr.join("");
        }},
        gameStart: function(){
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

    },

    roundSet: function() {
       this.chooseRandomWord();
        state.asteriskSpan.innerText = asterisksWord;
            
        this.triesSpan.innerHTML = state.maxtries;

    },

    letterCheck: function(){
        console.log(input);
        console.log(this.wordArr);
        for (var i = 0; i <this.wordArr.length; i++){
            if (input === this.wordArr[i]){
                asterisksWordArr[i]= this.wordArr[i];
                console.log(asterisksWordArr);
                this.asteriskSpan.innerText= asterisksWordArr;
            }
        }
    }
};
var random = state.words[Math.floor(Math.random()*state.words.length)];
console.log(random);
state.wordArr = random.split("");
//Functions
function updateScore(){
};

//Game Logic
var input = "";

document.onkeyup = function(event){
    var letters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    input = event.key.toUpperCase();
//game start logic 
    if (input === "1" ){
        state.gameStart();
        console.log();
    }

    if (letters.indexOf(input) === -1){
        alert("Pick a letter");
        
    }   else {
        state.letterCheck();

    }
    if (input == letters){
        state.wrongGuess();
    }

    if (this.getElementById("tries") === "0"){
        state.roundSet();
    }
}

// function reset() {
//     return {
//         maxtrie: 10,
//         chosenWord: chooseRandomWord()
//     }
//     };