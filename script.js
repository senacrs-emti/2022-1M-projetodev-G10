// fechar
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modODS.style.display = "none";
}


// efeito modal e menu - modODS
var modODS = document.getElementById("modODS");
var lnkODS = document.getElementById("lnkODS");
lnkODS.onclick = function() {
    modODS.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modODS) {
    modODS.style.display = "none";
  }
}

// efeito modal e menu - modParticipantes
var modParticipantes = document.getElementById("modParticipantes");
var lnkParticipantes = document.getElementById("lnkParticipantes");
lnkParticipantes.onclick = function() {
    modParticipantes.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modParticipantes) {
    modParticipantes.style.display = "none";
  }
}

// efeito modal e menu - modReferencias
var modReferencias = document.getElementById("modReferencias");
var lnkReferencias = document.getElementById("lnkReferencias");
lnkReferencias.onclick = function() {
    modReferencias.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modReferencias) {
    modReferencias.style.display = "none";
  }
}

// efeito modal e menu - modDados
var modDados = document.getElementById("modDados");
var lnkDados = document.getElementById("lnkDados");
lnkDados.onclick = function() {
    modDados.style.display = "block";
}  
window.onclick = function(event) {
  if (event.target == modDados) {
    modDados.style.display = "none";
  }
}
