var startButton = document.getElementById("start");

var questionContainerElement = document.getElementById("question-container");

var instructionsContainerElement = document.getElementById("instructions-container");

var resultsElement = document.getElementById("results");


let shuffledQuestions;

let currentQuestionIndex = 0;

let shuffledChoices;

let currentChoicesIndex = 0;


var questionElement = document.getElementById("questions");

var answerElement = document.getElementById("choices");

var answerButtonElement = document.getElementById("answer-buttons");

var answerButton = document.getElementsByClassName("answer")


var btn1 = document.getElementById("answer1");
var btn2 = document.getElementById("answer2");
var btn3 = document.getElementById("answer3");
var btn4 = document.getElementById("answer4");


var totalQuestions = questions.length;

startButton.addEventListener("click", startQuiz);

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("answer")) {
        showAnswers(event)
    }
})

resultsElement.remove("hide");

function startQuiz() {

    console.log("Started");

    setTime();

    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionContainerElement.classList.remove("hide");
    instructionsContainerElement.remove("hide");
    startButton.classList.add("hide");

    showQuestion();

    // var choices = questions.getElementById(title).choices;
    // for (var i = 0; i < choices.length; i++) {
    //     var element = document.getElementById("answer" + i);
    //    element.innerHTML = answer[i];
    //  }

}

//totalQuestionsSpan.innerHTML = questions.length;

function showQuestion() {
    console.log(questions.title);

    //questionNumberSpan.innerHTML = index+1;

    questionElement.innerText = questions[currentQuestionIndex].title;

    btn1.innerHTML = questions[currentQuestionIndex].choices[0];
    btn2.innerHTML = questions[currentQuestionIndex].choices[1];
    btn3.innerHTML = questions[currentQuestionIndex].choices[2];
    btn4.innerHTML = questions[currentQuestionIndex].choices[3];
}

function showAnswers(event) {
    var answer = event.target.innerText;
    console.log(answer);
    console.log(questions[currentQuestionIndex].answer);
    if (answer === questions[currentQuestionIndex].answer) {
        console.log("correctAnswer");
        currentQuestionIndex++;
        score += 15;
        document.getElementById("message").innerHTML = "Correct!";
        showQuestion();

    }
    else {
        (answer != questions[currentQuestionIndex].answer)
        console.log("wrongAnswer");
        currentQuestionIndex++;
        document.getElementById("message").innerHTML = "Wrong!";
        showQuestion();
    }
}

function showResults(event) {
   for (var i = 0; i < questions.length; i++) {
        console.log("Quiz Over");
        resultsElement.add("hide");
        //questionContainerElement.remove("hide");
        //startButton.classList.add("hide");
    }
}

//Countdown//
var countdownElement = document.querySelector(".countdown");
var mainElement = document.getElementById("#main");
countdownElement.textContent = "Time: 0";

var secondsLeft = 150;
var timerInterval;
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        countdownElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

//Score//
var score = 0;
var questionTime = 15;
var totalTime = 150;
var penalty = totalTime - questionTime;



