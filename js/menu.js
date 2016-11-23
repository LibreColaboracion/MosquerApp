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



var hammer = new Hammer(document.getElementById("mapazoom"));
hammer.pinch = function(e){
  alert("Doble Tap");
};
