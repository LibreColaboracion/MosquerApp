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
    lugares["parque1"] = parque1; 
    lugares["laguna_la_herrera"]= laguna_la_herrera;
    lugares["iglesia"]= iglesia;
    
console.log(lugares.parque1.cordenadas);
function hola(arg){
    var f = document.getElementById('marcopresentador');
    f.innerHTML = "<div onclick='vercontenido("+arg+");''>" + "<h3>"+ lugares[arg]['titulo'] +"</h3>"+"</div>" ;
    f.innerHTML += ("<p>"+lugares[arg]["datos"]["tel"])+"</p>" ;
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
            c.innerHTML += '<circle id="'+e+'" cx="'+arg[e]['cordenadas'][0]+'" cy="'+arg[e]["cordenadas"][1]+'" r="1" style="opacity:1;fill:#00ff00;fill-opacity:1;fill-rule:nonzero;stroke:#800000;stroke-width:1.37062943;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"> </circle>';
            
        });
    Object.keys(arg).forEach(function(e){
            a.getElementById(e).addEventListener('click',function(){hola(e)});
        });
};


window.addEventListener('load', function(){
    puntos(lugares);
    

});




   