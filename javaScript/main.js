 // Muestra el contenido del menú cuando se hace clic en el botón
document.querySelector('.navbar-toggler').addEventListener('click', function() {
 document.querySelector('.collapse').classList.toggle('show');
});

// Botón para copiar número de teléfono
document.getElementById("boton-copiar-nrotel").addEventListener("click", function() {
    var textoACopiar = document.getElementById("nrotel").textContent;
    
    copiarAlPortapapeles(textoACopiar);
});

// Botón para copiar dirección de correo 
document.getElementById("boton-copiar-dircorreo").addEventListener("click", function() {
    var textCopiar = document.getElementById("dircorreo").textContent;
    
    copiarAlPortapapeles(textCopiar);
});

function copiarAlPortapapeles(texto) {
    var campoTemporal = document.createElement("textarea");
    campoTemporal.value = texto;
    
    document.body.appendChild(campoTemporal);
  
    campoTemporal.select();
    campoTemporal.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    document.body.removeChild(campoTemporal);
  
    alert("Texto copiado: " + texto);
}
