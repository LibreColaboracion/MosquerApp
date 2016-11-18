// esta seccion tendra los textos, considero parcialmente que
//todo lo que sea Json este en un solo archivo.
var iglesia = {
    'titulo':'Catedral de Mosquera',
    'Categorias':['cultura','turismo','religion'],
    'historia':'<img class="galeria" src="lugares/lugar1/img/iglesia.png"> Bla bla blalblalblablabla bla bla blasvla'
    
    };
    
var parque = {"titulo":'Parque principal',
    'Categorias':['cultura','turismo'],
    'historia': '<img class="galeria" src="lugares/lugar2/img/parque.png"> ble ble ble ble  djfhjksdhfjkdshfkjhsdkfjhsdjfhsjk'
};
var piscina = {"titulo":'Piscina Munisipal',
    'Categorias':['cultura','turismo','deporte'],
    'historia':'<img class="galeria" src="lugares/lugar3/img/pisina.png">aguaagua agua agua agua agua agua agua'
};

var lugares = ['iglesia','piscina','parque','casa de la cultura','alcaldia','Personeria','casa de la juventud'];

//esta funcion carga los textos en el html segun sea el click 
function vercontenido(lugartexto){ 
    console.log('hola')
    var contenedor = document.getElementById("titulotex");
        parrafo = document.getElementById("parrafo");
        contenedor.innerHTML = "<h1 id='titulotex'>" + lugartexto.titulo +"</h1>";
    	parrafo.innerHTML = lugartexto.historia;
    	
    
};


//esta funcion se usara para cargar automaticamente los nuevos lugares
function verNuevaLista(){
     for (i=0; i<= -1+ lugares.length; i++) {
        console.log (lugares[i]);
        var lista = document.getElementById("lista"); 
        lista.innerHTML += lugares[i] + '<br>';
     };
                 
};
window.addEventListener('load', function(){
    verNuevaLista(lugares)
});
