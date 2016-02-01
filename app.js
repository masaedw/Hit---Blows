function startNewGame()
{
  // start new game
}

function challenge()
{
  // challenge
}

function giveUp()
{
  // give up
}

function printLog(msg)
{
  var log = document.getElementById("log");
  log.value = msg + "\n" + log.value;
}

function countHits(experiment, answer)
{
  var len = Math.min(experiment.length, answer.length);
  var c = 0;
  for (var i = 0; i < len; i++) {
    if (experiment[i] == answer[i]) {
      c++;
    }
  }
  return c;
}

function countBlows(experiment, answer)
{
  var c = 0;
  for (var i = 0; i < experiment.length; i++) {
    for (var j = 0; j < answer.length; j++) {
      if (experiment[i] == answer[j])
      {
        c++;
      }
    }
  }

  return c - countHits(experiment, answer);
}

// returns [0..len)
function randomIndex(len)
{
  return Math.floor(Math.random() * len);
}
