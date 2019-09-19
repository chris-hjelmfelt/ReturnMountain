  function keyboardStart(){
          // KEYBOARD FOR MOVEMENT
			//Capture the keyboard arrow keys
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

      // Direction Buttons
      north.press = () => {
        
      };

      east.press = () => {
       
      }

      south.press = () => {
        
      }

      west.press = () => {
        
      }
      
      // action options
      optA.press = () => {      
        
      }

      optB.press = () => {      
        
      }
      
      optC.press = () => {      
        
      }

      optD.press = () => {      
        
      }

      //Left arrow key `press` method
      left.press = () => {
        //Change the player's velocity when the key is pressed
        player.vx = -5;
        player.vy = 0;
      };      
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the player isn't moving vertically so  stop the player
        if (!right.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };

      //Up
      up.press = () => {
        player.vy = -5;
        player.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };

      //Right
      right.press = () => {
        player.vx = 5;
        player.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };

      //Down
      down.press = () => {
        player.vy = 5;
        player.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };
  }
  
  
  //The `keyboard` helper function
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