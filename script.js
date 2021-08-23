'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    displayMessage('😒 No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('😀 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;

    //When input is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? ' 📈Too High!' : ' 📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔You Loose');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //Reset random number
  secretNumber = Math.trunc(Math.random() * 21);

  document.querySelector('.number').textContent = '?';

  //Reset backgrund color
  document.querySelector('body').style.backgroundColor = '#222';

  //Reset width number
  document.querySelector('.number').style.width = '15rem';

  //Reset Guess number
  document.querySelector('.guess').value = '';

  //Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;

  //Reset Message
  displayMessage('Start guessing...');
});
