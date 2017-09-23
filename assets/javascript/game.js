// ****Global Varibles****

var randomNum=0;
var wins=0;
var losses=0;
var crystalArr=[1];
var userCounter=0;

// ****Functions*****

//resets the game and calls randomNumGen && crystalRandonNum 
function initalizeGame(){
  crystalArr=[1];
  randomNum=0;
  userCounter=0;
  randomNumGen();
  crystalRandomNum();
  loop();
  console.log(randomNum);
  console.log(crystalArr);
}


// Generates random number that will be assigned to the user to guess
function randomNumGen(){
  randomNum= Math.ceil(Math.random()* (120-30)+ 30);
  $("#randNumber").text(randomNum);
}
// Generates random number between 1-12 and pushes to crystalArr
function crystalRandomNum(){
  for (var i = 0; i < 3; i++) {
    var num= Math.ceil(Math.random() * 12);
    crystalArr.push(num);
  }
}
// Takes number from array and assigns value to each image.
function loop(){
   for(var i = 0; i < crystalArr.length; i++){
   crystalArr[i] === $("#crystal-" + [i + 1]).attr("value",crystalArr[i]);
   }
}

// ******MAIN GAME*******

initalizeGame();

$(".crystal").on("click", function(){
  userSelectedValue= parseInt($(this).attr("value"));
  console.log(userSelectedValue);

  userCounter= userCounter + userSelectedValue;
  $("#countDisplay").text(userCounter);

  console.log(userCounter);

  if(userCounter===randomNum){
    wins++;
    $("#wins").text(wins)
    initalizeGame();
  }
  else if(userCounter > randomNum){
    losses++;
    $("#losses").text(losses)
    initalizeGame();
  }

});


