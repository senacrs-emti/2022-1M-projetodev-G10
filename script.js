
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


// identifica o elemento 
var radio1 = document.getElementById("radio1");

// esconde
var dec1970 = document.getElementsByClassName("dec1970");
dec1970[0].style.display = "none";
dec1970[1].style.display = "none";
dec1970[2].style.display = "none";
var dec1980 = document.getElementsByClassName("dec1980");
dec1980[0].style.display = "none";
dec1980[1].style.display = "none";
dec1980[2].style.display = "none";

// radio decada 1970
radio1.onclick = function() {
  // mostra a decada 70
  dec1970[0].style.display = "block";
  dec1970[1].style.display = "block";
  dec1970[2 ].style.display = "block";
  // oculta as demais
  dec1980[0].style.display = "none";
  dec1980[1].style.display = "none";
  dec1980[2].style.display = "none";
}