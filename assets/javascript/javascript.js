$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19);

  $('#randomNumber').text(Random);

  var num1 = Math.floor(Math.random() * 11 + 1);
  var num2 = Math.floor(Math.random() * 11 + 1);
  var num3 = Math.floor(Math.random() * 11 + 1);
  var num4 = Math.floor(Math.random() * 11 + 1);

  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  // when we rest the Game this will happend))
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  }
  //add it the wins
  function yay() {
    alert('((You won))!');
    wins++;
    $('#numberWins').text(wins);
    reset();
  }
  //addes it the losses to the usertotal
  function loser() {
    alert('You lose!');
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }
  //sets up the clicks
  $('#one').on('click', function() {
    userTotal = userTotal + num1;
    console.log('New userTotal= ' + userTotal);
    $('#finalTotal').text(userTotal);
    //now the conditions
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $('#two').on('click', function() {
    userTotal = userTotal + num2;
    console.log('New userTotal= ' + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $('#three').on('click', function() {
    userTotal = userTotal + num3;
    console.log('New userTotal= ' + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $('#four').on('click', function() {
    userTotal = userTotal + num4;
    console.log('New userTotal= ' + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
});
