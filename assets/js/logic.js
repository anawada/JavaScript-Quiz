let startButton = document.querySelector("#start");
let timerEl = document.querySelector("#time");
let startQuizEl = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");


// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", function(){

    timer();
    startQuiz();
    renderQuestion();

})

let lastQuestion; 
let initialTime = 300;
function timer() {

    let timeInterval = setInterval(function () {
      initialTime--;
      timerEl.textContent = initialTime;
      
      if(initialTime === 0 || lastQuestion) {
        clearInterval(timeInterval);
        gameOver()

        //create a function to open the score page
        displayScore();
      }
    }, 1000);
  };

  function startQuiz(){
    startQuizEl.setAttribute("class", "show");
  }

  function gameOver(){
    endScreen.setAttribute("class", "show");
    endScreen.children[1].span.textContent = finalScore;
  }
