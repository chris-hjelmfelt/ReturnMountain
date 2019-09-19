var place = {title:"Initialized", des:"", n:0, e:0, s:0, w:0, a:"", b:"", c:"", d:""};
var locations = matrix(16,16,place);
var stuff = "";
var xhttp;
xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(xhttp.responseText);    
  }
};
xhttp.open("GET", "places.json", true);
xhttp.send();

// Use JSON to fill the locations array with proper info
function myFunction(xhttp) {
  stuff = JSON.parse(xhttp);
  for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
      locations[i][j] = stuff[(i*16) + j];
    }
  }
  console.log(locations[7][8]);
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