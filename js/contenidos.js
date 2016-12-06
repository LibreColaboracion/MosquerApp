var iglesia = {
    'titulo':'Catedral de Mosquera',
    'Categorias':['cultura','turismo','religion'],
    'historia':'Bla bla blalblalblablabla bla bla blasvla'
    };
    
var parque = {"titulo":'Parque principal',
    'Categorias':['cultura','turismo'],
    'historia':'ble ble ble ble  djfhjksdhfjkdshfkjhsdkfjhsdjfhsjk'
};
var piscina = {"titulo":'Piscina Munisipal',
    'Categorias':['cultura','turismo','deporte'],
    'historia':'aguaagua agua agua agua agua agua agua'
};

var lugares = ['iglesia','piscina','parque','casa de la cultura','alcaldia','Personeria','casa de la juventud'];




function vercontenido (argumento){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    console.log('hola');
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
                    console.log('hola')
                    var contenedor = document.getElementById('titulo'),
                    
                    parrafo = document.getElementById("parrafo");
                    contenedor.innerHTML = "<h1 id=titulo'>"+ argumento.titulo + "</h1>";
                    parrafo.innerHTML = argumento.historia
                    
                    
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
                    contenedor.style.display = "flex";
                    contenedor.style.WebkitTransition = "all 2s";
                    contenedor.style.transition = "all 1s"; 
                    console.log('case 0');
                    
                    
                break;
            };
    };
};


/* galeria*/
var  num = 1;
function adelante(){
    num ++;
    if (num>3){
        num =1;
    var foto = document.getElementById("foto");
    foto.src = "foto"+num+".jpg";
    }

function atras(){
    num--;
    if (num<1)
        num =3;
    var foto = document.getElementById("foto");
    foto.src = "foto"+num+".jpg";
    };

};




/*zoom mapa*/

function noVercontenido (argumento){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    console.log('cerrar');
     for (j=0; j <= 2; j++){
        switch(j){
                case 0:
                   var zoom = document.getElementById('mapaex');
                    zoom.style.left = "50%";
                    zoom.style.top = "50%";
                    zoom.style.width = '250%';
                    zoom.style.height = '250%';
                    zoom.style.WebkitTransition = "all 2s";
                    zoom.style.transition = "all 1s"; 
                    console.log('case 0');
                    
                    
                break;
            };
    };
};                    