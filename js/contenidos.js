/* Con este JSON cargaremos el contenido, pero llamadolo desde .TXT donde el titulo sera el 
nombre del archivo y el parrafo sera su mismo  contenido*/


document.getElementById("iglesia").addEventListener("click", myFunction);

function myFunction() {
	var lugar = document.getElementById("iglesia");
    document.getElementById("iglesia").innerHTML = (lugar.id);
    }

 var traerdoc = require("traerdoc");
					traerdoc.readFile('./file.txt', 'utf8', function(err, data) {
    				if( err ){
     			   console.log(err)
   					 }
    				else{
      			  console.log(data);
   					 }
					});


}	

/*

var objetoJSON = {"titulo":"Iglesia Principal de Mosquera",
                  "parrafo":"aaaaa  aaa  aaaaaaaaaa   aaaaaaakjhfdkjshfk sjh"
                };
               

con esta variable cargaremos los TITULOS en el html
var capa = document.getElementById("tituloh1");
var h1 = document.createElement("h1");
h1.innerHTML = objetoJSON.titulo;
capa.appendChild(h1)


    
/*con esta variable cargaremos los parrafos en el html

no logro modificar loos estilos de id parrafos
document.getElementById("parrafo").style.color = "red";
document.getElementById("parrafo").style.fontFamily = "Arial";
document.getElementById("parrafo").style.fontSize = "larger";

var parrafo = document.getElementById("parrafo");
var capa2 = document.createTextNode(objetoJSON.parrafo);
	 document.body.appendChild(capa2)


/*leyendo archivo txt para insertar en html


*/






/* dejo el codigo de Carlos R, sin borrar para analisar las diferentes logicas de resolver el problema,
aun que la de Carlos R es mas estilizada por su experiencia quiero que las vea el tambien.*/

/* Dejo comentado el codigo de carlos ya que a la hora de trabajar los estilos css dle titulo por separado
no lo permite pueto que esta insertyandolo todo en el id contenido.

var objetoJSON = {
		"titulo":"Iglesia Principal de Mosquera",
		"parrafo":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
                };
var d = document.getElementById ("contenido");
console.log (objetoJSON.titulo);
console.log (objetoJSON.parrafo);
	d.innerHTML = "objetoJSON.titulo";
    d.innerHTML =  objetoJSON.parrafo;

*/
    

