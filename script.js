
// efeito modal e menu - modODS
var modODS = document.getElementById("modODS");
var lnkODS = document.getElementById("lnkODS");
var spanODS = document.getElementById("closeODS");
lnkODS.onclick = function() {
    modODS.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modODS) {
    modODS.style.display = "none";
  }
}
spanODS.onclick = function() {
  modODS.style.display = "none";
}

// efeito modal e menu - modParticipantes
var modParticipantes = document.getElementById("modParticipantes");
var lnkParticipantes = document.getElementById("lnkParticipantes");
var spanParticipantes = document.getElementById("closeParticipantes");

lnkParticipantes.onclick = function() {
    modParticipantes.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modParticipantes) {
    modParticipantes.style.display = "none";
  }
}
spanParticipantes.onclick = function() {
  modParticipantes.style.display = "none";
}

// efeito modal e menu - modReferencias
var modReferencias = document.getElementById("modReferencias");
var lnkReferencias = document.getElementById("lnkReferencias");
var spanReferencias = document.getElementById("closeReferencias");
lnkReferencias.onclick = function() {
    modReferencias.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modReferencias) {
    modReferencias.style.display = "none";
  }
}
spanReferencias.onclick = function() {
  modReferencias.style.display = "none";
}

// efeito modal e menu - modDados
var modDados = document.getElementById("modDados");
var lnkDados = document.getElementById("lnkDados");
var spanDados = document.getElementById("closeDados");
lnkDados.onclick = function() {
    modDados.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modDados) {
    modDados.style.display = "none";
  }
}
spanDados.onclick = function() {
  modDados.style.display = "none";
}


  // identifica os elementos
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
// oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";


// radio decada 1970
var radio1 = document.getElementById("radio1");
radio1.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 70
  dec1970[0].style.display = "block";
}


// radio decada 1980
var radio2 = document.getElementById("radio2");
radio2.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 80
  dec1980[0].style.display = "block";
  dec1980[1].style.display = "block";
  dec1980[2].style.display = "block";
}


// radio decada 1990
var radio3 = document.getElementById("radio3");
radio3.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 90
  dec1990[0].style.display = "block";
  dec1990[1].style.display = "block";
  dec1990[2].style.display = "block";
  dec1990[3].style.display = "block";
  dec1990[4].style.display = "block";
}


// radio decada 2000
var radio4 = document.getElementById("radio4");
radio4.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 2000
  dec2000[0].style.display = "block";
  dec2000[1].style.display = "block";
}


// radio decada 2010
var radio5 = document.getElementById("radio5");
radio5.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 2010
  dec2010[0].style.display = "block";
  dec2010[1].style.display = "block";
  dec2010[2].style.display = "block";
  dec2010[3].style.display = "block";
  dec2010[4].style.display = "block";
}

// radio decada 2020
var radio6 = document.getElementById("radio6");
radio6.onclick = function() {
  var dec1970 = document.getElementsByClassName("dec1970");
  var dec1980 = document.getElementsByClassName("dec1980");
  var dec1990 = document.getElementsByClassName("dec1990");
  var dec2000 = document.getElementsByClassName("dec2000");
  var dec2010 = document.getElementsByClassName("dec2010");
  var dec2020 = document.getElementsByClassName("dec2020");
  // oculta os elementos
  dec1970[0].style.display = "none";
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
  dec1990[0].style.display = "none";
  dec1990[1].style.display = "none";
  dec1990[2].style.display = "none";
  dec1990[3].style.display = "none";
  dec1990[4].style.display = "none";
  dec2000[0].style.display = "none";
  dec2000[1].style.display = "none";
  dec2010[0].style.display = "none";
  dec2010[1].style.display = "none";
  dec2010[2].style.display = "none";
  dec2010[3].style.display = "none";
  dec2010[4].style.display = "none";
  dec2020[0].style.display = "none";
  dec2020[1].style.display = "none";
  // mostra a decada 2020
  dec2020[0].style.display = "block";
  dec2020[1].style.display = "block";
}