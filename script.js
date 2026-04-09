let xp = 0;
function addXP(){ xp += 10; document.getElementById('xpValue').innerText = 'XP: ' + xp; }
function removeXP(){ xp -= 5; document.getElementById('xpValue').innerText = 'XP: ' + xp; }

let score = 0;
function quiz(correct){
  if(correct) score++;
  document.getElementById('quizResult').innerText = 'Pontuação: ' + score;
}

function show(text){
  document.getElementById('details').innerText = text;
}