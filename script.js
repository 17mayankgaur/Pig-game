'use strict';
//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('score--0');
const current1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

score0.textContent = 0;
score1.textContent = 0;
let play = true;

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function() {
  if (play) {
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (play) {
    score[activePlayer] += currentScore;
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    if (score[activePlayer] >= 100) {
      play = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    switchPlayer();
  }
});

btnNew.addEventListener('click',function(){
  location.reload();
});
