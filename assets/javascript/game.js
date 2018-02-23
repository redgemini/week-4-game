//Pseudocoding for Crystal Collector
//Game Rules: Guess number that add up to the random number shown
//Need 4 Crystals with a value between 1-12
//Everytime clicked points are added to total score/amount revealed onClick
//Need random number generator for Game Start - number should be between 19-120
//Player wins if player total matched random number
//When win/loss - restart game with new random number, crystal values hidden, and updated wins and losses
// Resource to create array for crystal addition and function - for, for-in and forEach (Const)
        //http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#closures

//-----Variables-----

//Crystal Scores
var purpleCrystal   = "0";
var blueCrystal     = "0";
var whiteCrystal    = "0";
var greenCrystal    = "0";

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

//Set yourScore
yourScore   = 0;

//Set target to number between (19-120)
gameScore       = randomNum(19,120);

//set crystals to number between (1-12)              
purpleCrystal   = randomNum(1,12);
blueCrystal     = randomNum(1,12);
whiteCrystal    = randomNum(1,12);
greenCrystal    = randomNum(1,12);

//HTML
$(".gameScore").html(gameScore);
$(".yourScore").html(yourScore);

//--Console.log Test--
console.log(gameScore);
console.log("Purple" + purpleCrystal);
console.log("Blue" + blueCrystal);
console.log("White" + whiteCrystal);
console.log("green" + greenCrystal);
}
//Crystal Clicks/Your Score

//Purple Click
$("#purple").click(function(){
yourScore += purpleCrystal;
$(".yourScore").html(yourScore);

if (yourScore === gameScore) {
  $(".yourScore").html("  YOU WIN!!!");

  //Update Win Counter
  winCounter++;

  //Console.log/Test
  alert("You Win");
  console.log("You Win");

  //Update Win Counter
  $(".winCounter").html(winCounter);

  //if Win...Restart game
  startGame();

} else if (yourScore > gameScore) {
  $(".yourScore").html(yourScore + "  Oh No! You Lose! Try Again!");

  //Console.log/Test
  alert("You Lose");
  console.log("You Lose");

  //Update Loss counter
  lossCounter++;

  //Update loss count
  $(".lossCounter").html(lossCounter);

  //if Loss...Restart game
  startGame();
} 

});

$("#blue").click(function() {
  yourScore += blueCrystal;
  $(".yourScore").html(yourScore);

  if (yourScore === gameScore) {
    $(".yourScore").html("  YOU WIN!!!");

    //Update Win Counter
    winCounter++;

    //Console.log/Test
    alert("You Win");
    console.log("You Win");

    //Update Win Counter
    $(".winCounter").html(winCounter);

    //if Win...Restart game
    startGame();
  } else if (yourScore > gameScore) {
    $(".yourScore").html(yourScore + "  Oh No! You Lose! Try Again!");

    //Console.log/Test
    alert("You Lose");
    console.log("You Lose");

    //Update Loss counter
    lossCounter++;

    //Update loss count
    $(".lossCounter").html(lossCounter);

    //if Loss...Restart game
    startGame();
  }
});

$("#white").click(function() {
  yourScore += whiteCrystal;
  $(".yourScore").html(yourScore);

  if (yourScore === gameScore) {
    $(".yourScore").html("  YOU WIN!!!");

    //Update Win Counter
    winCounter++;

    //Console.log/Test
    alert("You Win");
    console.log("You Win");

    //Update Win Counter
    $(".winCounter").html(winCounter);

    //if Win...Restart game
    startGame();
  } else if (yourScore > gameScore) {
    $(".yourScore").html(yourScore + "  Oh No! You Lose! Try Again!");

    //Console.log/Test
    alert("You Lose");
    console.log("You Lose");

    //Update Loss counter
    lossCounter++;

    //Update loss count
    $(".lossCounter").html(lossCounter);

    //if Loss...Restart game
    startGame();
  }
});

$("#green").click(function() {
  yourScore += greenCrystal;
  $(".yourScore").html(yourScore);

  if (yourScore === gameScore) {
    $(".yourScore").html("  YOU WIN!!!");

    //Update Win Counter
    winCounter++;

    //Console.log/Test
    alert("You Win");
    console.log("You Win");

    //Update Win Counter
    $(".winCounter").html(winCounter);

    //if Win...Restart game
    startGame();
  } else if (yourScore > gameScore) {
    $(".yourScore").html(yourScore + "  Oh No! You Lose! Try Again!");

    //Console.log/Test
    alert("You Lose");
    console.log("You Lose");

    //Update Loss counter
    lossCounter++;

    //Update loss count
    $(".lossCounter").html(lossCounter);

    //if Loss...Restart game
    startGame();
  }
});

//-----Process-----
startGame();

//Questions for TAs
//how to link the randomNum of Crystals to yourScore
//$('.img-class').attr('src', '/path/to/new/img');
//Creating object for crystals
