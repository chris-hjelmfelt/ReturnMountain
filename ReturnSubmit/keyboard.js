  function keyboardStart(){
			//Capture the keyboard input
      let left = keyboardHelper(37),
          up = keyboardHelper(38),
          right = keyboardHelper(39),
          down = keyboardHelper(40),
          north = keyboardHelper(78),
          east = keyboardHelper(69),
          south = keyboardHelper(83),
          west = keyboardHelper(87),
          optA = keyboardHelper(65),
          optB = keyboardHelper(66),
          optC = keyboardHelper(67),
          optD = keyboardHelper(68);
          space = keyboardHelper(32);

      // Direction Buttons
      north.press = () => {
        if (locations[playerLoc[0]][playerLoc[1]].n == 1 && moveAllowed == true){
          playerLoc[0] -= 1;
          moveKey();
        }
      };

      east.press = () => {
        if (locations[playerLoc[0]][playerLoc[1]].e == 1 && moveAllowed == true){
          playerLoc[1] += 1;
          moveKey();
        }
      }

      south.press = () => {
        if (locations[playerLoc[0]][playerLoc[1]].s == 1 && moveAllowed == true){
          playerLoc[0] += 1;
          moveKey();
        }
      }

      west.press = () => {
        if (locations[playerLoc[0]][playerLoc[1]].w == 1 && moveAllowed == true){
          playerLoc[1] -= 1;
          moveKey();
        }
      }
      
      // action options
      optA.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseA;
          window.setTimeout(resetMessage, 1000);
          if (actions[inter].responseA == "You dig for gems") {
            gems += 1;
            document.getElementById("collect").innerHTML = "Gems: " + gems + "/100"; 
            if (gems >= 5){
              actions[inter].responseA = "It's bare rock now";
            }
          }
          if ( actions[inter].responseA == "You find a bunch of food") {
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
          if ( actions[inter].responseB == "There is bread here"){
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
          if ( actions[inter].responseC == "You found a bit of jam") {
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
        document.getElementById("playerX").innerHTML = 	"&lArr;";
        document.getElementById("playerX").additional = "l";
      };      
      left.release = () => {
      };

      up.press = () => {
        document.getElementById("playerX").innerHTML = 	"&uArr;";
        document.getElementById("playerX").additional = "u";
      };
      up.release = () => {
      };

      right.press = () => {
        document.getElementById("playerX").innerHTML = 	"&rArr;";
        document.getElementById("playerX").additional = "r";
      };
      right.release = () => {
      };

      down.press = () => {
        document.getElementById("playerX").innerHTML = 	"&dArr;";
        document.getElementById("playerX").additional = "d";
      };
      down.release = () => {
      };

      space.press = () => { 
        playerHit();
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