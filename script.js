'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//AGAIN BUTTON - RESET
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

 displayMessage('Comeza a adiviñar...') ;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = ' 15rem ';

  document.querySelector('.guess').value = '';
});

//CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no input
  if (!guess)displayMessage( '📛 Non hai numero!');

  //When player wins
  if (guess === secretNumber) {
   displayMessage('🎉 Numero correcto!')  ;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = ' 30rem ';

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }

  //When guess is wrong
  if (guess !== secretNumber) {
    if (score > 1) {
     displayMessage( guess > secretNumber ? '📈 Moi alto!' : '📉 Moi baixo!') ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage() = '👺You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
  // When is to high
  if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👺You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When to low
  if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👺You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
