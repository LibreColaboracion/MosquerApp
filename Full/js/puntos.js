/*
var cordenadas = {
    'laguna_la_herrera':[58,142],
    'Humedal Meandro del say':[391,193],
    'Desierto De Sabrinsky':[84,199],
    'Hacienda El Novillero':[170,122],
    'Humedal guali':[285, 104],
    'Piedras de Usca':[85, 173],
    'parquep':[208, 110],
    'iglesia':[205, 108],
    'Auditorio':[217, 88],
    'Bibliteca_San_Juan_Bosco':[214, 90],
    'Casa_de_la_Cultura':[208, 95],
    'Colegio_la_Merced':[212, 103],
    'Parque_Acuatico':[204, 80],
    'Parque_Central':[205, 104],
    'Parque_Cultural':[221, 88],
    'Parque_De_Las_Aguas':[200, 79],
    'Teatro_Municipal':[209, 108],
    'Villa_Olimpica':[195, 112],
    'alcaldia':[208, 106],
};
*/
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



/* esta funcion crea  los puntos trallendo datos de JSON como coordenadas, tambien se determina el tama; del punto y  el color */

function hola(arg){
    var f = document.getElementById('marcopresentador');
    f.innerHTML = "<div onclick='vercontenido("+arg+");''>" + "<h3>"+ lugares[arg]['titulo'] +"</h3>"+"</div>" ;
    //f.innerHTML += ("<p>"+lugares[arg]["datos"]["tel"])+"</p>" ;
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
            console.log(arg[e]["cordenadas"]);
            c.innerHTML += '<circle id="'+e+'" cx="'+arg[e]['cordenadas'][0]+'" cy="'+arg[e]["cordenadas"][1]+'" r="'+arg[e]["cordenadas"][2]+'" style="fill:#00ff00;stroke:#800000;"> </circle>';
            
        });
    Object.keys(arg).forEach(function(e){
            a.getElementById(e).addEventListener('click',function(){hola(e)});
        });
};


window.addEventListener('load', function(){
    puntos(lugares);
    

});




   
