  function keyboardStart(){
			//Capture the keyboard input
      let cont1 = keyboardHelper(67);  // c
          left = keyboardHelper(37),
          up = keyboardHelper(38),
          right = keyboardHelper(39),
          down = keyboardHelper(40),
          north = keyboardHelper(78), // N
          east = keyboardHelper(69), // E
          south = keyboardHelper(83), // S
          west = keyboardHelper(87), // W
          optA = keyboardHelper(49), // 1
          optB = keyboardHelper(50), // 2
          optC = keyboardHelper(51), // 3
          optD = keyboardHelper(52); // 4
          space = keyboardHelper(32);
      document.getElementById("playerX").additional = "u";

      // Continue 
      cont1.press = () => { 
        if (switchScene == true){
          if (keyDebounce === false && moveAllowed == false) {
            keyDebounce = true
            document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' c'  
            setTimeout(function(){newScene(1)}, 750);
          }
        }        
      }

      // Direction Buttons
      north.press = () => {
          if (stage == 14){   // during fight scene this moves the players facing direction
            document.getElementById("playerX").innerHTML = 	"&uArr;";
            document.getElementById("playerX").additional = "u";
          } else {  
            if (locations[playerLoc[0]][playerLoc[1]].n == 1 && keyDebounce === false && moveAllowed == true){
              keyDebounce = true              
              document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' n'
              playerLoc[0] -= 1;
              setTimeout(function(){moveKey()}, 750);
            }
          }
      };

      east.press = () => {
          if (stage == 14){
            document.getElementById("playerX").innerHTML = 	"&rArr;";
            document.getElementById("playerX").additional = "r";
          } else {
            if (locations[playerLoc[0]][playerLoc[1]].e == 1 && keyDebounce === false && moveAllowed == true){
              keyDebounce = true
              document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' e' 
              playerLoc[1] += 1;            
              setTimeout(function(){moveKey()}, 750);
            }
          }
      }

      south.press = () => {
          if (stage == 14){
            document.getElementById("playerX").innerHTML = 	"&dArr;";
            document.getElementById("playerX").additional = "d";
          } else {
            if (locations[playerLoc[0]][playerLoc[1]].s == 1 && keyDebounce === false && moveAllowed == true){
              keyDebounce = true
              document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' s' 
              playerLoc[0] += 1;
              setTimeout(function(){moveKey()}, 750);
            }
          }
      }

      west.press = () => {
          if (stage == 14){
            document.getElementById("playerX").innerHTML = 	"&lArr;";
            document.getElementById("playerX").additional = "l";
          } else {
            if (locations[playerLoc[0]][playerLoc[1]].w == 1 && keyDebounce === false && moveAllowed == true){
              keyDebounce = true
              document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' w' 
              playerLoc[1] -= 1;
              setTimeout(function(){moveKey()}, 750);
            }
          }
      }
      
      // action options
      optA.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' 1' 
        if (inter != -1)  {  
          if (actions[inter].responseA == "You wonder what they mine here" && stage >= 10) { 
            actions[inter].responseA = "You mine some gems"     
          }           
          if (actions[inter].responseA == "You mine some gems" && stage >= 10) {
            if (gems >= 5){  // No more gems to mine
              actions[inter].responseA = "It's bare rock now";
            } else if (gemDebounce == false) { 
              gemDebounce = true;  // currently mining
              document.getElementById("actions").innerHTML = actions[inter].responseA;
              window.setTimeout(getGem, 2000);    
            }            
          } else {
            document.getElementById("actions").innerHTML = actions[inter].responseA;
            window.setTimeout(resetMessage, 2000);
          }
          if ( actions[inter].responseA == "You find a bunch of food"  && stage >= 6) {
            food += 80;
            actions[inter].responseA = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
        setTimeout(function() {document.getElementById("input").innerHTML = '&#62;'}, 750)
      }

      optB.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' 2' 
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseB;
          window.setTimeout(resetMessage, 1000);
          if ( actions[inter].responseB == "There is bread here" && stage >= 6){
            food += 15;
            actions[inter].responseB = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
        setTimeout(function() {document.getElementById("input").innerHTML = '&#62;'}, 750)
      }
      
      optC.press = () => {      
        let inter = locations[playerLoc[0]][playerLoc[1]].inter;
        document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' 3' 
        if (inter != -1)  {
          document.getElementById("actions").innerHTML = actions[inter].responseC;
          window.setTimeout(resetMessage, 1000);
          if ( actions[inter].responseC == "You found a bit of jam" && stage >= 6) {
            food += 5;
            actions[inter].responseC = "It's empty";
            document.getElementById("collect").innerHTML = "Bites of Food: " + food + "/100"; 
          }
        }
        setTimeout(function() {document.getElementById("input").innerHTML = '&#62;'}, 750)
      }

      optD.press = () => {  
        document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' 4' 
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
        } 
      };      
      left.release = () => {
      };

      up.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&uArr;";
          document.getElementById("playerX").additional = "u";
        } 
      };
      up.release = () => {
      };

      right.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&rArr;";
          document.getElementById("playerX").additional = "r";
        } 
      };
      right.release = () => {
      };

      down.press = () => {
        if (stage == 14){
          document.getElementById("playerX").innerHTML = 	"&dArr;";
          document.getElementById("playerX").additional = "d";
        } 
      };
      down.release = () => {
      };

      // Shoot enemies during fight
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