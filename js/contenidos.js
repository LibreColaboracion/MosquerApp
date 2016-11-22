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

function vercontenido(argumento){ // argumentopodria ser cualquier palabra como lo hizo con iglesia
    console.log('hola')
    var contenedor = document.getElementById('titulo'),
        parrafo = document.getElementById("parrafo");
    contenedor.innerHTML = "<h1 id=titulo'>"+ argumento.titulo +"</h1>";
    parrafo.innerHTML = argumento.historia
    
};


                 

window.addEventListener('load', function(){
    verNuevaLista(lugares);
    document.querySelector("#iglesia").addEventListener('click',function(){
                                            vercontenido(iglesia)}, false); 
    document.querySelector("#alcaldia").addEventListener('click',function(){
                                            vercontenido(parque)}, false);
    document.querySelector("#alcaldia").addEventListener('click',function(){
                                            vercontenido(piscina)}, false);

});