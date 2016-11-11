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


/* Mostrar y ocultar detalles del lugar*/
function mostrar(){
  document.getElementById ("detalles").className = "detallesvisto";
}
function nomostrar(){
  document.getElementById ("detalles").className = "detalles";
}


/* zoom foto lugar*/
function zoom(){
  document.getElementById ("zoom").className = "lugareszoom";

}