var lugares ={};

    lugares["alcaldia"]= alcaldia;
    lugares["auditorio"]= auditorio;
    lugares["biblioteca_san_juan_bosco"]= biblioteca_san_juan_bosco;
    lugares["casa_de_la_cultura"]= casa_de_la_cultura;
    lugares["casa_negra_maria"]= casa_negra_maria;
    lugares["cementerio"]= cementerio;
    lugares["club_minicar"]= club_minicar;
    lugares["colegio_la_merced"]= colegio_la_merced;
    lugares["desierto_de_Sabrinsky"]= desierto_de_Sabrinsky;
    lugares["hacienda_el_novillero"]= hacienda_el_novillero;
    lugares["humedal_guali"]= humedal_guali;
    lugares["humedal_meandro_del_say"]= humedal_meandro_del_say;
    lugares["iglesia_central"]= iglesia_central;
    lugares["laguna_la_herrera"]= laguna_la_herrera;
    lugares["parque_acuatico"]= parque_acuatico;
    lugares["parque_cultural"]= parque_cultural;
    lugares["parque_de_mascotas"]= parque_de_mascotas;
    lugares["parque_el_trebol"]= parque_el_trebol;
    lugares["parque_historico_mosquera"]= parque_historico_mosquera;
    lugares["parque_las_aguas"]= parque_las_aguas;
    lugares["piedras_de_usca"]= piedras_de_usca; 
    lugares["primera_casa_cultura"]= primera_casa_cultura;
    lugares["teatro_municipal"]= teatro_municipal;
    lugares["villa_olimpica"]= villa_olimpica;

var categoria = { // de aquí se toman los colores
    "historico": "#673AB7",
    "cultura": "#F50057",
    "turismo": "#00BCD4",
    "ecológico": "#4CAF50",
    "recreativo": "#607D8B"
}

/* esta funcion crea  los puntos trallendo datos de JSON como coordenadas, tambien se determina el tama; del punto y  el color */

function hola(arg){
    var f = document.getElementById('marcopresentador');
    f.innerHTML = "<div onclick='vercontenido("+arg+");''>" + "<h3>"+ lugares[arg]['titulo'] +"</h3>"+"</div>" ;
    f.innerHTML += ("<p>"+lugares[arg]["datos"]["dir"])+"</p>";
    
    f.style.borderRadius = "10px";
    f.style.borderStyle = "solid";
    f.style.backgroundColor = "white";
    f.style.borderColor = "brown";
    f.style.width ="90%";
    f.style.height ="auto";
     console.log(arg);
};

function puntos(arg){ 
    var a = document.getElementById('mapaex').getSVGDocument();
    var c = a.getElementById('layer2');
    // Me adelante un poco con esta sentencia que usted no sabe manejar pero es casi un for no por eso dice foreach = para cada uno
    Object.keys(arg).forEach(function(e){
            c.innerHTML += '<circle id="'+e+'" class="'+arg[e]['categorias'][0]+'" cx="'+arg[e]['cordenadas'][0]+'" cy="'+arg[e]["cordenadas"][1]+'" r="'+arg[e]["cordenadas"][2]+'" fill="'+categoria[arg[e]['categorias'][0]]+'" stroke="'+categoria[arg[e]['categorias'][0]]+'"> </circle>';
        });
    Object.keys(arg).forEach(function(e){
            a.getElementById(e).addEventListener('click',function(){hola(e)});
        });
};

/*-------------------------- función para ver puntos segun categorias ----------------*/
function verpuntos(arg){
    var cate = Object.keys(categoria);
    var a = document.getElementById('mapaex').getSVGDocument();
    var Clases = function(){
       if( typeof arg != 'undefined'){
           var index = cate.indexOf(arg);
           
           return cate.splice(index,1)
       }else{
           return cate
       }};
    var OculMostr = function(arg, ocultar){
        for(var i = 0; i <= arg.length -1; i++){
            var dis = a.getElementsByClassName(arg[i]);
            console.log(dis.length);
            for (var j =0; j <= dis.length -1; j++ ){
                dis[j].setAttribute('display', ocultar);
            };
        };
    };
    var clases = Clases(); 
    OculMostr(cate, 'none');
    OculMostr(clases, 'block');
};

window.addEventListener('load', function(){
    puntos(lugares);
    

});




   
