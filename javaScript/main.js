 // Muestra el contenido del menú cuando se hace clic en el botón
document.querySelector('.navbar-toggler').addEventListener('click', function() {
 document.querySelector('.collapse').classList.toggle('show');
});

// Boton para copiar nro

document.getElementById("boton-copiar").addEventListener("click", function() {
    var textoACopiar = document.getElementById("nrotel").textContent;
    
    var campoTemporal = document.createElement("textarea");
    campoTemporal.value = textoACopiar;
  
    document.body.appendChild(campoTemporal);
  
    campoTemporal.select();
    campoTemporal.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    document.body.removeChild(campoTemporal);
  
  });
  
  // Boton para copiar nro
  document.getElementById("boton-copiar").addEventListener("click", function() {
    var textoACopiar = document.getElementById("dircorreo").textContent;
    
    var campoTemporal = document.createElement("textarea");
    campoTemporal.value = textoACopiar;
  
    document.body.appendChild(campoTemporal);
  
    campoTemporal.select();
    campoTemporal.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    document.body.removeChild(campoTemporal);
  
  });