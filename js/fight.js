var enemyCell = document.getElementById('fighting').getElementsByTagName('td');
var enemyArray = [];
var moveEnemy;
var timeTick = 0;
var delayTime = 2;
var minonsCount = 0;
var deadMinons = 0;
var totalMinons = 25;
var hitPoints = 5;
var totalhitPoints = 5;
var attack = false;
var nearU = false, nearL = false, nearR = false, nearD = false;  // player threatened from direction
var enemySymbol = "&#164;";

function setupFight() {  // this allows it to reset if they fail
  for (var i=0; i<16; i++){
    enemyArray[i] = false; 
  }
  for (var j=0; j<81; j++){
    enemyCell[j].innerHTML = "";     
  }  
  minonsCount = 0;
  deadMinons = 0;
  hitPoints = 5;
  timeTick = 0;  
  document.getElementById("playerX").innerHTML = 	"&uArr;";
}
setupFight();

function startFight() {  
  attack = true;    
  console.log('fight')
  document.getElementById("storyBox").style.visibility = 'collapse';
  document.getElementById("continue").style.visibility = 'collapse'; 
  document.getElementById("fighting").style.visibility = 'visible';
  document.getElementById("fightstats").style.visibility = 'visible';
  document.getElementById("fightalert").innerHTML = "Use spacebar to hit!"
  document.getElementById("howto").innerHTML = instructTwo;
  document.getElementById("minons").innerHTML = "Minons: " + (totalMinons-deadMinons) + "/" + totalMinons;
  document.getElementById("hit").innerHTML = "Hit Points: " + hitPoints + "/" + totalhitPoints;
  moveEnemy = window.setInterval(moveMinons, 1000);
}


function moveMinons() {  // called here in startFight()
  // Wait a tiny bit before starting
  if (timeTick > delayTime) {
    document.getElementById("fightalert").style.visibility = "hidden";

    // Damage player
    if (attack == true)
      hitPlayer();
    
    // Top - Move any existing minons if there is room
    if  (enemyArray[3] == false){  // cell 31 empty
      // closest ones first   (make sure they stay red and large)
      if (enemyArray[2] == true){
        enemyCell[22].innerHTML = "";
        enemyArray[2] = false;
        enemyCell[31].innerHTML = enemySymbol;
        enemyArray[3] = true;
        enemyCell[31].style.color = "red";
        enemyCell[31].style.fontSize = "28px";
      }
      // middle distance ones next
      if (enemyArray[1] == true){
        enemyCell[13].innerHTML = "";
        enemyArray[1] = false;
        enemyCell[22].innerHTML = enemySymbol;
        enemyArray[2] = true;
      }
      // furthest out ones last
      if (enemyArray[0] == true){
        enemyCell[4].innerHTML = "";
        enemyArray[0] = false;
        enemyCell[13].innerHTML = enemySymbol;
        enemyArray[1] = true;
      }
    }
    // Left - Move any existing minons if there is room
    if  (enemyArray[7] == false){  // cell 39 empty
      if (enemyArray[6] == true){
        enemyCell[38].innerHTML = "";
        enemyArray[6] = false;
        enemyCell[39].innerHTML = enemySymbol;
        enemyArray[7] = true;
        enemyCell[39].style.color = "red";
        enemyCell[39].style.fontSize = "28px";
      }
      if (enemyArray[5] == true){
        enemyCell[37].innerHTML = "";
        enemyArray[5] = false;
        enemyCell[38].innerHTML = enemySymbol;
        enemyArray[6] = true;
      }
      if (enemyArray[4] == true){
        enemyCell[36].innerHTML = "";
        enemyArray[4] = false;
        enemyCell[37].innerHTML = enemySymbol;
        enemyArray[5] = true;
      }
    }
    // Right - Move any existing minons if there is room
    if  (enemyArray[8] == false){
      if (enemyArray[9] == true){
        enemyCell[42].innerHTML = "";
        enemyArray[9] = false;
        enemyCell[41].innerHTML = enemySymbol;
        enemyArray[8] = true;
        enemyCell[41].style.color = "red";
        enemyCell[41].style.fontSize = "28px";
      }
      if (enemyArray[10] == true){
        enemyCell[43].innerHTML = "";
        enemyArray[10] = false;
        enemyCell[42].innerHTML = enemySymbol;
        enemyArray[9] = true;
      }
      if (enemyArray[11] == true){
        enemyCell[44].innerHTML = "";
        enemyArray[11] = false;
        enemyCell[43].innerHTML = enemySymbol;
        enemyArray[10] = true;
      }
    }
    // Bottom - Move any existing minons if there is room
    if  (enemyArray[12] == false){
      if (enemyArray[13] == true){
        enemyCell[58].innerHTML = "";  
        enemyArray[13] = false;
        enemyCell[49].innerHTML = enemySymbol;
        enemyArray[12] = true;
        enemyCell[49].style.color = "red";
        enemyCell[49].style.fontSize = "28px";
      }  
      if (enemyArray[14] == true){
        enemyCell[67].innerHTML = "";
        enemyArray[14] = false;
        enemyCell[58].innerHTML = enemySymbol;
        enemyArray[13] = true;
      }    
      if (enemyArray[15] == true){
        enemyCell[76].innerHTML = "";
        enemyArray[15] = false;
        enemyCell[67].innerHTML = enemySymbol;
        enemyArray[14] = true;
      }
    }
    
    // Minons appear on the grid
    var addMinon = Math.floor(Math.random()*10);
    if (addMinon >= 1 && minonsCount < totalMinons) {
      minonsCount += 1;
      var placeMinon = Math.floor(Math.random()*4); 
      if (placeMinon == 0){
        enemyCell[4].innerHTML = enemySymbol;
        enemyArray[0] = true;
      } else if (placeMinon == 1){
        enemyCell[36].innerHTML = enemySymbol;
        enemyArray[4] = true;
      } else if (placeMinon == 2){
        enemyCell[44].innerHTML = enemySymbol;
        enemyArray[11] = true;
      } else if (placeMinon == 3){
        enemyCell[76].innerHTML = enemySymbol;
        enemyArray[15] = true;
      } 
    } 
  }
  timeTick += 1;
}


function playerHit() {    // called by keyboard.js when spacebar is pressed
  playerDir = document.getElementById("playerX").additional;
  if (playerDir == "u" & enemyArray[3] == true) {  
    enemyCell[31].innerHTML = "x";
    enemyCell[31].style.color = "black";
    enemyCell[31].style.fontSize = "22px";
    enemyArray[3] = false;
    deadMinons += 1;
  }  else if (playerDir == "l" & enemyArray[7] == true) {
    enemyCell[39].innerHTML = "x";
    enemyCell[39].style.color = "black";
    enemyCell[39].style.fontSize = "22px";
    enemyArray[7] = false;
    deadMinons += 1;
  } else if (playerDir == "r" & enemyArray[8] == true) {
    enemyCell[41].innerHTML = "x";
    enemyCell[41].style.color = "black";
    enemyCell[41].style.fontSize = "22px";
    enemyArray[8] = false;
    deadMinons += 1;
  } else if (playerDir == "d" & enemyArray[12] == true) {
    enemyCell[49].innerHTML = "x";
    enemyCell[49].style.color = "black";
    enemyCell[49].style.fontSize = "22px";
    enemyArray[12] = false;
    deadMinons += 1;
  }

  document.getElementById("minons").innerHTML = "Minons: " + (totalMinons-deadMinons) + "/" + totalMinons;
  if (deadMinons >= totalMinons){
    playerWin();
  }
}


function hitPlayer(){
  if (enemyArray[3] == true) {    
    if (nearU == true){
      hitPoints -= 1;
      nearU = false 
    } else {
      nearU = true;
    }    
  } 
  if (enemyArray[7] == true) {
    if (nearL == true){
      hitPoints -= 1;
      nearL = false
    } else {
      nearL = true;
    } 
  }
  if (enemyArray[8] == true) {
    if (nearR == true){
      hitPoints -= 1;
      nearR = false
    } else {
      nearR = true;
    }  
  }
  if (enemyArray[12] == true) {
    if (nearD == true){
      hitPoints -= 1;
      nearD = false
    } else {
      nearD = true;
    } 
  }
  
  document.getElementById("hit").innerHTML = "Hit Points: " + hitPoints + "/" + totalhitPoints;

  if (hitPoints < 1)  {
    playerCaptured();
  }  
}


function playerWin() {
  attack = false;
  clearInterval(moveEnemy);
  document.getElementById("fighting").style.display = 'none';
  document.getElementById("fightstats").style.display = 'none';  
  document.getElementById("storyBox").style.visibility = 'visible';  
  newScene(1);
}


function playerCaptured() {
  attack = false;
  clearInterval(moveEnemy);
  setupFight();
  document.getElementById("fighting").style.visibility = 'collapse';
  document.getElementById("fightstats").style.visibility = 'collapse';
  document.getElementById("storyBox").style.visibility = 'visible'; 
  document.getElementById("message1").innerHTML = "You were captured";
  document.getElementById("collect").style.visibility = 'hidden';
  playerLoc = [8,10];
  stage = 12;  
  window.setTimeout(playerMovementStage, 2000);   
}