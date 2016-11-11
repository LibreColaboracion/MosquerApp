//  Menu con cambio de color
function menu(color){
    var a = document.getElementById("menu");
    a.style.background = color;
    a.className = ("");
}
function menuc(){
    var a = document.getElementById("menu");
    a.className = ("invisible");
}


function mostrar(){
  document.getElementById ("detalles").className = "detallesvisto";

}

function nomostrar(){
  document.getElementById ("detalles").className = "detalles";

}




function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}


