'use strict';

let guess = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let score = document.querySelector('.score');
let message = document.querySelector('.message');
let secretNumbertext = document.querySelector('.number');
let highscoreText = document.querySelector('.highscore');
let body = document.body;
let againbtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guessNumber;
let scorecard = 20;
let highscore = 0;

//console.log(secretNumber);
/********************* Incorrect number */

const incorrectNumber = function (secretNumber, guessNumber, scorecard) {
  console.log(secretNumber, guessNumber, scorecard);

  if (guessNumber !== secretNumber && guessNumber < secretNumber) {
    console.log('main if block');
    scorecard--;
    score.textContent = scorecard;
    if (scorecard === 0) {
      message.textContent = 'you lost';
      secretNumbertext.textContent = secretNumber;
      checkBtn.disabled = true;
    } else {
      message.textContent = 'Too low';
    }
  } else if (guessNumber !== secretNumber && guessNumber > secretNumber) {
    scorecard--;
    score.textContent = scorecard;
    if (scorecard === 0) {
      message.textContent = 'you lost';
      secretNumbertext.textContent = secretNumber;
      checkBtn.disabled = true;
    } else {
      message.textContent = 'Too high';
    }
  }
};

let check = checkBtn.addEventListener('click', function () {
  let guessNumber = Number(guess.value); // got the input value from the user using value and chnaged it to number

  if (guessNumber > 0 && guessNumber <= 20) {
    incorrectNumber(secretNumber, guessNumber, scorecard);
    /******************** Number is correct */

    if (guessNumber === secretNumber) {
      score.textContent = scorecard;
      secretNumbertext.textContent = secretNumber;
      message.textContent = 'YOU WON !!!!!!!!!!!!!!';
      checkBtn.disabled = true;
      body.style.backgroundColor = 'green';
      highscore = scorecard > highscore ? scorecard : highscore;
      highscoreText.textContent = highscore;
    }
  } else {
    message.textContent = 'PLEASE ENTER NUMBER BETWEEN 1 and 20';
  }
});

/**********************Clicking again button to play again */
let again = againbtn.addEventListener('click', function () {
  // console.log('again is clicked');
  guess.value = '';
  checkBtn.disabled = false;
  body.style.backgroundColor = '#222';
  scorecard = 20;
  score.textContent = scorecard;
  message.textContent = 'Start guessing.....';
  secretNumbertext.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
});
