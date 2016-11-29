window.onload=function() {
  var svg = document.getElementById("mapaex"); 
  var svgDoc = svg.contentDocument;
  
  var circle = svgDoc.getElementById("iglesia");
  circle.setAttributeNS(null, 'cx', 200);

};