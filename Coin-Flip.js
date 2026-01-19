function coinFlip(){
  const randomNumber = Math.random();
  let coinside = '';
  if (randomNumber < 0.5) {
  coinside = 'HEADS';
  alert(`You flipped ${coinside}`);
  } else {
  coinside = 'TAILS';
  alert(`You flipped ${coinside}`);
  }
  }
  const score = JSON.parse(localStorage.getItem('score')) || {
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

  localStorage.setItem('score', JSON.stringify(score));

  alert(`${result} The coin landed on ${coinside}. You guessed ${userGuess}.
  Wins: ${score.wins}, Losses: ${score.losses}`) ;
}
