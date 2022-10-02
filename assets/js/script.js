var homeScreen = document.getElementById("home-screen");
var startQuizBtn = document.getElementById("start-btn");
var highscoresBtn = document.getElementById("highscores-btn");
var submitBtn = document.getElementById("finish-btn");
var playAgainBtn = document.getElementById("playagain-btn");

var quizDisplay = document.getElementById("quiz-content");
var timer = document.getElementById("timer");

var questionTitleDisplay = document.getElementById("question-title");
var btnA = document.getElementById("a-option");
var btnB = document.getElementById("b-option");
var btnC = document.getElementById("c-option");
var btnD = document.getElementById("d-option");

var scorePage = document.getElementById("score-input");
var nameInput = document.getElementById("initials");
var finalScore = document.getElementById("score");

var highscoreScreen = document.getElementById("highscore-page");
var highscoreName = document.getElementById("user-initials");
var highscoreScore = document.getElementById("user-score");

var questionsIndex = questions.length;
var tempIndex = 0;
var total = 0;
var correctAnswer;

var timerInterval;
var totalSeconds = 60;
var secsElapsed = 0;
var scoreSeconds = 0;
var secondsLeft = totalSeconds;

function generateQuestions(){

    if (tempIndex === questionsIndex) {
        return inputScore();
    }

    var displayedQuestion = questions[tempIndex];

    questionTitleDisplay.innerHTML = '<p>' + displayedQuestion.title + '</p>';

    btnA.innerHTML = displayedQuestion.a;
    btnB.innerHTML = displayedQuestion.b;
    btnC.innerHTML = displayedQuestion.c;
    btnD.innerHTML = displayedQuestion.d;
}

function startQuiz() {

    homeScreen.style.display = 'none';

    generateQuestions();

    timerInterval = setInterval(function() {

        totalSeconds--;
        secsElapsed++;
        timer.textContent = 'Time left: ' + totalSeconds;
    
        if(totalSeconds === 0) {
            clearInterval(timerInterval);
            inputScore();
        }
      }, 1000);

    quizDisplay.style.display = 'flex';

}

function inputScore() {
    quizDisplay.style.display = 'none';
    scorePage.style.display = 'flex';

    clearInterval(timerInterval);

    nameInput.value = '';

    finalScore.textContent = "You got " + total + " questions correct, out of " + questions.length + ".";

    scoreSeconds = secondsLeft - secsElapsed;
    console.log(scoreSeconds);
}

submitBtn.addEventListener("click", function inputHighscore(){

    // Unfinished

    /*if (nameInput.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var currentUser = nameInput.value.trim();

        var currentHighscore = {
            name: currentUser,
            score: total
        };

        var highscoreStorage = JSON.parse(localstorage.getItem("highscoreStorage"));

        scorePage.style.display = 'none';
        highscoreScreen.style.display = 'flex';

        highscoreStorage.push(currentHighscore);
        localStorage.setItem("highscoreStorage", JSON.stringify(highscoreStorage));

        generateHighscores();

    }*/

    scorePage.style.display = 'none';
    highscoreScreen.style.display = 'flex';
    generateHighscores();
});

function savedHighscores() {
    var highscoreObject = {
        id: nameInput,
        finalScore: score,
    }

    // Unfinished

}

function storeHighScore() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}


function generateHighscores() {

    highscoreName.innerHTML = "";
    highscoreScore.innerHTML = "";

    for (i = 0; i < highscores.length; i++) {
        var nameTemp = document.createElement("li");
        var scoreTemp = document.createElement("li");

        nameTemp.textContent = highscores[i].name;
        scoreTemp.textContent = highscores[i].score;

        highscoreName.appendChild(nameTemp);
        highscoreScore.appendChild(scoreTemp);

        // Unfinished
    }
    
}

function viewHighscores() {

    homeScreen.style.display = 'none';
    quizDisplay.style.display = 'none';
    scorePage.style.display = 'none';
    highscoreScreen.style.display = 'flex';

    generateHighscores();
}

function checkAnswer(ans) {
    correctAnswer = questions[tempIndex].answer;

    if (ans === correctAnswer && tempIndex !== questionsIndex) {
        total++;
        tempIndex++;
        generateQuestions();
    } else if (ans !== correctAnswer && tempIndex !== questionsIndex) {
        tempIndex++;
        totalSeconds = totalSeconds - 15;
        generateQuestions();
    } else {
        inputScore();
    }
}

function playAgain() {
    highscoreScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
}

startQuizBtn.addEventListener("click", startQuiz);