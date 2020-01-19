  function keyboardStart(){
			//Capture the keyboard input
      let left = keyboardHelper(37),
          up = keyboardHelper(38),
          right = keyboardHelper(39),
          down = keyboardHelper(40),
          north = keyboardHelper(87), // W
          east = keyboardHelper(68), // D
          south = keyboardHelper(83), // S
          west = keyboardHelper(65), // A
          optA = keyboardHelper(49), // 1
          optB = keyboardHelper(50), // 2
          optC = keyboardHelper(51), // 3
          optD = keyboardHelper(52); // 4
          space = keyboardHelper(32);
          map = keyboardHelper(77); // M
          cont = keyboardHelper(13);  // Enter
          document.getElementById("playerX").additional = "u";

      // Direction Buttons
      north.press = () => {
        if (stage == 14){   // during fight scene this moves the players facing direction
          document.getElementById("playerX").innerHTML = 	"&uArr;";
          document.getElementById("playerX").additional = "u";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].n == 1 && moveAllowed == true){
            playerLoc[0] -= 1;
            moveKey();
          }
        }
      };

      east.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&rArr;";
          document.getElementById("playerX").additional = "r";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].e == 1 && moveAllowed == true){
            playerLoc[1] += 1;
            moveKey();
          }
        }
      }

      south.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&dArr;";
          document.getElementById("playerX").additional = "d";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].s == 1 && moveAllowed == true){
            playerLoc[0] += 1;
            moveKey();
          }
        }
      }

      west.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&lArr;";
          document.getElementById("playerX").additional = "l";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].w == 1 && moveAllowed == true){
            playerLoc[1] -= 1;
            moveKey();
          }
        }
      }
      
      // action options
      optA.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseA;
          window.setTimeout(resetMessage, 1000);
          if (actions[inter].responseA == "You dig for gems" && stage >= 7) {
            gems += 1;
            document.getElementById("collect").innerHTML = "Gems: " + gems + "/100"; 
            if (gems >= 5){
              actions[inter].responseA = "It's bare rock now";
            }
          }
          if ( actions[inter].responseA == "You find a bunch of food"  && stage >= 6) {
            food += 80;
            actions[inter].responseA = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
      }

      optB.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseB;
          window.setTimeout(resetMessage, 1000);
          if ( actions[inter].responseB == "There is bread here" && stage >= 6){
            food += 15;
            actions[inter].responseB = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
      }
      
      optC.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseC;
          window.setTimeout(resetMessage, 1000);
          if ( actions[inter].responseC == "You found a bit of jam" && stage >= 6) {
            food += 5;
            actions[inter].responseC = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
      }

      optD.press = () => {  
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseD;
          window.setTimeout(resetMessage, 1000);
        }        
      }


      // Arrow Keys - change dir player is facing during fight
      left.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&lArr;";
          document.getElementById("playerX").additional = "l";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].w == 1 && moveAllowed == true){
            playerLoc[1] -= 1;
            moveKey();
          }
        }
      };      
      left.release = () => {
      };

      up.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&uArr;";
          document.getElementById("playerX").additional = "u";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].n == 1 && moveAllowed == true){
            playerLoc[0] -= 1;
            moveKey();
          }
        }
      };
      up.release = () => {
      };

      right.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&rArr;";
          document.getElementById("playerX").additional = "r";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].e == 1 && moveAllowed == true){
            playerLoc[1] += 1;
            moveKey();
          }
        }
      };
      right.release = () => {
      };

      down.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&dArr;";
          document.getElementById("playerX").additional = "d";
        } else {
          if (locations[playerLoc[0]][playerLoc[1]].s == 1 && moveAllowed == true){
            playerLoc[0] += 1;
            moveKey();
          }
        }
      };
      down.release = () => {
      };

      // Shoot enemies during fight
      space.press = () => { 
        playerHit();
      }

      // Open map
      map.press = () => { 
        openMap(1);
      }

      // Continue during cut scenes
      cont.press = () => { 
        if (document.getElementById("continue").style.visibility == 'visible'){
          newScene();
        }        
      }
  }
  keyboardStart();
  
  // Keyboard helper function
  function keyboardHelper(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }