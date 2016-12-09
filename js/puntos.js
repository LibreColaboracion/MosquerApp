
function hola(arg){
    var f = document.getElementById('titulo');
    f.innerHTML = "<div onclick='vercontenido();''>" + "<h1>"+ arg +"</h1>"+"</div>" ;
    f.style.borderRadius = "10px";
    f.style.backgroundColor = "white";
     console.log(arg);
};


var cordenadas = {
    'Laguna la herrera':[58,142],
    'Humedal Meandro del say':[391,193],
    'Desierto De Sabrinsky':[84,199],
    'Hacienda El Novillero':[170,122],
    'Humedal guali':[285, 104],
    'Piedras de Usca':[85, 173],
    'Parque Principal Mosquera':[208, 110]
    
};

function puntos(arg){
    var corlugares = Object.keys(arg);
    var a = document.getElementById('mapaex').getSVGDocument();
    var c = a.getElementById('layer2');
    // Me adelante un poco con esta sentencia que usted no sabe manejar pero es casi un for no por eso dice foreach = para cada uno
        corlugares.forEach(function(e){
            c.innerHTML += '<circle id="'+e+'" cx="'+arg[e][0]+'" cy="'+arg[e][1]+'" r="7" style="opacity:1;fill:#00ff00;fill-opacity:1;fill-rule:nonzero;stroke:#800000;stroke-width:1.37062943;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"> </circle>';
        });
        corlugares.forEach(function(e){
            a.getElementById(e).addEventListener('click',function(){hola(e)});
        });
};

window.addEventListener('load', function(){
    puntos(cordenadas);

});




   