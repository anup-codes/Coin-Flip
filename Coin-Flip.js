let result = '' ;
function coinFlip(){
  const randomNumber = Math.random();
  let RandCoinside = '';
  if (randomNumber < 0.5) {
 RandCoinside = 'HEADS';
  }
 else {
  RandCoinside = 'TAILS';
}
document.querySelector('.js-result').innerHTML = RandCoinside ;
}
  const score = {
  wins: 0,
  losses: 0 
}

function Guess(userGuess) {

  const randomNumber = Math.random();
  let coinside = '';
  if (randomNumber < 0.5) {
  coinside = 'HEADS';
  } else {
  coinside= 'TAILS';
  }
  let result = '';
  if (userGuess === coinside) {
  result = 'You guessed right!';
  } else {
  result = 'Sorry, wrong guess!';
  }

  if( result === 'You guessed right!'){
  score.wins += 1 ;
  } else {
  score.losses += 1;
  }

  // localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-guess').innerText =
  `
  ${result}
  your choice ${userGuess}
  and 
  computer choice ${coinside}

  wins : ${score.wins} 
  losses : ${score.losses}
  `;
}

window.addEventListener('keydown', (event) => {
if (event.key === ' '){
  coinFlip();
}
else if (event.key === 'h'){
  Guess('HEADS');
}
else if (event.key === 't'){
  Guess('TAILS');
}
});

document.querySelector('.js-head-button').addEventListener('click', () => {
Guess('HEADS');
});
document.querySelector('.js-tail-button').addEventListener('click', () => {
Guess('TAILS');
});

document.querySelector('.js-flip-button').addEventListener('click', () => {
 coinFlip();
});