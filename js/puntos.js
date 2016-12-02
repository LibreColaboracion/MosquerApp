window.addEventListener('load', function(){
    var a = document.getElementById('mapaex').getSVGDocument();// se selecciona la etiqueta objet
    
    var punto = a.getElementById('punto'); // se seleciona el id dentro del codigo del svg
     punto.setAttribute('fill','green'); //se le asignan propiedades
     punto.setAttribute('stroke','green');
     /* 
        No se por que pero todos los path y figuras geometricas en el svg estan dentro de la etique <g> 
        por tal motivo hay que insertar lo que se quiere ver en la imagen dentro de esta etiqueta
     */
     var c = a.getElementById('layer1');  // seleciono la etiqueta <g> mediante su id
     c.innerHTML += '<circle id="iglesia" cx="175.79546" cy="493.26065" r="10.5723004"> </circle>'; // inserto un nuevo elemento
     var iglesia = a.getElementById('iglesia'); // selecciono el punto iglesia del dom del svg 
            iglesia.addEventListener('click', function() {
            vercontenido (iglesia)},false); // le asigno un evento 
});


