var iglesia = {
    'titulo':'Catedral de Mosquera',
    'subtitulo':'Centro religiosco de mosquera',
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


function tituloSubtitulo (primertoque){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    var presentador = document.getElementById("titulo");
        subtitulo = document.getElementById("subtitulo");
        presentador.innerHTML = "<h1 id=titulo'>"+ primertoque.titulo + "</h1>";
        subtitulo.innerHTML = primertoque.subtitulo;

};


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




function zoom(){
      if (document.object) {
        document.object.mapaex.width="623%";
        document.object.mapaex.marginTop="-103%";
        document.object.mapaex.marginLeft="-259%";
      } else {
        logo = document.getElementById("mapaex");
        logo.width = "623%";
        logo.style.marginTop ="-103%" ; 
        logo.style.marginLeft ="-259%" ; 
      };
    };