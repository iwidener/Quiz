var startButton = document.getElementById("start");

var questionContainerElement = document.getElementById("question-container");

let shuffledQuestions;

let currentQuestionIndex = 0;

var questionElement = document.getElementById("questions");

var answerButtonElement = document.getElementById("answer-buttons");

document.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started");
    shuffledQuestions = questions.sort(() =>Math.random() - .5);
    questionContainerElement.classList.remove("hide");
    startButton.classList.add("hide");
    showQuestion();
}


function showQuestion(question) {
    questionElement.innerText = shuffledQuestions[currentQuestionIndex].title
}

function selectAnswer() {


}

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
        answer: "<script>"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onmouseover", "onchange", "onclick"],
        answer: "onclick"
    },
    {
        title: "How do you declare a Javascript variable?",
        choices: ["variable carName", "var carName", "v carName", "const carname"],
        answer: "var carName"
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "font", "styles", "style"],
        answer: "style"
    },
    {
        title: "Which CSS property is used to change the text color of an element?",
        choices: ["text-color", "color", "fgcolor", "font-color"],
        answer: "color"
    },
    {
        title: "Which CSS property controls the text size?",
        choices: ["font-style", "text-style", "text-size", "font-size"],
        answer: "font-size"
    },
  ];
  