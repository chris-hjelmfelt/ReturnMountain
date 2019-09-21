var cell = document.getElementById('fighting').getElementsByTagName('td');
var minonsCount = 0;
var deadMinons = 20;
var hitPoints = 5;
var attack = true;
var nearU = false, nearL = false, nearR = false, nearD = false;  // player threatened from direction

function startFight() {
  document.getElementById("message1").innerHTML = "";
  document.getElementById("howto").innerHTML = storySix;
  document.getElementById("continue").style.visibility = "hidden";
  window.setInterval(moveMinons, 1000);
}


function moveMinons() {
  // Damage player
  if (attack == true)
    hitPlayer();

  // Top - Move any existing minons if there is room
  if  (cell[31].innerHTML != "*"){
    // closest ones first   (make sure they stay red and large)
    if (cell[22].innerHTML == "*"){
      cell[22].innerHTML = "";
      cell[31].innerHTML = "*"
      cell[31].style.color = "red";
      cell[31].style.fontSize = "28px";
    }
    // middle distance ones next
    if (cell[13].innerHTML == "*"){
      cell[13].innerHTML = "";
      cell[22].innerHTML = "*"
    }
    // furthest out ones last
    if (cell[4].innerHTML == "*"){
      cell[4].innerHTML = "";
      cell[13].innerHTML = "*"
    }
  }
  // Left - Move any existing minons if there is room
  if  (cell[39].innerHTML != "*"){
    if (cell[38].innerHTML == "*"){
      cell[38].innerHTML = "";
      cell[39].innerHTML = "*"
      cell[39].style.color = "red";
      cell[39].style.fontSize = "28px";
    }
    if (cell[37].innerHTML == "*"){
      cell[37].innerHTML = "";
      cell[38].innerHTML = "*"
    }
    if (cell[36].innerHTML == "*"){
      cell[36].innerHTML = "";
      cell[37].innerHTML = "*"
    }
  }
  // Right - Move any existing minons if there is room
  if  (cell[41].innerHTML != "*"){
    if (cell[42].innerHTML == "*"){
      cell[42].innerHTML = "";
      cell[41].innerHTML = "*"
      cell[41].style.color = "red";
      cell[41].style.fontSize = "28px";
    }
    if (cell[43].innerHTML == "*"){
      cell[43].innerHTML = "";
      cell[42].innerHTML = "*"
    }
    if (cell[44].innerHTML == "*"){
      cell[44].innerHTML = "";
      cell[43].innerHTML = "*"
    }
  }
  // Bottom - Move any existing minons if there is room
  if  (cell[49].innerHTML != "*"){
    if (cell[58].innerHTML == "*"){
      cell[58].innerHTML = "";  
      cell[49].innerHTML = "*"
      cell[49].style.color = "red";
      cell[49].style.fontSize = "28px";
    }  
    if (cell[67].innerHTML == "*"){
      cell[67].innerHTML = "";
      cell[58].innerHTML = "*"
    }    
    if (cell[76].innerHTML == "*"){
      cell[76].innerHTML = "";
      cell[67].innerHTML = "*"
    }
  }
  
  // Minons appear on the grid
  var addMinon = Math.floor(Math.random()*4);
  if (addMinon >= 2 && minonsCount < 20) {
    minonsCount += 1;
    var placeMinon = Math.floor(Math.random()*4); 
    if (placeMinon == 0){
      cell[4].innerHTML = "*";
    } else if (placeMinon == 1){
      cell[36].innerHTML = "*";
    } else if (placeMinon == 2){
      cell[44].innerHTML = "*";
    } else if (placeMinon == 3){
      cell[76].innerHTML = "*";
    } 
  } 
}


function playerHit() {
  playerDir = document.getElementById("playerX").additional;
  if (playerDir == "u" & cell[31].innerHTML == "*") {
    cell[31].innerHTML = "x";
    cell[31].style.color = "black";
    cell[31].style.fontSize = "22px";
    deadMinons += 1;
  }  else if (playerDir == "r" & cell[41].innerHTML == "*") {
    cell[41].innerHTML = "x";
    cell[41].style.color = "black";
    cell[41].style.fontSize = "22px";
    deadMinons += 1;
  } else if (playerDir == "d" & cell[49].innerHTML == "*") {
    cell[49].innerHTML = "x";
    cell[49].style.color = "black";
    cell[49].style.fontSize = "22px";
    deadMinons += 1;
  } else if (playerDir == "l" & cell[39].innerHTML == "*") {
    cell[39].innerHTML = "x";
    cell[39].style.color = "black";
    cell[39].style.fontSize = "22px";
    deadMinons += 1;
  }

  document.getElementById("minons").innerHTML = "Minons: " + (20-deadMinons) + "/20";
  if (deadMinons >= 20){
    playerWin();
  }
}


function hitPlayer(){
  if (cell[31].innerHTML == "*") {    
    if (nearU == true){
      hitPoints -= 1;
      nearU =false 
    } else {
      nearU = true;
    }    
  } 
  if (cell[39].innerHTML == "*") {
    if (nearL == true){
      hitPoints -= 1;
      nearL =false
    } else {
      nearL = true;
    } 
  }
  if (cell[41].innerHTML == "*") {
    if (nearR == true){
      hitPoints -= 1;
      nearR =false
    } else {
      nearR = true;
    }  
  }
  if (cell[49].innerHTML == "*") {
    if (nearD == true){
      hitPoints -= 1;
      nearD =false
    } else {
      nearD = true;
    } 
  }
  
  document.getElementById("hit").innerHTML = "Hit Points: " + hitPoints + "/5";

  if (hitPoints < 1)  {
    playerCaptured();
  }  
}


function playerWin() {
  attack = false;
  document.getElementById("fighting").style.visibility = 'hidden';
  document.getElementById("fightstats").style.visibility = 'hidden';
  document.getElementById("message1").innerHTML = "You have won. Nothing blocks your path forward";
  document.getElementById("continue").style.visibility = 'visible';
}


function playerCaptured() {
  attack = false;
  document.getElementById("fighting").style.visibility = 'hidden';
  document.getElementById("fightstats").style.visibility = 'hidden';
  document.getElementById("message1").innerHTML = "You were captured";
  window.setTimeout(printLoc, 2000);
}