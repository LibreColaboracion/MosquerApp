function vercontenido (argumento){ 
     for (j=0; j <= 4; j++){
        switch(j){
                case 0:
                    var contenedor = document.getElementById('detalles');
                    contenedor.style.left = "0";
                    contenedor.style.top = "0";
                    contenedor.style.width = '100%';
                    contenedor.style.height = '100%';
                    contenedor.style.transition = "all 1s"; 
                    console.log('case 0');
                break;
                case 1:
                    var contenedor = document.getElementById('categoria1');
                        
                        contenidocat.innerHTML = (argumento.contenido[0].subtitulo);
                        contenedor.innerHTML = (argumento.titulo);
                        contenedor.innerHTML = ("<p>"+ (argumento.contenido[0].subtitulo)+"</p>" + 
                                               "<p>"+ (argumento.contenido[0].imagenes)+"</p>"+
                                               "<p>"+ (argumento.contenido[0].audio)+"</p>"+
                                               "<p>"+ (argumento.contenido[0].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenidocat.style.display = "inherit";
                    break;
            };
    };
};


function noVercontenido (argumento){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    console.log('cerrar');
     for (j=0; j <= 2; j++){
        switch(j){
                case 0:
                    var contenedor = document.getElementById('detalles');
                    contenedor.style.left = "50%";
                    contenedor.style.top = "50%";
                    contenedor.style.width = '0%';
                    contenedor.style.height = '0%';
                    contenedor.style.WebkitTransition = "all 2s";
                    contenedor.style.transition = "all 1s"; 
                    console.log('case 0');
                break;
                case 1:
                    var contenedor = document.getElementById('categoria1');
                        contenedor.style.display = "none";
                        contenidocat.style.display = "none";
                        
                break;
            };
    };
};

/*lupa*/

function zoom (){ 
    console.log('lupa');
            var aumento = document.getElementById("mapaex");
            aumento.style.width = "600%";
            aumento.style.marginLeft = "-248%";
            aumento.style.marginTop = "-97%";
            aumento.style.WebkitTransition = "all 4s";
            aumento.style.transition = "all 4s"; 
            console.log('zoom++');
            
            };
function mzoom (){ 
    console.log('lupamenos');
            var aumento = document.getElementById("mapaex");
            aumento.style.width = "100%";
            aumento.style.marginLeft = "0%";
            aumento.style.marginTop = "0%";
            aumento.style.WebkitTransition = "all 4s";
            aumento.style.transition = "all 4s"; 
            console.log('zoom--');
            
            };



/* galeria*/


var  num = 1;
function atras(){
    num--;
    if (num<1)
        num =3;
    var foto = document.getElementById("foto");
    foto.src = "img/foto"+num+".jpg";
    };

function adelante(){
    num ++;
    if (num>3)
        num =1;
    var foto = document.getElementById("foto");
    foto.src = "foto"+num+".jpg";
    };

window.addEventListener('load', function(){
    adelante(num);
    atras(num);
    
});