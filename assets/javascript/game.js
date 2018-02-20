//Pseudocoding for Crystal Collector
//Game Rules: Guess number that add up to the random number shown
//Need 4 Crystals with a value between 1-12
//Everytime clicked points are added to total score/amount revealed onClick
//Need random number generator for Game Start - number should be between 19-120
//Player wins if player total matched random number
//When win/loss - restart game with new random number, crystal values hidden, and updated wins and losses


//-----Variables-----

//Crystal Scores
var purpleCrystal   = 0;
var blueCrystal     = 0;
var whiteCrystal    = 0;
var greenCrystal    = 0;

//Score
var yourScore   = 0;
var gameScore   = 0;

//Wins/Losses
var winCounter  = 0;
var lossCounter = 0;

//-----Functions-----

//Set Random number gererator function for game score and crystals

var randomNum = function ( min,max){
    return Math.floor ( Math.random () * (max - min + 1)) + min;
}

//--Function Start Game--

function startGame(){

//--Function Reset--

//Set yourScore to 0
var yourScore   = 0;

//Set to number between (19-120)
gameScore       = randomNum(19,120);

//set crystals to number between (1-12)              
purpleCrystal   = randomNum(1,12);
blueCrystal     = randomNum(1,12);
whiteCrystal    = randomNum(1,12);
greenCrystal    = randomNum(1,12);


//console.log RandomNum
console.log("test");
console.log(yourScore);
console.log(purpleCrystal + blueCrystal + whiteCrystal + greenCrystal);
}

//HTML








//Crystal Clicks
$("#purple") .click(function(){
    alert("testpurple");
});

$("#blue") .click(function(){
    alert("testblue");
});

$("#white") .click(function(){
    alert("testwhite");
});

$("#green") .click(function(){
    alert("testgreen");
});









//GameScore

//-----Process-----
startGame(); {


}

