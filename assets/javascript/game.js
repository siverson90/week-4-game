// ****Global Varibles****

var randomNum=0;
var wins=0;
var losses=0;
var cystalArr=[1,];

// ****Functions*****

//resets the game and calls randomNumGen && crystalRandonNum 
function initalizeGame(){
  cystalArr=[1];
  randomNum=0;
  randomNumGen();
  crystalRandomNum();
  console.log(randomNum);
  console.log(cystalArr);
}

// Generates random number between 1-12 and pushes to crystalArr
function crystalRandomNum(){
  for (var i = 0; i < 3; i++) {
    var num= Math.ceil(Math.random() * 12);
    cystalArr.push(num);
  }
}

// Generates random number that will be assigned to the user to guess
function randomNumGen(){
  randomNum= Math.ceil(Math.random()* (120-30)+ 30);
}

// ******MAIN GAME*******

initalizeGame();

