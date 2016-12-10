var iglesia = {
    'titulo':'Catedral de Mosquera',
    'subtitulo':'Centro religiosco de mosquera',
    'Categorias':['cultura','turismo','religion'],
    'historia':'Bla bla blalblalblablabla bla bla blasvla'
    };



var lugares = ['iglesia','piscina','parque','casa de la cultura','alcaldia','Personeria','casa de la juventud'];



function vercontenido (argumento){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    console.log('ok click');
     for (j=0; j <= 2; j++){
        switch(j){
                case 0:
                    var contenedor = document.getElementById('detalles');
                    contenedor.style.left = "0";
                    contenedor.style.top = "0";
                    contenedor.style.width = '100%';
                    contenedor.style.height = '100%';
                    contenedor.style.WebkitTransition = "all 2s";
                    contenedor.style.transition = "all 1s"; 
                    console.log('case 0');
                break;
                case 1:
                    console.log('texto')
                    var contenedor = document.getElementById('titulox'),
                    parrafo = document.getElementById("parrafo");
                    contenedor.innerHTML = argumento.titulo;
                    parrafo.innerHTML = argumento.historia;
                    contenedor.style.display = "inherit";
                    parrafo.style.display = "inherit";
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
                    parrafo = document.getElementById("parrafo");
                    contenedor.style.display = "none";
                    parrafo.style.display = "none";
                break;
            };
    };
};



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