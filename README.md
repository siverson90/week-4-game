# week-4-game

Game set-up:
1. Game starts with a score randomly generated and is placed in a div. Range 30-120. DONE

A. Start game with an function Intialize, function:
  - randomly generate number (function all to number generator)
  - randomly assign values to 4 images. DONE
    - use a for loop to iterate through length of array and generate four values (hard code for loop length 4) and each time push to image ARRAY.DONE 
  - clear userScore

  Show text with jQuery handles: classes and IDs. 


2. Game also starts with Wins 0 and Losses 0. 4 images are rendered  and total user score is showing zero.

3. Each cystal generates a value but is unknown to the user.

B. Give each crystal a separate ID and pass in value from array. Ex. $(#cystal-1) === cystalArr[0] | h crystal a separate ID and pass in value from array. Ex. $(#cystal-2) === cystalArr[1]

Use .this syntax to create a variable scoped within each cystal on.click for reference


Playing the game:

4. Game starts when user clicks on an image.

on click event of image
- local var created to assign value from array to value of the cystal.
- render display FUNC


5. when user clicks on image; the value assigned to that specific image will update the total users score.

-increase GLOBAL variable by value ammount

6. Each cystal will have 4 differnt values (make sure crystal will always have 1). Range of 1-12


Finishing the game:

7. If user total score equals the start score than user is how a message of "you win" and 1 point is added to the users Wins: display.

Create conditional function that is invoked within each cystal on.click 

Condiation will see 
IF userScore === computerScore (user wins & invoke inialize FUNC)
Else if - userScore > computerScore (user loses & invoke initalize FUNC)
Else- null.

8. When play wins, a new random number is generated and rendered to screen.

9. After winning or loosing, reset user score, random number and reassign values to the images.

Create initalize FUNC



