function vercontenido (argumento){ 
     for (j=0; j <= 2; j++){
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
                    var contenedor = document.getElementById('titulox');
                        tel = document.getElementById("tel");
                        dir = document.getElementById("dir");
                        contenido = document.getElementById("contenido");
                        imagenes = document.getElementById("imagenes");
                        audio = document.getElementById("audio");
                        texto = document.getElementById("texto");
                        
                        contenedor.innerHTML = (argumento.titulo);
                        tel.innerHTML = (argumento.datos.tel);
                        dir.innerHTML = (argumento.datos.dir);
                        
                        contenido.innerHTML = Object.keys(argumento.contenido);
                        imagenes.innerHTML = (argumento.contenido.arte.imagenes);
                        audio.innerHTML = (argumento.contenido.arte.audio);
                        texto.innerHTML = (argumento.contenido.arte.texto);
                        
                       
                    
                    contenedor.style.display = "inherit";
                    tel.style.display = "inherit";
                    dir.style.display = "inherit";
                    
                    contenido.style.display = "inherit";
                    imagenes.style.display = "inherit";
                    audio.style.display="inherit";
                    texto.style.display = "inherit";
                    
                   
                    
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
                    console.log('texto')
                    var contenedor = document.getElementById('titulox'),
                    texto = document.getElementById("texto");
                    contenedor.style.display = "none";
                    tel.style.display = "none";
                    dir.style.display = "none";
                    
                    contenido.style.display = "none";
                    imagenes.style.display = "none";
                    audio.style.display="none";
                    texto.style.display = "none";
                    
                   
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
    foto.src = "foto"+num+".jpg";
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