var cell = document.getElementById('fighting').getElementsByTagName('td');
var enemyArray = [];
var timeTick = 0;
var delayTime = 2;
var minonsCount = 0;
var deadMinons = 0;
var totalMinons = 25;
var hitPoints = 5;
var totalhitPoints = 5;
var attack = true;
var nearU = false, nearL = false, nearR = false, nearD = false;  // player threatened from direction
var enemySymbol = "&#164;";

for (var i=1; i<16; i++){
  enemyArray[i] = false;
}

function startFight() {
  document.getElementById("fightalert").innerHTML = "Use spacebar to hit!"
  document.getElementById("message1").innerHTML = "";
  document.getElementById("howto").innerHTML = instructTwo;
  document.getElementById("continue").style.visibility = "hidden";
  document.getElementById("minons").innerHTML = "Minons: " + (totalMinons-deadMinons) + "/" + totalMinons;
  document.getElementById("hit").innerHTML = "Hit Points: " + hitPoints + "/" + totalhitPoints;
  window.setInterval(moveMinons, 1000);
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
        cell[22].innerHTML = "";
        enemyArray[2] = false;
        cell[31].innerHTML = enemySymbol;
        enemyArray[3] = true;
        cell[31].style.color = "red";
        cell[31].style.fontSize = "28px";
      }
      // middle distance ones next
      if (enemyArray[1] == true){
        cell[13].innerHTML = "";
        enemyArray[1] = false;
        cell[22].innerHTML = enemySymbol;
        enemyArray[2] = true;
      }
      // furthest out ones last
      if (enemyArray[0] == true){
        cell[4].innerHTML = "";
        enemyArray[0] = false;
        cell[13].innerHTML = enemySymbol;
        enemyArray[1] = true;
      }
    }
    // Left - Move any existing minons if there is room
    if  (enemyArray[7] == false){  // cell 39 empty
      if (enemyArray[6] == true){
        cell[38].innerHTML = "";
        enemyArray[6] = false;
        cell[39].innerHTML = enemySymbol;
        enemyArray[7] = true;
        cell[39].style.color = "red";
        cell[39].style.fontSize = "28px";
      }
      if (enemyArray[5] == true){
        cell[37].innerHTML = "";
        enemyArray[5] = false;
        cell[38].innerHTML = enemySymbol;
        enemyArray[6] = true;
      }
      if (enemyArray[4] == true){
        cell[36].innerHTML = "";
        enemyArray[4] = false;
        cell[37].innerHTML = enemySymbol;
        enemyArray[5] = true;
      }
    }
    // Right - Move any existing minons if there is room
    if  (enemyArray[8] == false){
      if (enemyArray[9] == true){
        cell[42].innerHTML = "";
        enemyArray[9] = false;
        cell[41].innerHTML = enemySymbol;
        enemyArray[8] = true;
        cell[41].style.color = "red";
        cell[41].style.fontSize = "28px";
      }
      if (enemyArray[10] == true){
        cell[43].innerHTML = "";
        enemyArray[10] = false;
        cell[42].innerHTML = enemySymbol;
        enemyArray[9] = true;
      }
      if (enemyArray[11] == true){
        cell[44].innerHTML = "";
        enemyArray[11] = false;
        cell[43].innerHTML = enemySymbol;
        enemyArray[10] = true;
      }
    }
    // Bottom - Move any existing minons if there is room
    if  (enemyArray[12] == false){
      if (enemyArray[13] == true){
        cell[58].innerHTML = "";  
        enemyArray[13] = false;
        cell[49].innerHTML = enemySymbol;
        enemyArray[12] = true;
        cell[49].style.color = "red";
        cell[49].style.fontSize = "28px";
      }  
      if (enemyArray[14] == true){
        cell[67].innerHTML = "";
        enemyArray[14] = false;
        cell[58].innerHTML = enemySymbol;
        enemyArray[13] = true;
      }    
      if (enemyArray[15] == true){
        cell[76].innerHTML = "";
        enemyArray[15] = false;
        cell[67].innerHTML = enemySymbol;
        enemyArray[14] = true;
      }
    }
    
    // Minons appear on the grid
    var addMinon = Math.floor(Math.random()*10);
    if (addMinon >= 1 && minonsCount < totalMinons) {
      minonsCount += 1;
      var placeMinon = Math.floor(Math.random()*4); 
      if (placeMinon == 0){
        cell[4].innerHTML = enemySymbol;
        enemyArray[0] = true;
      } else if (placeMinon == 1){
        cell[36].innerHTML = enemySymbol;
        enemyArray[4] = true;
      } else if (placeMinon == 2){
        cell[44].innerHTML = enemySymbol;
        enemyArray[11] = true;
      } else if (placeMinon == 3){
        cell[76].innerHTML = enemySymbol;
        enemyArray[15] = true;
      } 
    } 
  }
  timeTick += 1;
}


function playerHit() {    // called by keyboard.js when spacebar is pressed
  playerDir = document.getElementById("playerX").additional;
  if (playerDir == "u" & enemyArray[3] == true) {  
    cell[31].innerHTML = "x";
    cell[31].style.color = "black";
    cell[31].style.fontSize = "22px";
    enemyArray[3] = false;
    deadMinons += 1;
  }  else if (playerDir == "l" & enemyArray[7] == true) {
    cell[39].innerHTML = "x";
    cell[39].style.color = "black";
    cell[39].style.fontSize = "22px";
    enemyArray[7] = false;
    deadMinons += 1;
  } else if (playerDir == "r" & enemyArray[8] == true) {
    cell[41].innerHTML = "x";
    cell[41].style.color = "black";
    cell[41].style.fontSize = "22px";
    enemyArray[8] = false;
    deadMinons += 1;
  } else if (playerDir == "d" & enemyArray[12] == true) {
    cell[49].innerHTML = "x";
    cell[49].style.color = "black";
    cell[49].style.fontSize = "22px";
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
  document.getElementById("fighting").style.visibility = 'hidden';
  document.getElementById("fightstats").style.visibility = 'hidden';
  cutScene(storyTen);  
}


function playerCaptured() {
  attack = false;
  document.getElementById("fighting").style.visibility = 'hidden';
  document.getElementById("fightstats").style.visibility = 'hidden';
  document.getElementById("message1").innerHTML = "You were captured";
  window.setTimeout(printLoc, 2000);
  playerLoc = [8,10];
  stage = 9;
}