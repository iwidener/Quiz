// variables to keep track of quiz state//
var currentQuestionIndex = 0;
var time = questions.length * 15;
var countdownId;


// var startButton = document.getElementById("start");

var questionContainerElement = document.getElementById("question-container");

// var resultsElement = document.getElementById("results");


// var shuffledQuestions;



// var shuffledChoices;

// var currentChoicesIndex = 0;

// variables to reference DOM elements
var questionsElement = document.getElementById("questions");
var countdownElement = document.getElementById("time");
// var answerElement = document.getElementById("choices");
// var answerButtonElement = document.getElementById("answer-buttons");
// var answerButton = document.getElementsByClassName("answer");
var choicesElement = document.getElementById("choices");
var initialsElement = document.getElementById("initials");
var messageElement = document.getElementById("message");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");


// var btn1 = document.getElementById("answer1");
// var btn2 = document.getElementById("answer2");
// var btn3 = document.getElementById("answer3");
// var btn4 = document.getElementById("answer4");


// var totalQuestions = questions.length;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// startButton.addEventListener("click", startQuiz);

// document.addEventListener("click", function (event) {
//     if (event.target.classList.contains("answer")) {
//         showAnswers(event)
//     }
// })

// resultsElement.remove("hide");

function startQuiz() {
    console.log("Start Quiz!")

    // hide start screen
    var instructionsContainerElement = document.getElementById("instructions-container");
    instructionsContainerElement.setAttribute("class", "hide");

    // unhide questions container
    questionContainerElement.removeAttribute("class");

    // start countdown
    // countdownId = setInterval(clockActive, 1000);

    // show starting time
    // countdownElement.textContent = time;

    // setTime();
    // shuffledQuestions = questions.sort(() => Math.random() - .5);


    // startButton.classList.add("hide");

    showQuestion();
    clockActive();
}

//totalQuestionsSpan.innerHTML = questions.length;

function showQuestion() {
    console.log(questions);
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update title with current question
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesElement.innerHTML = "";

    // Loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        // attach click event listener to eacg choice
        choiceNode.onclick = questionClick;

        //display on the page
        choicesElement.appendChild(choiceNode);
    });


    //questionNumberSpan.innerHTML = index+1;

    // questionsElement.innerText = questions[currentQuestionIndex].title;

    // btn1.innerHTML = questions[currentQuestionIndex].choices[0];
    // btn2.innerHTML = questions[currentQuestionIndex].choices[1];
    // btn3.innerHTML = questions[currentQuestionIndex].choices[2];
    // btn4.innerHTML = questions[currentQuestionIndex].choices[3];
}

function questionClick() {
    //check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        // display new time on page 
        countdownId.textContent = time;

        messageElement.textContent = "Wrong!";
    } else {
        messageElement.textContent = "Correct!";
    }
    // flash right/wrong message on page
    messageElement.setAttribute("class", "message");
    setTimeout(function () {
        messageElement.setAttribute("class", "message hide");
    }, 1000);
    // next question
    currentQuestionIndex++;

    //check if there are no more questions
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

// function showAnswers(event) {
//     var answer = event.target.innerText;
//     console.log(answer);
//     console.log(questions[currentQuestionIndex].answer);
//     if (answer === questions[currentQuestionIndex].answer) {
//         console.log("correctAnswer");
//         currentQuestionIndex++;
//         score += 15;
//         document.getElementById("message").innerHTML = "Correct!";
//         // showQuestion();

//     }
//     else {
//         (answer != questions[currentQuestionIndex].answer)
//         console.log("wrongAnswer");
//         currentQuestionIndex++;
//         document.getElementById("message").innerHTML = "Wrong!";
//         showQuestion();
//     }
// }

// function showResults(event) {
//     for (var i = 0; i < questions.length; i++) {
//         console.log("Quiz Over");
//         resultsElement.add("hide");
//         // questionContainerElement.remove("hide");
//         // startButton.classList.add("hide");
//     }
// }

function endQuiz() {
    // stop timer
    clearInterval(countdownId);

    // show end screen
    var resultsElement = document.getElementById("results");
    resultsElement.removeAttribute("class");

    // show final score
    var finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    // hide questions container
    questionContainerElement.setAttribute("class", "hide");
}

function clockActive() {
    countdownId = setInterval(function () {
        //  update time
        time--;
        countdownElement.textContent = time;

        //  check if user ran out of time
        if (time === 0) {
            endQuiz();
        }
    }, 1000);
}

function saveHighscore() {
    // get value of input box
    var initials = initialsElement.value.trim();

    // to make sure valuer wasn't empty
    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        // new score object
        var newScore = {
            score: time,
            initials: initials
        };

        // to save to local storage
        highscores.push(newScore);
        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsElement.onkeyup = checkForEnter;

//Countdown//
// var countdownElement = document.querySelector(".countdown");
// var mainElement = document.getElementById("#main");
// countdownElement.textContent = "Time: 0";

// var secondsLeft = 150;
// var timerInterval;
// function setTime() {
//     timerInterval = setInterval(function () {
//         time--;
//         countdownElement.textContent = time;

//         if (time === 0) {
//             clearInterval(timerInterval);
//         }

//     }, 1000);
// }
