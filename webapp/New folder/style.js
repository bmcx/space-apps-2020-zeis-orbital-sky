document.getElementByClassName("sidebar").onmousemove.innerHTML = function(event) {myFunction(event)};

function myFunction(event) {
  var x = document.getElementsByClassName("fas fa-qrcode");
  x[0].innerHTML = "Dashboard";
}


function zoomin(){
  var GFG = document.getElementById("earth").innerHTML;
  var currWidth = GFG.clientWidht;
  GFG.style.width = (currWidth +100)+"px";
}
function zoomout() { 
  var GFG = document.getElementById("geeks"); 
  var currWidth = GFG.clientWidth; 
  GFG.style.width = (currWidth - 100) + "px"; 
} 
progress();