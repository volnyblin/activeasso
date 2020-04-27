//--SIDE NAV--//

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//--NAV--//

function passageDeLaSouris(element) {
  element.setAttribute('src', "pictures/"+(element.id).substr(3,3)+"1.png");
}
function departDeLaSouris(element) {
  element.setAttribute('src', "pictures/"+(element.id).substr(3,3)+".png");
}
function drop() {
  document.getElementById("dropdown_content").style.display ="bloc";
}
//--NEWSFEED--//

function zoomPost(n){
  document.getElementById("filtre").style.display = "block";
  document.getElementById("zoom").style.display = "block";

  document.getElementById("imgzoom").src = document.getElementById("ph"+ n.toString()).src;
  document.getElementById("actutextzoom").innerHTML = document.getElementById("actutext"+ n.toString()).innerHTML;
  document.getElementById("date").innerHTML = document.getElementById("date"+ n.toString()).innerHTML;
}
function closeZoom() {
  document.getElementById("filtre").style.display = "none";
  document.getElementById("zoom").style.display = "none";
}

//--FOOTER--//

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
