let questions = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");

let questionsArr = [
  {
    question:
      "Considering best practice on Coding what is the best practice when defining a new variable?",
    answers: ["a. var", "b. let", "c. vrb"],
    correctAnswer: 1,
  },
  {
    question:
      "lorem ipsum",
    answers: ["a. var", "b. let", "c. vrb"],
    correctAnswer: 1,
  },
];

function renderQuestion() {
  for (let i = 0; i < questionsArr.length; i++) {
    let displayedQuestion = questionsArr[0][i];

    questions.textContent = displayedQuestion;

    let optionsButton = document.createElement("button");
    optionsButton.textContent = displayedQuestion.answers[0];
  }
}

// Questions contain buttons for each answer option.

// When an answer is clicked: 
// highlight the right answer
//add points if the student replied right;
//penalty time if the answer was wrong;
//move to the next question;


// The quiz should end when all questions are answered or the timer reaches 0.
// 4 questions
//calculates the score 
//student can then enter his initials
//higher scores page 


