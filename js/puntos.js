
window.addEventListener('load', function(){
    var a = document.getElementById('mapaex').getSVGDocument();// se selecciona la etiqueta objet
    var punto = a.getElementById('punto'); // se seleciona el id dentro del codigo del svg
    var c = a.getElementById('layer2');  // seleciono la etiqueta <g> mediante su id
    c.innerHTML += '<circle id="iglesia" cx="80" cy="180" r="10" style="opacity:1;fill:#00b900;fill-opacity:1;fill-rule:nonzero;stroke:#ffff00;stroke-width:0.52206606;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" > </circle>'; // inserto un nuevo elemento
    var iglesia = a.getElementById('iglesia'); // selecciono el punto iglesia del dom del svg 
        iglesia.addEventListener('click', function() {
        tituloSubtitulo(iglesia)},false); // le asigno un evento 
});
