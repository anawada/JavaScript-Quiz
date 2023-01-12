let startButton = document.querySelector("#start");
let timerEl = document.querySelector("#time");

startButton.addEventListener("click", function(){

})

function timer() {
    let timeLeft = 300;
  
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
      
      if(timeLeft === 0) {
        clearInterval(timeInterval);
        //create a function to open the score page and 
        displayScore();
      }
    }, 1000);
  }

  timer();
  

// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.

// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability 
// to save their initials and their score


