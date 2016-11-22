var iglesia = {
    'titulo':'Catedral de Mosquera',
    'Categorias':['cultura','turismo','religion'],
    'historia':'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
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
    var contenedor = document.getElementById('titulo');
        contenedor.className = ("");
        contenedor.className = ("detallesvisto");
        contenedor.innerHTML = argumento.titulo;
        parrafo = document.getElementById("parrafo");
        parrafo.className = ("");
        parrafo.className = ("detallesvisto");
        parrafo.innerHTML = argumento.historia;
};


                 

window.addEventListener('load', function(){
    
    document.querySelector("#iglesia").addEventListener('click',function(){
                                            vercontenido(iglesia)}, false); 
    document.querySelector("#alcaldia").addEventListener('click',function(){
                                            vercontenido(alcaldia)}, false);
    document.querySelector("#alcaldia").addEventListener('click',function(){
                                            vercontenido(piscina)}, false);

});