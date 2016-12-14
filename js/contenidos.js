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
                    console.log('ok estilos cargados');
                break;
                case 1:
                    var contenedor = document.getElementById('categoria1');
                        contenidocat.innerHTML = (argumento.contenido[0].subtitulo);
                        
                        contenedor.innerHTML = ("<p>"+ (argumento.titulo)+"</p>" + 
                                                "<p>"+ (argumento.contenido[0].subtitulo)+"</p>" + 
                                               "<p>"+ (argumento.contenido[0].imagenes)+"</p>"+
                                               "<p>"+ (argumento.contenido[0].rel)+"</p>"+
                                               "<p>"+ (argumento.contenido[0].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados');
                    break;
                case 2:
                    var contenedor = document.getElementById('categoria2');
                        contenidocat.innerHTML = (argumento.contenido[1].subtitulo);
                        
                        contenedor.innerHTML = ("<p>"+ (argumento.titulo)+"</p>" + 
                                                "<p>"+ (argumento.contenido[1].subtitulo)+"</p>" + 
                                               "<p>"+ (argumento.contenido[1].imagenes)+"</p>"+
                                               "<p>"+ (argumento.contenido[1].audio)+"</p>"+
                                               "<p>"+ (argumento.contenido[1].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados 1');
                    break;
                case 3:
                    var contenedor = document.getElementById('categoria3');
                        contenidocat.innerHTML = (argumento.contenido[2].subtitulo);
                        
                        contenedor.innerHTML = ("<p>"+ (argumento.titulo)+"</p>" + 
                                                "<p>"+ (argumento.contenido[2].subtitulo)+"</p>" + 
                                               "<p>"+ (argumento.contenido[2].imagenes)+"</p>"+
                                               "<p>"+ (argumento.contenido[2].audio)+"</p>"+
                                               "<p>"+ (argumento.contenido[2].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados 2');
                    break;
                case 4:
                    var contenedor = document.getElementById('categoria4');
                        contenidocat.innerHTML = (argumento.contenido[3].subtitulo);
                        
                        contenedor.innerHTML = ("<p>"+ (argumento.titulo)+"</p>" + 
                                                "<p>"+ (argumento.contenido[3].subtitulo)+"</p>" + 
                                               "<p>"+ (argumento.contenido[3].imagenes)+"</p>"+
                                               "<p>"+ (argumento.contenido[3].audio)+"</p>"+
                                               "<p>"+ (argumento.contenido[3].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados 3');
                    break;
            };
    };
};

//no ver contenido

function noVercontenido (argumento){ 
    console.log('cerrar');
     for (j=0; j <= 4; j++){
        switch(j){
                case 0:
                    var contenedor = document.getElementById('detalles');
                    contenedor.style.left = "50%";
                    contenedor.style.top = "50%";
                    contenedor.style.width = '0%';
                    contenedor.style.height = '0%';
                    contenedor.style.WebkitTransition = "all 2s";
                    contenedor.style.transition = "all 1s"; 
                    console.log('ok estilos cerrados');
                break;
                case 1:
                    var contenedor = document.getElementById('categoria1');
                        contenedor.style.display = "none";
                        contenidocat.style.display = "none";
                        console.log('ok contenidos ocultos');
                break;
                case 2:
                    var contenedor = document.getElementById('categoria2');
                        contenedor.style.display = "none";
                        contenidocat.style.display = "none";
                        console.log('ok contenidos ocultos');
                break;
                case 3:
                    var contenedor = document.getElementById('categoria3');
                        contenedor.style.display = "none";
                        contenidocat.style.display = "none";
                        console.log('ok contenidos ocultos');
                break;
                case 4:
                    var contenedor = document.getElementById('categoria4');
                        contenedor.style.display = "none";
                        contenidocat.style.display = "none";
                        console.log('ok contenidos ocultos');
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
            console.log('acercando mapa');
            
            };
function mzoom (){ 
    console.log('lupamenos');
            var aumento = document.getElementById("mapaex");
            aumento.style.width = "100%";
            aumento.style.marginLeft = "0%";
            aumento.style.marginTop = "0%";
            aumento.style.WebkitTransition = "all 4s";
            aumento.style.transition = "all 4s"; 
            console.log('Alejando mapa');
            
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