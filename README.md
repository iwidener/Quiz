# Quiz

### As a coding bootcamp student <br>
### I want to take a timed quiz on JavaScript fundamentals that stores high scores <br>
### so that I can gauge my progress compared to my peers. <br>

## Table of Contents
- [Title](#Quiz)
- [Description](#Description)
- [Demo](#Demo)
- [Technologies](#Technologies)
- [Deployment](#Deployment)
- [Other](#Other)

## Description
* The main page of this app is presented with instructions for taking a quiz, "Start Quiz" button, "View Highscores" link that navigates to the last page, and timer set up at 0.
* By clicking the "Start Quiz" button, the user will be given a series of questions. The timer is initialized with a value and immediately begins countdown. 
* Only 10 questions are included into this app and they cover JavaScript, HTML, and CSS topics. Time value for 10 questions is equal 150 seconds, that is 15 seconds for a question.
* Rules of score calculation:
1. Answering quickly and correctly results in a higher score.
2. Answering incorrectly results in a time penalty (15 seconds are subtracted from time remaining).
* When the user answers all the questions or time runs out, the next page will show the final score and prompts to enter the initials into the input box (minimum 3 letters). When the initials are entered and the "Submit" button is clicked, then the final score is stored in Local Storage and shown on Highscores page.
* The user can start this quiz again by clicking "Go Back" button and storing another score on Highscores page. As well, the user can delete the scores by clicking "Clear Highscores" button.
* The application is responsive and it adapts to multiple screen sizes.

## Demo 
![Alt Text](https://media.giphy.com/media/lRWxC3xpDOGrujo6hA/giphy.gif)

## Technologies
* JavaScript
* HTML
* CSS
* Local Storage

## Deployment
GitHub Pages: https://iwidener.github.io/Quiz/

## Other
* The pattern for background is downloaded from www.subtlepatterns.com 
* The questions for quiz are taken from https://www.w3schools.com/
