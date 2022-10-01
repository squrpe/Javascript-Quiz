var homeScreen = document.getElementsById("home-screen");
var startQuizBtn = document.getElementById("start-btn");
var highscoresBtn = document.getElementById("highscores-btn");

var quizDisplay = document.getElementById("quiz-content");

var timer = document.getElementById("timer");

var questionTitleDisplay = document.getElementById("question-title");
var btnA = document.getElementById("a-option");
var btnB = document.getElementById("b-option");
var btnC = document.getElementById("c-option");
var btnD = document.getElementById("d-option");

var highscoreScreen = document.getElementById("highscore-page");

var questionsIndex = questions.length;
var tempIndex = 0;

var secondsLeft = 60;

function generateQuestions(){

    if (tempIndex === questionsIndex) {
        return;
    }

    var displayedQuestion = questions[tempIndex];

    questionTitleDisplay.innerHTML = '<p>' + displayedQuestion.title + '</p>';

    btnA.innerHTML = displayedQuestion.a;
    btnB.innerHTML = displayedQuestion.b;
    btnC.innerHTML = displayedQuestion.c;
    btnD.innerHTML = displayedQuestion.d;
}

function startQuiz() {

    document.getElementById("home-screen").style.display = "none";

    /*generateQuestions();

    var timerInterval = setInterval(function() {

        secondsLeft--;
        timer.textContent = 'Time left: ' + secondsLeft;
    
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    
      }, 1000);*/

      /*quizDisplay.style.display = 'flex';*/

}

startQuizBtn.addEventListener("click", startQuiz);