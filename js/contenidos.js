/* Con este JSON cargaremos el contenido, pero llamadolo desde .TXT donde el titulo sera el 
nombre del archivo y el parrafo sera su mismo  contenido*/


var objetoJSON = {"titulo":"Iglesia Principal de Mosquera",
                  "parrafo":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
                };
    
/*con esta variable cargaremos los parrafos en el html*/    
var parrafo = document.getElementById("parrafo");
var capa2 = document.createTextNode(objetoJSON.parrafo);
    document.body.appendChild(capa2)

/*con esta variable cargaremos los TITULOS en el html*/
var capa = document.getElementById("tituloh1");
var h1 = document.createElement("h1");
h1.innerHTML = objetoJSON.titulo;
capa.appendChild(h1);
