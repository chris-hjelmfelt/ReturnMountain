    // User presses the continue button     
    function newScene() {          
      if (continueDebounce == false) {  // prevent double click on continue button
        continueDebounce = true;
        stage += 1;
        if (stage == 1) {   // appear in deaths realm
          cutSceneStage(storyTwo);
        } else if (stage == 2) { 
          cutSceneStage(storyThree);
        } else if (stage == 3) {  
          cutSceneStage(storyFour);      
        } else if (stage == 4) {
          playerMovementStage();
        } else if (stage == 5) {  // encounter the souls of the dead for the first time
          cutSceneStage(storyFive);
          document.getElementById("collect").innerHTML = "Bites of Food: 0/100"; 
          document.getElementById("collect").style.visibility = "visible";
        } else if (stage == 6) {
          playerMovementStage();
        } else if (stage == 7) {  // feed the souls of the dead
          cutSceneStage(storySix);
          document.getElementById("collect").style.visibility = 'hidden';
          actions[locations[9][5].inter].responseA = "They pay you no attention"
          locations[row][col].s = 1;
        } else if (stage == 8) { 
          playerMovementStage()
        } else if (stage == 9) {  // encounter the two minons for the first time
          cutSceneStage(storySeven);
          document.getElementById("collect").innerHTML = "Gems: 0/5"; 
          document.getElementById("collect").style.visibility = "visible";
        } else if (stage == 10) {
          playerMovementStage();
        } else if (stage == 11) {  // give minons gems
          cutSceneStage(storyEight);
          document.getElementById("collect").style.visibility = 'hidden';
          actions[locations[10][7].inter].responseA = "You may pass"
          locations[row][col].e = 1;
        } else if (stage == 12) {
          playerMovementStage();
        } else if (stage == 13) {  // encounter minon fight    
          cutSceneStage(storyNine);
        } else if (stage == 14) {
          startFight();
        } else if (stage == 15) {
          cutSceneStage(storyTen);  
        } else if (stage == 16) {
          playerMovementStage();
        } else if (stage == 17) {  // encounter book of names
          cutSceneStage(storyEleven);
          locations[row][col].n = 1;
        } else if (stage == 18) {
          cutSceneStage(storyTwelve);        
        } else if (stage == 19) {
          cutSceneStage(storyThirteen);
        } else if (stage == 20) {
          playerMovementStage();
        } else if (stage == 21) {  // escape the maze
          cutSceneStage(storyFourteen);
        } else if (stage == 22) {
          cutSceneStage(storyFifteen);
        } else if (stage == 23) {
          cutSceneStage(storySixteen);
        } else if (stage == 24) {
          cutSceneStage(storySeventeen);
        } else if (stage == 25) {
          cutSceneStage(storyEighteen);
          document.getElementById("continue").style.visibility = 'hidden'; 
          document.getElementById("end").style.visibility = 'visible';
        } 
        continueDebounce = false;
      }
    }        

    // Conversations etc.
    function cutSceneStage(p) {
      document.getElementById("storyPart").innerHTML = p;
      document.getElementById("message2").innerHTML = "";
      document.getElementById("menu").innerHTML = ""; 
      document.getElementById("contents").innerHTML = "";
      document.getElementById("instructions").style.visibility = 'hidden'; 
      document.getElementById("openmap1").style.visibility = 'hidden'; 
      document.getElementById("cutawayBox").style.visibility = 'visible';
      document.getElementById("continue").style.visibility = 'visible';      
      moveAllowed = false;
    }

    // Show location information and allow player to move around
    function playerMovementStage() {
      document.getElementById("instructions").style.visibility = 'visible'; 
      document.getElementById("openmap1").style.visibility = 'visible';  
      document.getElementById("cutawayBox").style.visibility = 'hidden';
      document.getElementById("continue").style.visibility = 'hidden';       
      moveAllowed = true;
      printLoc();
    }   

    function getGem() {
      gems += 1;
      document.getElementById("collect").innerHTML = "Gems: " + gems + "/5"; 
      document.getElementById("actions").innerHTML = "";
      gemDebounce = false; 
    }