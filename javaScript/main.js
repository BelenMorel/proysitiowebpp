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


//mostrar y ocultar informacion de horarios

window.onload = function() {
    toggleInfo('pdfContent1');
};

function toggleInfo(contentId) {
    // Oculta los contenidos
    var allContents = document.querySelectorAll('.info-content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Muestra el contenido 
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

   // Actualiza el elemento que muestra la opción seleccionada
   var selectedOptionDisplay = document.getElementById('selectedOptionDisplay');
   selectedOptionDisplay.textContent = selectedOption;
}

document.addEventListener('DOMContentLoaded', function () {
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfUrl = 'path/to/your/file1.pdf';

    window.PDFViewerApplication.initializeViewer(pdfViewer);
    window.PDFViewerApplication.open(pdfUrl);
  });

 
