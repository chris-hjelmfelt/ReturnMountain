var place = {title:"Initialized", des:"", n:0, e:0, s:0, w:0, a:"", b:"", c:"", d:""};
var locations = matrix(16,16,place);
var actions = [];
var stuff = "";
var interLength = 36;

// Get data from places.json
var xhttp;
xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    fillLocations(xhttp.responseText);    
  }
};
xhttp.open("GET", "places.json", true);
xhttp.send();

// Get data from interact.json
var xhttp2;
xhttp2=new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    fillActions(xhttp2.responseText);    
  }
};
xhttp2.open("GET", "interact.json", true);
xhttp2.send();

// Use JSON to fill the locations array with proper info
function fillLocations(xhttp) {
  stuff = JSON.parse(xhttp);
  for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
      locations[i][j] = stuff[(i*16) + j];
    }
  }
}

// Use JSON to fill the actions array 
function fillActions(xhttp2) {
  stuff = JSON.parse(xhttp2);
  for (let k=0; k<interLength; k++) {
    actions[k] = stuff[k];
  }
}

// initialize a 2D array with objects
function matrix(numrows, numcols, initial){
  var arr = [];
  for (var i = 0; i < numrows; ++i){
     var columns = [];
     for (var j = 0; j < numcols; ++j){
        columns[j] = initial;
     }
     arr[i] = columns;
   }
   return arr;
}