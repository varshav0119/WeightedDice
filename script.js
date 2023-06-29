var dice = document.querySelector("#dice");
var luckPoints = 0;

// Subtract 20 points to make user lucky (by increasing luck points)
// The button disappears after use (user can only purchase luck once)
var spendButton = document.querySelector('#spend');
spendButton.onclick = function() {
  luckPoints += 1;
  document.querySelector('#luck').innerHTML = "Yes";
  document.querySelector('#points').innerHTML = parseInt(document.querySelector('#points').innerHTML) - 20;
  document.querySelector('#spend').style.visibility='hidden';
};

// Roll dice and make changes to points
var rollButton = document.querySelector('#roll');
rollButton.onclick = function() {

  var randomDiceValue = Math.floor((Math.random() * 6) + 1);

  for (var i = 1; i <= 6; i++) {
    dice.classList.remove('show-' + i);
    if (randomDiceValue === i) {
      dice.classList.add('show-' + i);
    }
  }

  setTimeout(function() {
    // Obtain base random number based on whether user is lucky
    var baseRandomNumber = Math.pow(Math.random(), luckPoints + 1);
    console.log(baseRandomNumber);
    // Round the random number to nearest integer (0 or 1)
    // If user is lucky, this number is much more likely to be
    // rounded to 0
    var randomAction = Math.round(baseRandomNumber);
    var points = randomDiceValue;
    // if 1 then reduce points
    if(randomAction === 1) {
      document.querySelector('#emoji').innerHTML = "😔";
      points *= -1;
    // if 0 then increase points
    } else {
      document.querySelector('#emoji').innerHTML = "😺";
    }
    document.querySelector('#points').innerHTML = parseInt(document.querySelector('#points').innerHTML) + points;
  }, 1000);
};


