'use strict';
console.log();
let score = 20;
let highscore = 99;
let randomNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  let value = Number(document.querySelector('.guess').value);
  if (value) {
    if (value === randomNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60B347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      let attempNumber = 20 - score;
      console.log(` ${attempNumber}`);
      if (attempNumber < highscore) {
        highscore = attempNumber;
        console.log(
          ` Highscore is ${highscore} and attempt number is ${attempNumber}`
        );
        document.querySelector('.highscore').textContent = attempNumber;
      }

      document.querySelector('.highscore');
    } else if (value < randomNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📉 Too Low!';
      } else {
        document.querySelector('.message').textContent =
          '💣 💥 You lost the game!';
      }
    } else if (value > randomNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📈 Too High!';
      } else {
        document.querySelector('.message').textContent =
          '💣 💥 You lost the game!';
      }
    }
  } else {
    document.querySelector('.message').textContent = 'No Number';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  if (highscore == 0) {
    highscore = 20;
  }
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
