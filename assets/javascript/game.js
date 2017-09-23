// ****Global Varibles****

var randomNum=0;
var wins=0;
var losses=0;
var crystalArr=[1];

// ****Functions*****

//resets the game and calls randomNumGen && crystalRandonNum 
function initalizeGame(){
  crystalArr=[1];
  randomNum=0;
  randomNumGen();
  crystalRandomNum();
  assignCrystal();
  console.log(randomNum);
  console.log(crystalArr);
}


// Generates random number that will be assigned to the user to guess
function randomNumGen(){
  randomNum= Math.ceil(Math.random()* (120-30)+ 30);
}
// Generates random number between 1-12 and pushes to crystalArr
function crystalRandomNum(){
  for (var i = 0; i < 3; i++) {
    var num= Math.ceil(Math.random() * 12);
    crystalArr.push(num);
  }
}

function assignCrystal(){
 crystalArr[0] === $("#crystal-1").attr("value", crystalArr[0]);
 crystalArr[1] === $("#crystal-2").attr("value", crystalArr[1]);
 crystalArr[2] === $("#crystal-3").attr("value", crystalArr[2]);
 crystalArr[3] === $("#crystal-4").attr("value", crystalArr[3]);
}

// ******MAIN GAME*******

initalizeGame();

