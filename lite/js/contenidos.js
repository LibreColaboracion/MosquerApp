/* galeria*/
var  num = 1;
    function atras(arg){
            var cantidadFotos = (arg.contenido[0].imagenes);
            num--;
            if (num<1)
                num =cantidadFotos;
            var foto = document.getElementById("foto");
            foto.src =  "lugares/"+(arg.nombreDeLaCarpeta)+"/imagenes/" +"foto"+num+".jpg";
            console.log (cantidadFotos);
            };
    function adelante(arg){
            var cantidadFotos = (arg.contenido[0].imagenes);
            num ++;
            if (num>cantidadFotos)
                num =1;
            var foto = document.getElementById("foto");
            foto.src = "lugares/"+(arg.nombreDeLaCarpeta)+"/imagenes/" +"foto"+num+".jpg";
            };


//funsion para traer los contenidos.

function vercontenido (argumento){ 
     for (j=0; j <= 4; j++){
        switch(j){
                case 0:
                    var contenedor = document.getElementById('detalles');
                        noMarco = document.getElementById('marcopresentador');
                         flechas = document.getElementById('botones');
                    noMarco.style.display = "none",   
                    contenedor.style.left = "0";
                    contenedor.style.top = "0";
                    contenedor.style.width = '100%';
                    contenedor.style.height = '100%';
                    contenedor.style.wordWrap = "break-word"; 
                    contenedor.style.transition = "all 1s"; 
                    contenedor.style.backgroundColor = "white";
                    contenedor.style.display = "inherit";
                    contenedor.style.display = "block";
                    contenedor.style.position = "fixed";
                     flechas.style.display = "flex";
                    console.log('ok estilos cargados');
                break;
                case 1:
                    var contenedor = document.getElementById('categoria1');
                        galeria = document.getElementById('galeria');
                        galeria.innerHTML = (" <img src='lugares/"+(argumento.nombreDeLaCarpeta)+"/imagenes"+"/foto1.jpg 'width='100%' id = 'foto'>");
                        atras(argumento);
                        adelante(argumento);
                        
                        clickiz = document.getElementById("iz");
                        clickder = document.getElementById("der");
                                               
                        clickiz.addEventListener('click',function(){atras(argumento)}); 
                        clickder.addEventListener('click',function(){adelante(argumento)});
                        
                        contenidocat.innerHTML = ("<header><nav><ul> <li><a href=#"+ argumento.contenido[0].subtitulo + ">Inicio</a></li>"+
                                                                    "<li><a href=#"+ argumento.contenido[1].subtitulo + ">" +argumento.contenido[1].subtitulo+" </a></li>"+
                                                                    "<li><a href=#"+ argumento.contenido[2].subtitulo + ">" +argumento.contenido[2].subtitulo+" </a></li>"+
                                                                    "<li><a href=#"+ argumento.contenido[3].subtitulo + ">" +argumento.contenido[3].subtitulo+" </a></li></ul></nav></header>");
                       
                        contenedor.innerHTML = ( "<p>"+ (argumento.titulo)+"</p>" + 
                                                 "<a name=" + argumento.contenido[0].subtitulo + ">" + argumento.contenido[0].subtitulo + "</a>" + 
                                                 "<p><audio controls  src='lugares/"+(argumento.nombreDeLaCarpeta)+"/audio"+"/"+(argumento.contenido[0].audio)+"'preload='auto' type='audio/ogg'></audio></p>"+
                                                "<p>"+ (argumento.contenido[0].texto)+"</p>"
                                               );
                                             
                        contenedor.style.display = "inherit";
                        contenedor.style.textAlign = "justify";
                        contenidocat.style.display = "inherit";

                        console.log('ok contenidos cargados');
                        console.log (argumento.nombreDeLaCarpeta);
                        console.log (argumento.contenido[0].audio);
                        
                    break;
                case 2:
                    var contenedor = document.getElementById('categoria2');
                    
                        contenedor.innerHTML = ("<a name=" + argumento.contenido[1].subtitulo + ">" + argumento.contenido[1].subtitulo + "</a>" + 
                                                "<p><audio controls src='lugares/"+(argumento.nombreDeLaCarpeta)+"/audio"+"/"+(argumento.contenido[1].audio)+"'preload='auto' type='audio/ogg'></audio></p>"+
                                                "<p>"+ (argumento.contenido[1].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenedor.style.textAlign = "justify";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados 1');
                        
                    break;
                case 3:
                    var contenedor = document.getElementById('categoria3');
                        contenedor.innerHTML = ("<a name="+ (argumento.contenido[2].subtitulo) + ">" +(argumento.contenido[2].subtitulo)+" </a>" + 
                                                "<p><audio controls  src='lugares/"+(argumento.nombreDeLaCarpeta)+"/audio"+"/"+(argumento.contenido[2].audio)+"'preload='auto' type='audio/ogg'></audio></p>"+
                                                "<p>"+ (argumento.contenido[2].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenedor.style.textAlign = "justify";
                        contenidocat.style.display = "inherit";
                        console.log('ok contenidos cargados 2');
                    break;
                case 4:
                    var contenedor = document.getElementById('categoria4');
                        
                        contenedor.innerHTML = ("<a name="+ argumento.contenido[3].subtitulo + ">" +argumento.contenido[3].subtitulo+" </a>" + 
                                               "<p><audio controls  src='lugares/"+(argumento.nombreDeLaCarpeta)+"/audio"+"/"+(argumento.contenido[3].audio)+"'preload='auto' type='audio/ogg'></audio></p>"+
                                               "<p>"+ (argumento.contenido[3].texto)+"</p>"
                                               );
                        contenedor.style.display = "inherit";
                        contenedor.style.textAlign = "justify";
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
                    noMarco = document.getElementById('marcopresentador');
                    noMarco.style.display = "block",
                    contenedor.style.left = "50%";
                    contenedor.style.top = "50%";
                    contenedor.style.width = '0%';
                    contenedor.style.height = '0%';
                    contenedor.style.WebkitTransition = "all 2s";
                    contenedor.style.transition = "all 1s"; 
                    flechas = document.getElementById('botones');
                    flechas.style.display = "none";
                    
                  
                    
                    
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
            aumento.style.width = "760%";
            aumento.style.marginLeft = "-325%";
            aumento.style.marginTop = "-136%";
            aumento.style.transition = "all 2s"; 
            console.log('acercando mapa');
            };
function mzoom (){ 
    console.log('lupamenos');
            var aumento = document.getElementById("mapaex");
            aumento.style.width = "100%";
            aumento.style.marginLeft = "0%";
            aumento.style.marginTop = "0%";
            aumento.style.transition = "all 2s"; 
            console.log('Alejando mapa');
            };
